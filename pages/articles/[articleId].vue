<template>
  <div class="min-h-screen bg-stone-200 dark:bg-gray-900">
    <div class="mx-auto">
      <!-- Header -->
      <div class="flex justify-between py-4 sm:mx-6 md:mx-12 lg:mx-20 items-center mb-6">
        <div class="flex flex-row space-x-4 items-center">
          <!-- <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ editMode ? 'Edit Article' : 'Article View' }}           
          </h1> -->
          <LoadingIcon v-if="isLoading" class="ml-2" :size="8"/>
        </div>

        <div class="flex gap-3">

          <!-- Edit Mode Controls -->
          <div v-if="editMode" class="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button 
              @click="showAiModal = true"
              class="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 flex items-center gap-2 text-base"
            >
              <i class="bi bi-robot"></i>
              Generate with AI
            </button>
            <button 
              @click="saveChanges"
              class="px-6 py-2 text-white rounded-md hover:bg-blue-700 flex items-center gap-2 text-base"
              :class="isLoading?'bg-gray-600':'bg-blue-600'"
              :disabled="isLoading"
            >
              <i class="bi bi-check"></i>
              Save Changes
            </button>
            <button 
              @click="cancelChanges"
              class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2 text-base"
            >
              <i class="bi bi-x"></i>
              Cancel
            </button>
          </div>
          <button 
            v-if="!editMode && useUserInfo().isLoggedIn()"
            @click="enterEditMode"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-pencil"></i>
            Edit Article
          </button>
        </div>
      </div>

      <!-- Article Content -->
      <div class="">
        <!-- Back Button to go back to /articles -->
        <div class="sm:mx-6 md:mx-12 lg:mx-20 mb-4">
          <button 
            @click="navigateTo('/articles')"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <i class="bi bi-arrow-left"></i>
            Back
          </button>
        </div>
        <!-- Title -->
        <div class="mb-4 sm:mx-6 md:mx-12 lg:mx-20">
          <input 
            v-if="editMode"
            v-model="editableArticle.title"
            placeholder="Article Title"
            class="w-full text-3xl font-bold bg-transparent text-gray-900 dark:text-white placeholder-gray-500 border-2 p-1 rounded-lg bg-white"
          >
          <h1 v-else class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ article.title || 'Untitled Article' }}
          </h1>
        </div>

        <!-- Subheading -->
        <div class="mb-4 sm:mx-6 md:mx-12 lg:mx-20">
          <input 
            v-if="editMode"
            v-model="editableArticle.subtitle"
            placeholder="Article Subheading"
            class="w-full text-xl text-gray-600 dark:text-gray-300 bg-transparent placeholder-gray-500 border-2 p-1 rounded-lg bg-white"
          >
          <h2 v-else-if="article.subtitle" class="text-xl text-gray-600 dark:text-gray-300">
            {{ article.subtitle }}
          </h2>
        </div>

        <!-- Meta information -->
        <div class="flex flex-wrap gap-4 mb-6 sm:mx-6 md:mx-12 lg:mx-20 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <i class="bi bi-person"></i>
            <input 
              v-if="editMode"
              v-model="editableArticle.author"
              placeholder="Author Name"
              class="bg-transparent placeholder-gray-500 text-base border-2 p-1 rounded-lg bg-white"
            >
            <span v-else>{{ article.author || 'Unknown Author' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="bi bi-calendar"></i>
            <span>{{ formatDate(article.publishDate ?? article.publish_date) }}</span>
          </div>
        </div>

        <!-- Content Sections -->
        <div :class="editMode?'space-y-3':'space-y-1'">
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
            @update="updateImage"
          />
        </div>

        <!-- Add Section Buttons (Edit Mode) -->
        <div v-if="editMode" class="flex gap-3 mt-6 pt-6 sm:mx-6 md:mx-12 lg:mx-20 border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="addSection('text')"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-file-text"></i>
            Text
          </button>
          <button 
            @click="addSection('image')"
            class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-image"></i>
            Image
          </button>
          <button 
            @click="addSection('subheading')"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-fonts"></i>
            Subheading
          </button>
          <button 
            @click="addSection('contact')"
            class="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 flex items-center gap-2 text-base"
          >
            <i class="bi bi-whatsapp"></i>
            WhatsApp Contact
          </button>
        </div>


      </div>
    </div>

    <!-- AI Generation Modal -->
    <div v-if="showAiModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Generate Article with AI</h3>
          <button 
            @click="closeAiModal"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <form @submit.prevent="generateArticle" class="space-y-4">
          <!-- Topic (Required) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Topic <span class="text-red-500">*</span>
            </label>
            <input 
              v-model="aiForm.topic"
              type="text"
              required
              placeholder="Enter article topic..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 text-base focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
          </div>

          <!-- Context (Optional) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Context <span class="text-gray-400">(optional)</span>
            </label>
            <textarea 
              v-model="aiForm.context"
              rows="3"
              placeholder="Additional context or specific requirements..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 text-base focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            ></textarea>
          </div>

          <!-- Language -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Language
            </label>
            <select 
              v-model="aiForm.language"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="English">English</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>

          <!-- Submit Button -->
          <div class="flex gap-3 pt-4">
            <button 
              type="submit"
              :disabled="isGenerating || !aiForm.topic.trim()"
              class="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
            >
              <i v-if="isGenerating" class="bi bi-arrow-clockwise animate-spin"></i>
              <i v-else class="bi bi-magic"></i>
              {{ isGenerating ? 'Generating...' : 'Generate Article' }}
            </button>
            <button 
              type="button"
              @click="closeAiModal"
              :disabled="isGenerating"
              class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-base"
            >
              Cancel
            </button>
          </div>
        </form>

        <!-- Error Message -->
        <div v-if="aiError" class="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-md">
          <p class="text-red-700 dark:text-red-300 text-sm">{{ aiError }}</p>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div v-if="notification.show" class="fixed top-4 right-4 z-50">
      <div class="bg-white dark:bg-gray-800 border-l-4 border-green-500 p-4 rounded-md shadow-lg max-w-sm">
        <div class="flex items-center">
          <i class="bi bi-check-circle text-green-500 mr-2"></i>
          <p class="text-gray-700 dark:text-gray-300 text-sm">{{ notification.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { stringify } from 'postcss';
import { ref, computed, reactive } from 'vue'
import ArticleSection from '~/components/ArticleSection.vue'
const route = useRoute();

// const isLoading = ref(true)

// Sample article data
// const article = ref({sections:[]})

const editMode = ref(false)
const editableArticle = ref({})
const editableSections = ref([])

// AI Generation
const showAiModal = ref(false)
const isGenerating = ref(false)
const aiError = ref('')
const aiForm = reactive({
  topic: '',
  context: '',
  language: 'English'
})

// Notification
const notification = reactive({
  show: false,
  message: ''
})

const currentSections = computed(() => {
  return editMode.value ? editableSections.value : article.value.sections
})

const enterEditMode = () => {
  // Create deep copies for editing
  editableArticle.value = JSON.parse(JSON.stringify(article.value))
  editableArticle.value.publishDate = new Date()
  editableSections.value = JSON.parse(JSON.stringify(article.value.sections))
  editMode.value = true
}

const saveChanges = async () => {
  isLoading.value = true
  editableArticle.value.sections = JSON.parse(JSON.stringify(editableSections.value))
  // attempt to either create or save the article
  const isCreate = route.params.articleId=="new"

  const result = await useApi(isCreate?"POST":"PUT","/article",null,editableArticle.value)
  if(result && result.isSuccess) {
    // Apply changes to original article
    article.value = editableArticle.value
    console.log("Article saved!")
    editMode.value = false
  }
  else {
    console.log("Article failed to be saved!")
  }
  isLoading.value = false
  
}

const cancelChanges = () => {
  // Reset editable data
  Object.assign(editableArticle, {})
  editableSections.value = []
  editMode.value = false
  // if we're in create mode, return to the article page
  if(route.params.articleId=="new") {
    navigateTo("/articles")
  }
}

const addSection = (type) => {
  const newSection = {
    id: Date.now(),
    type,
    content: type !== 'image' ? '' : null
  }
  editableSections.value.push(newSection)
}

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
  return (typeof date == 'date'?date:new Date(date)).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const updateImage = (data) => {
  const index = editableSections.value.findIndex((section) => section.id == data.id)
  if(index!=-1) {
    editableSections.value[index] = data
  }
}
// AI Generation Functions
// prompts
const SYSTEM_PROMPT = `You are an expert content writer for the Indonesian steel company PT Pijar kreasi Mandiri, which is located in Cilegon, West Java. Your task is to generate high-quality content that is informative, engaging, and tailored to the specified language and context.

Writing Guidelines:
- Write with the individuality and rhythm of a human voice. 
- Favor brevity, specificity, and concrete detail over generic explanation. 
- Vary sentence length and tone (sometimes sharp, sometimes meandering). 
- Be confident, even imperfect, rather than cautious or over-hedged. 
- Use humor, opinion, and informality when they fit. Keep lists loose and uneven. 
- Adapt tone and style to the topic and target audience
- Prefer commas and periods over ornate punctuation. 
- Avoid the polished, formulaic flow of AI text. 
- Do not use common AI-cliches like em-dashes (—) as punctuation or the sentence structure "It's not just X, it's Y"
- Skip stock transitions and repetitive signposting. 
- The goal: distinct, authentic writing that feels alive.

Response Format:
Always return your response as valid JSON in this exact format:
{
  "title": "An engaging, descriptive title",
  "subtitle": "A compelling subtitle that expands on the title",
  "content": "The main article content with proper paragraph breaks using \\n\\n between paragraphs"
}

Do not include any additional text, explanations, or formatting outside of this JSON structure.`

const USER_PROMPT = computed(() => `Generate a comprehensive article based on the following specifications:

Topic: ${aiForm.topic}
${aiForm.context ? `Additional Context: ${aiForm.context}` : ''}
Language: ${aiForm.language}

Requirements:
- Create an engaging title that captures the essence of the topic
- Write a compelling subtitle that complements the title
- Develop well-structured content with multiple paragraphs
- Ensure the content is informative, engaging, and valuable to readers
- Use appropriate tone and style for the target language and audience
- Include relevant examples or details when applicable
- Do not use common AI-cliches like em-dashes (—) as punctuation or the sentence structure "It's not just X, it's Y"

Return the response in valid JSON format as specified in the system prompt.`)

// close modal
const closeAiModal = () => {
  if (!isGenerating.value) {
    showAiModal.value = false
    aiError.value = ''
    Object.assign(aiForm, {
      topic: '',
      context: '',
      language: 'English'
    })
  }
}

const showNotification = (message) => {
  notification.show = true
  notification.message = message
  setTimeout(() => {
    notification.show = false
  }, 3000)
}

const generateArticle = async () => {
  if (!aiForm.topic.trim()) return
  
  isGenerating.value = true
  isLoading.value = true
  aiError.value = ''

  try {
    // First attempt with deepseek
    let result = await useOpenRouter(
      'deepseek/deepseek-chat-v3.1:free',
      SYSTEM_PROMPT,
      USER_PROMPT.value.replace('${null}', aiForm.topic).replace('${null}', aiForm.context || '').replace('${null}', aiForm.language)
    )

    // If 429 error, try second model
    if (result.errorString && result.errorString.includes('429')) {
      result = await useOpenRouter(
        'openai/gpt-oss-120b:free',
        SYSTEM_PROMPT,
        USER_PROMPT.value.replace('${null}', aiForm.topic).replace('${null}', aiForm.context || '').replace('${null}', aiForm.language)
      )
    }

    if (result.errorString) {
      throw new Error(result.errorString)
    }

    // Parse JSON response
    const parsedData = useParseJson(result.response)
    
    if (!parsedData) {
      throw new Error('Failed to parse AI response as JSON. Please try again.')
    }

    if (!parsedData.title || !parsedData.content) {
      throw new Error('Invalid response format from AI')
    }

    // Insert the data into the article
    editableArticle.value.title = parsedData.title
    editableArticle.value.subtitle = parsedData.subtitle || ''
    
    // Convert content to sections (split by paragraphs)
    const contentSections = parsedData.content
      .split('\n\n')
      .filter(section => section.trim())
      .map((content, index) => ({
        id: Date.now() + index,
        type: 'text',
        content: content.trim()
      }))
    
    editableSections.value = contentSections

    isGenerating.value = false
    isLoading.value = false
    closeAiModal()
    showNotification('Article generated successfully!')

  } catch (error) {
    aiError.value = error.message || 'Failed to generate article. Please try again.'
    (useNotification()).showError(error.message || 'Failed to generate article. Please try again.')
    isGenerating.value = false
    isLoading.value = false
  } 
}

// fetch article data server-side
const { data: article, pending: isLoading } = await useAsyncData(
  'article',
  async () => {
    const articleId = route.params.articleId

    // if it's a "new" article page
    if (articleId === 'new') {
      return {
        title: '',
        subtitle: '',
        author: '',
        publishDate: new Date().toISOString(),
        sections: []
      }
    }

    // fetch from backend API
    const result = await useApi('GET', '/article', { id: articleId })
    if (result?.isSuccess) return result.data
    else throw new Error(result?.error || 'Article retrieval failed')
  }
)

// compute visible text content (for description)
const firstParagraph = computed(() => {
  if (!article.value?.sections?.length) return ''
  const textSection = article.value.sections.find(s => s.type === 'text')
  return textSection?.content?.slice(0, 200) || ''
})

// pick the first image (if any)
const firstImage = computed(() => {
  const imgSection = article.value.sections.find(s => s.type === 'image')
  if (!imgSection) return ''
  // optionally, convert base64 to data URI if needed
  return imgSection.content.startsWith('data:image')
    ? imgSection.content
    : ''
})

// inject SEO-friendly metadata
useHead(() => ({
  title: article.value?.title || 'Plat Besi Murah — Article',
  meta: [
    { name: 'description', content: firstParagraph.value },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: firstParagraph.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: firstImage.value },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.value?.title,
        "description": firstParagraph.value,
        "author": {
          "@type": "Organization",
          "name": article.value?.author || "PT. Pijar Kreasi Mandiri"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Plat Besi Murah",
          "logo": {
            "@type": "ImageObject",
            "url": "https://plat-besi-murah-frontend.vercel.app/logo.png"
          }
        },
        "datePublished": article.value?.publishDate,
        "image": firstImage.value
      })
    }
  ]
}))

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

/* Animation for spinner */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>