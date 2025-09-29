<template>
  <div class="text-black dark:text-white" :class="editMode?`border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 mx-4 bg-white dark:bg-gray-800`:(section.type !== 'image'?'py-3':'')">
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
        {{ getSectionName(section) }}
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
        
        <!-- Text editor -->
        <textarea v-model="section.content" class="min-h-32 p-3 w-full text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 text-lg"/>
      </div>
      <p v-else class="prose dark:prose-invert max-w-none sm:mx-6 md:mx-12 lg:mx-20 text-lg">{{ section.content }}</p>
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
        <img :src="section.content" alt="Article image" class="w-full max-h-[12rem] sm:max-h-[16rem] md:max-h-[24rem] lg:max-h-[30rem] xl:max-h-[36rem] rounded-md">
      </div>
    </div>

    <!-- Subheading Section -->
    <div v-if="section.type === 'subheading'">
      <div v-if="editMode" class="space-y-2">
        
        <!-- Subheading -->
        <input v-model="section.content" placeholder="Subheading..." class="p-3 w-full text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 text-xl font-semibold"/>
      </div>
      <div v-else class="prose dark:prose-invert max-w-none text-2xl font-semibold sm:mx-6 md:mx-12 lg:mx-20" v-html="section.content"></div>
    </div>


    <!-- Contact Section -->
    <div v-if="section.type === 'contact'">
      <!-- <div v-if="editMode" class="space-y-2">
        
        <input v-model="section.content" placeholder="Phone Number..." class="p-3 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 text-base"/>
      </div> -->
      <div class="flex flex-col sm:mx-6 md:mx-12 lg:mx-20">
        <p class="text-sm mb-2 text-black dark:text-white">Hubungi Kami</p>
        <p class="text-sm mb-2 font-bold text-black dark:text-white">YUNI</p>
        <div class="flex flex-row">
          <img src="/img/whatsappSymbol.jpg" class="w-5 h-5"/>
          <a 
              href="https://wa.me/6281388488430" 
              class="font-semibold text-green-500 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
          >
              +62 813-8848-8430
          </a>
        </div>
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

const getSectionName = (section) => {
  if(section.type=='text') {return "Text Section"}
  if(section.type=='image') {return "Image Section"}
  if(section.type=='subheading') {return "Subheading Section"}
  if(section.type=='contact') {return "Contact Section"}
}
</script>