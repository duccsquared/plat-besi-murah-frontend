<template>
    <div class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden bg-gray-400 relative">
      <img :src="props.imageList[currentIndex]" class="w-full h-full object-cover transition-opacity duration-500" :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"/>
  
      <div class="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button class="bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700" @click="prevImage">
          ‹
        </button>
      </div>
      <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button class="bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700" @click="nextImage">
          ›
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
const props = defineProps({
    imageList: {
        default: ["/img/websiteSplashImage.png"]
    }
})

  
const currentIndex = ref(0);
  
const isVisible = ref(true);
  
const nextImage = () => {
  isVisible.value = false;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % props.imageList.length;
    isVisible.value = true;
  }, 300);
};
  
const prevImage = () => {
  isVisible.value = false;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + props.imageList.length) % props.imageList.length;
    isVisible.value = true;
  }, 300); 
};
  </script>