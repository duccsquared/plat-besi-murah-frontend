<template>
  <div class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden bg-gray-400 relative">
    <div class="flex transition-transform duration-500 ease-in-out h-full" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <img 
        v-for="(image, index) in props.imageList" 
        :key="index"
        :src="image" 
        class="w-full h-full object-cover flex-shrink-0"
      />
    </div>
    
    <div class="absolute top-1/2 left-4 transform -translate-y-1/2">
      <button class="bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition-colors" @click="prevImage">
        ‹
      </button>
    </div>
    
    <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
      <button class="bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition-colors" @click="nextImage">
        ›
      </button>
    </div>
    
    <!-- Pause indicator -->
    <div v-if="isPaused" class="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
      Paused
    </div>
    
    <!-- Dots indicator -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(image, index) in props.imageList"
        :key="index"
        @click="goToImage(index)"
        class="w-2 h-2 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const props = defineProps({
  imageList: {
    default: ["/img/websiteSplashImage.jpg"]
  }
})

const currentIndex = ref(0);
const isPaused = ref(false);
const pauseTimeout = ref(null);
const autoAdvanceInterval = ref(null);

const nextImage = () => {
  pauseSlideshow();
  currentIndex.value = (currentIndex.value + 1) % props.imageList.length;
};

const prevImage = () => {
  pauseSlideshow();
  currentIndex.value = (currentIndex.value - 1 + props.imageList.length) % props.imageList.length;
};

const goToImage = (index) => {
  pauseSlideshow();
  currentIndex.value = index;
};

const pauseSlideshow = () => {
  isPaused.value = true;
  
  // Clear existing timers
  if (autoAdvanceInterval.value) {
    clearInterval(autoAdvanceInterval.value);
    autoAdvanceInterval.value = null;
  }
  
  if (pauseTimeout.value) {
    clearTimeout(pauseTimeout.value);
  }
  
  // Resume after 15 seconds of inactivity
  pauseTimeout.value = setTimeout(() => {
    isPaused.value = false;
    startAutoAdvance();
  }, 15000);
};

const startAutoAdvance = () => {
  if (autoAdvanceInterval.value) {
    clearInterval(autoAdvanceInterval.value);
  }
  
  autoAdvanceInterval.value = setInterval(() => {
    if (!isPaused.value) {
      currentIndex.value = (currentIndex.value + 1) % props.imageList.length;
    }
  }, 5000);
};

// Start auto-advance when component mounts
onMounted(() => {
  startAutoAdvance();
})

// Cleanup intervals when component unmounts
onUnmounted(() => {
  if (autoAdvanceInterval.value) {
    clearInterval(autoAdvanceInterval.value);
  }
  if (pauseTimeout.value) {
    clearTimeout(pauseTimeout.value);
  }
});
</script>