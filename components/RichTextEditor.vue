<template>
  <div class="border rounded-md dark:bg-gray-700 dark:text-white p-2 pb-0">
    <!-- Toolbar -->
    <div class="flex flex-wrap gap-1 border-b border-gray-300 dark:border-gray-600 pb-2 mb-2">
      <button
        @click="editor?.chain().focus().toggleBold().run()"
        :class="['px-2 py-1 rounded', editor?.isActive('bold') ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600']"
      >
        <strong>B</strong>
      </button>
      <button
        @click="editor?.chain().focus().toggleItalic().run()"
        :class="['px-2 py-1 rounded', editor?.isActive('italic') ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600']"
      >
        <em>I</em>
      </button>
      <button
        @click="editor?.chain().focus().toggleUnderline().run()"
        :class="['px-2 py-1 rounded', editor?.isActive('underline') ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600']"
      >
        <u>U</u>
      </button>
      <!-- <button
        @click="editor?.chain().focus().toggleBulletList().run()"
        :class="['px-2 py-1 rounded', editor?.isActive('bulletList') ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600']"
      >
        • List
      </button>
      <button
        @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="['px-2 py-1 rounded', editor?.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600']"
      >
        H2
      </button>
      <button @click="setLink" class="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
        🔗
      </button>
      <button
        @click="editor?.chain().focus().unsetLink().run()"
        class="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        ❌ Link
      </button> -->
    </div>

    <!-- Editor -->
    <EditorContent
    :editor="editor"
    class="prose dark:prose-invert prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-4 prose-h2:mb-2 prose-p:my-2 prose-a:underline prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none"
    />

  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Write something…' },
})
const emit = defineEmits(['update:modelValue'])

const editor = ref<Editor>()

editor.value = new Editor({
  extensions: [
    StarterKit,
    Underline,
    Link.configure({
      openOnClick: true,
      HTMLAttributes: { class: 'text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200' },
    }),
    Placeholder.configure({ placeholder: props.placeholder }),
  ],
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
})

onBeforeUnmount(() => editor.value?.destroy())

watch(() => props.modelValue, (value) => {
  if (editor.value && value !== editor.value.getHTML()) {
    editor.value.commands.setContent(value, { emitUpdate: false })
  }
})

function setLink() {
  const url = window.prompt('Enter a link URL')
  if (url) editor.value?.chain().focus().setLink({ href: url }).run()
}
</script>

<style scoped>
.ProseMirror {
  outline: none;
  min-height: 8rem;
  padding: 0.5rem;
}
</style>
