<template>
    <div class="flex items-center justify-center space-x-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm px-4 py-3">
        <button 
            @click.prevent="prevPage"
            :class="[
                'px-4 py-2 rounded-md transition-all duration-200',
                activePageVal - perPage >= 0 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            ]"
            :disabled="activePageVal - perPage < 0"
        >
            Previous
        </button>
        
        <span class="text-sm text-gray-600 dark:text-gray-300">
            Showing {{ activePageVal + 1 }} - {{ Math.min(activePageVal + perPage, total) }} of {{ total }}
        </span>
        
        <button 
            @click.prevent="nextPage"
            :class="[
                'px-4 py-2 rounded-md transition-all duration-200',
                activePageVal + perPage < total 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            ]"
            :disabled="activePageVal + perPage >= total"
        >
            Next
        </button>
    </div>
</template>
<script setup>

const props = defineProps({
    activePage: {
        default: 0
    },
    perPage: {
        default: 5
    },
    total: {
        default: 20
    }
})

const emits = defineEmits(["change"]);


const activePageVal = ref(props.activePage);

const prevPage = () => {
    if(activePageVal.value - props.perPage >= 0) {
        activePageVal.value -= props.perPage
        emits("change", activePageVal.value);
    }
}

const nextPage = () => {
    if(activePageVal.value + props.perPage < props.total) {
        activePageVal.value += props.perPage
        emits("change", activePageVal.value);
    }
}

</script>