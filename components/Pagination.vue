<template>
    <div class="flex items-center justify-center space-x-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm px-4 py-3">
        <Button color="blue" @click.prevent="prevPage" :disabled="activePageVal - perPage < 0">
            Previous
        </Button>
        
        <span class="text-sm text-gray-600 dark:text-gray-300">
            Showing {{ activePageVal + 1 }} - {{ Math.min(activePageVal + perPage, total) }} of {{ total }}
        </span>
        
        <Button color="blue" @click.prevent="nextPage" :disabled="activePageVal + perPage >= total"
        >
            Next
        </Button>
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