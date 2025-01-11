<template>
        <div class="flex-col space-y-3 shadow-md rounded-md p-5 bg-gray-700 h-min mt-4 max-w-fit">
        <h1 class="text-xl font-bold text-white mb-8">
            Space Calculator
        </h1>
        <div class="grid grid-cols-3 gap-4">
            <input type="checkbox" v-model="useDimensions"/>
            <p class="text-white">use dimensions</p>
            <div></div>

            <p v-if="useDimensions" class="text-white">width</p>
            <input v-if="useDimensions" class="border disabled:text-white" type="number" v-model="width"/>
            <div v-if="useDimensions"></div>

            <p v-if="useDimensions" class="text-white">height</p>
            <input v-if="useDimensions" class="border disabled:text-white" type="number" v-model="height"/>
            <div v-if="useDimensions"></div>

            <p class="text-white">Space</p>
            <input :disabled="useDimensions" class="border disabled:text-white" type="number" v-model="space"/>
            <div></div>
            <!-- <p class="text-white">{{spaceLabel}}</p> -->
        </div>
    </div>
</template>
<script setup>

// const spaceVal = ref(0)

const useDimensions = ref(false)
const width = ref(5)
const height = ref(5)

watch(useDimensions, (newData) => {
    if(useDimensions.value) {
        update()
    }
})

watch(width, (newData) => update())
watch(height, (newData) => update())

const update = () => {
    space.value = width.value * height.value
}
const space = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emits("update:modelValue", value);
	},
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    }
})

</script>
