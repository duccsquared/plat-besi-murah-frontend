<template>

    <!-- loop through notifications list, where each notification has the format {message:"message",color:"#22c55e"} -->
    <div class="fixed top-4 right-4 z-50 space-y-2">
        <div 
            v-for="(notif, index) in notifs" 
            :key="index" 
            class="bg-white dark:bg-gray-800 border-l-4 p-4 rounded-md shadow-lg max-w-sm flex items-center space-x-2"
            :style="{ borderColor: notif.colour }"
        >
            <i class="mr-2" :style="{ color: notif.colour }" :class="notif.icon"></i>
            <p class="text-gray-700 dark:text-gray-300 text-sm">{{ notif.message }}</p>
        </div>
    </div>
</template>
<script setup>
import useNotification from '~/composables/useNotification';

defineOptions({
    name: "NotificationView",
});

const { notifications } = useNotification();
const notifs = ref([])

watch(notifications, (newVal) => {
  console.log("Updating", newVal)
  notifs.value = newVal
}, { deep: true })

</script>