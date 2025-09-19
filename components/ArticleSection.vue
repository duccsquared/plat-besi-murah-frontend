<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800">
    <!-- Section Controls (Edit Mode) -->
    <div v-if="editMode" class="flex items-center gap-2 mb-3">
      <!-- Reorder buttons -->
      <div class="flex flex-col gap-1">
        <button 
          @click="$emit('moveUp')"
          :disabled="isFirst"
          class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-30"
        >
          <i class="bi bi-chevron-up"></i>
        </button>
        <button 
          @click="$emit('moveDown')"
          :disabled="isLast"
          class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-30"
        >
          <i class="bi bi-chevron-down"></i>
        </button>
      </div>
      
      <!-- Section type indicator -->
      <span class="text-sm text-gray-600 dark:text-gray-400 font-medium">
        {{ section.type === 'text' ? 'Text Section' : 'Image Section' }}
      </span>
      
      <!-- Delete button -->
      <button 
        @click="$emit('delete')"
        class="ml-auto p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>

    <!-- Text Section -->
    <div v-if="section.type === 'text'">
      <div v-if="editMode" class="space-y-2">
        <!-- Rich text toolbar -->
        <div class="flex gap-2 border-b border-gray-200 dark:border-gray-600 pb-2">
          <button 
            @click="formatText('bold')"
            class="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i class="bi bi-type-bold"></i>
          </button>
          <button 
            @click="formatText('italic')"
            class="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i class="bi bi-type-italic"></i>
          </button>
          <button 
            @click="formatText('underline')"
            class="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i class="bi bi-type-underline"></i>
          </button>
        </div>
        
        <!-- Text editor -->
        <div 
          ref="textEditor"
          contenteditable="true"
          @input="updateContent"
          v-html="section.content"
          class="min-h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 text-base"
        ></div>
      </div>
      <div v-else class="prose dark:prose-invert max-w-none" v-html="section.content"></div>
    </div>

    <!-- Image Section -->
    <div v-if="section.type === 'image'">
      <div v-if="editMode" class="space-y-3">
        <!-- Image upload -->
        <div v-if="!section.content" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
          <input 
            ref="imageInput"
            type="file" 
            @change="handleImageUpload"
            accept="image/*"
            class="hidden"
          >
          <button 
            @click="$refs.imageInput.click()"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-base"
          >
            <i class="bi bi-cloud-upload mr-2"></i>
            Upload Image
          </button>
        </div>
        
        <!-- Image preview with replace option -->
        <div v-else class="space-y-2">
          <img :src="section.content" alt="Section image" class="max-w-full h-auto rounded-md">
          <button 
            @click="$refs.imageInput.click()"
            class="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            <i class="bi bi-arrow-clockwise mr-1"></i>
            Replace Image
          </button>
          <input 
            ref="imageInput"
            type="file" 
            @change="handleImageUpload"
            accept="image/*"
            class="hidden"
          >
        </div>
      </div>
      <div v-else-if="section.content">
        <img :src="section.content" alt="Article image" class="max-w-full h-auto rounded-md">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  section: Object,
  editMode: Boolean,
  isFirst: Boolean,
  isLast: Boolean
})

const emit = defineEmits(['update', 'delete', 'moveUp', 'moveDown'])

const textEditor = ref(null)

const formatText = (command) => {
  document.execCommand(command, false, null)
  updateContent()
}

const updateContent = () => {
  if (textEditor.value) {
    emit('update', { ...props.section, content: textEditor.value.innerHTML })
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      emit('update', { ...props.section, content: e.target.result })
    }
    reader.readAsDataURL(file)
  }
}
</script>