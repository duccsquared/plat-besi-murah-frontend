<template>
    <div class="rounded-md bg-gray-200 shadow-md h-min flex flex-row space-x-2">
        <Button v-if="activePageVal - perPage >= 0" @click.prevent="prevPage">Previous</Button>
        <div v-else class="h-max rounded-l-md p-2 bg-gray-200 text-gray-200">Previous</div>
        <p class="w-full p-2">showing {{ activePageVal+1 }} - {{ Math.min(activePageVal + perPage,total) }} out of {{ total }}</p>
        <Button v-if="activePageVal + perPage < total" @click.prevent="nextPage">Next</Button>
        <div v-else class="h-max rounded-r-md p-2 bg-gray-200 text-gray-200">Next</div>
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