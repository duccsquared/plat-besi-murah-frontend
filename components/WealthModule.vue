<!-- <template>
    <div class="flex-col space-y-3 shadow-md rounded-md p-5 bg-gray-700 h-min mt-4 max-w-fit">
    <h1 class="text-xl font-bold text-white mb-8">
        Wealth Calculator
    </h1>
    <div class="grid grid-cols-3 gap-4">


        <p class="text-white">Tile Wealth</p>
        <input class="border disabled:text-white" type="number" v-model="wealth"/>
        <div></div>

        <p class="text-white">Wall Wealth</p>
        <input class="border disabled:text-white" type="number" v-model="wealth"/>
        <div></div>

        <p class="text-white">Missing Wall Count</p>
        <input class="border disabled:text-white" type="number" v-model="wealth"/>
        <div></div>

        <p class="text-white">Additional Wealth</p>
        <input class="border disabled:text-white" type="number" v-model="wealth"/>
        <div></div>
        <!-- <p class="text-white">{{spaceLabel}}</p> -->
    </div>
</div>
</template>
<script setup>

// const spaceVal = ref(0)

const tileWealth = ref(5)
const wallWealth = ref(10)
const missingWallCount = ref(1)
const additionalWealth = ref(200)

watch(tileWealth, (newData) => update())
watch(wallWealth, (newData) => update())
watch(missingWallCount, (newData) => update())
watch(additionalWealth, (newData) => update())

const update = () => {
    wealth.value = width.value * height.value
}
const wealth = computed({
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

</script> -->
