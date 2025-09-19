<template>
  <div class="min-h-screen bg-stone-200 dark:bg-gray-900 p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ editMode ? 'Edit Article' : 'Article View' }}
        </h1>
        <button 
          v-if="!editMode"
          @click="enterEditMode"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 text-base"
        >
          <i class="bi bi-pencil"></i>
          Edit Article
        </button>
      </div>

      <!-- Article Content -->
      <div class="bg-stone-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <!-- Title -->
        <div class="mb-4">
          <input 
            v-if="editMode"
            v-model="editableArticle.title"
            placeholder="Article Title"
            class="w-full text-3xl font-bold border-none outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500"
          >
          <h1 v-else class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ article.title || 'Untitled Article' }}
          </h1>
        </div>

        <!-- Subheading -->
        <div class="mb-4">
          <input 
            v-if="editMode"
            v-model="editableArticle.subheading"
            placeholder="Article Subheading"
            class="w-full text-xl text-gray-600 dark:text-gray-300 border-none outline-none bg-transparent placeholder-gray-500"
          >
          <h2 v-else-if="article.subheading" class="text-xl text-gray-600 dark:text-gray-300">
            {{ article.subheading }}
          </h2>
        </div>

        <!-- Meta information -->
        <div class="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <i class="bi bi-person"></i>
            <input 
              v-if="editMode"
              v-model="editableArticle.author"
              placeholder="Author Name"
              class="bg-transparent border-none outline-none placeholder-gray-500 text-base"
            >
            <span v-else>{{ article.author || 'Unknown Author' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="bi bi-calendar"></i>
            <span>{{ formatDate(article.publishDate) }}</span>
          </div>
        </div>

        <!-- Content Sections -->
        <div class="space-y-4">
          <ArticleSection
            v-for="(section, index) in currentSections"
            :key="section.id"
            :section="section"
            :edit-mode="editMode"
            :is-first="index === 0"
            :is-last="index === currentSections.length - 1"
            @delete="deleteSection(index)"
            @move-up="moveSection(index, -1)"
            @move-down="moveSection(index, 1)"
          />
        </div>

        <!-- Add Section Buttons (Edit Mode) -->
        <div v-if="editMode" class="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="addSection('text')"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-file-text"></i>
            Add Text Section
          </button>
          <button 
            @click="addSection('image')"
            class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-image"></i>
            Add Image Section
          </button>
        </div>

        <!-- Edit Mode Controls -->
        <div v-if="editMode" class="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="saveChanges"
            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-check"></i>
            Save Changes
          </button>
          <button 
            @click="cancelChanges"
            class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-x"></i>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import ArticleSection from '~/components/ArticleSection.vue'
const route = useRoute();

// Sample article data
const article = ref({sections:[]})

const editMode = ref(false)
const editableArticle = reactive({})
const editableSections = ref([])

const currentSections = computed(() => {
  return editMode.value ? editableSections.value : article.value.sections
})

const enterEditMode = () => {
  // Create deep copies for editing
  Object.assign(editableArticle, {
    title: article.value.title,
    subheading: article.value.subheading,
    author: article.value.author
  })
  editableSections.value = JSON.parse(JSON.stringify(article.value.sections))
  editMode.value = true
}

const saveChanges = () => {
  // Apply changes to original article
  Object.assign(article, editableArticle)
  article.value.sections = JSON.parse(JSON.stringify(editableSections.value))
  editMode.value = false
}

const cancelChanges = () => {
  // Reset editable data
  Object.assign(editableArticle, {})
  editableSections.value = []
  editMode.value = false
}

const addSection = (type) => {
  const newSection = {
    id: Date.now(),
    type,
    content: type === 'text' ? '' : null
  }
  editableSections.value.push(newSection)
}

// const updateSection = (updatedSection) => {
//   const index = editableSections.value.findIndex(s => s.id === updatedSection.id)
//   if (index !== -1) {
//     editableSections.value[index] = updatedSection
//   }
// }

const deleteSection = (index) => {
  editableSections.value.splice(index, 1)
}

const moveSection = (index, direction) => {
  const newIndex = index + direction
  if (newIndex >= 0 && newIndex < editableSections.value.length) {
    const sections = editableSections.value
    const temp = sections[index]
    sections[index] = sections[newIndex]
    sections[newIndex] = temp
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const fetchData = () => {
  const articleId = route.params.articleId
  const index = useArticleData().articleData.findIndex((article)=>article.id==articleId)
  if(index!=-1) {
    const articleData = useArticleData().articleData[index]
    articleData.sections = articleData.sections.map((section,index) => ({
      id: index,
      type: 'text',
      content: section
    }))
    article.value = articleData
    console.log(article.value)
  }
}

onMounted(() => {
  fetchData()
})

// Dark mode support
if (typeof window !== 'undefined') {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
}
</script>

<style>
/* Rich text editor styles */
.prose {
  line-height: 1.6;
}

.prose p {
  margin-bottom: 1rem;
}

.prose strong {
  font-weight: 600;
}

.prose em {
  font-style: italic;
}

.prose u {
  text-decoration: underline;
}
</style>