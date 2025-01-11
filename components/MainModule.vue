<template>
    <div class="flex-col space-y-3 shadow-md rounded-md p-5 bg-gray-700 h-min mt-4 max-w-fit">
        <h1 class="text-xl font-bold text-white mb-8">
            Rimworld Room Quality Calculator
        </h1>
        <div class="grid grid-cols-3 gap-4">
            <p class="text-white">Wealth</p>
            <input :disabled="props.overwrite" class="border disabled:text-white" type="number" v-model="wealthVal"/>
            <p class="text-white">{{wealthLabel}}</p>

            <p class="text-white">Space</p>
            <input :disabled="props.overwrite" class="border disabled:text-white" type="number" v-model="spaceVal"/>
            <p class="text-white">{{spaceLabel}}</p>

            <p class="text-white">Beauty</p>
            <input :disabled="props.overwrite" class="border disabled:text-white" type="number" v-model="beautyhVal"/>
            <p class="text-white">{{beautyLabel}}</p>

            <p class="text-white">Cleanliness</p>
            <input :disabled="props.overwrite" class="border disabled:text-white" type="number" v-model="cleanlinessVal"/>
            <p class="text-white">{{cleanlinessLabel}}</p>

            <p class="text-white">Impressiveness </p>
            <p class="text-white">{{ impressiveness }}</p>
            <p class="text-white">{{impressivenessLabel}}</p>
        </div>
    </div>
</template>
<script setup>
defineOptions({
	name: "MainModule",
});

const wealthVal = computed({
    get() {
        return props.overwrite ? props.wealth : wealth.value
    },
    set(val) {
        if(!props.overwrite) {
            wealth.value = val
        }
    }
})

const spaceVal = computed({
    get() {
        return props.overwrite ? props.space : space.value
    },
    set(val) {
        if(!props.overwrite) {
            space.value = val
        }
    }
})

const beautyhVal = computed({
    get() {
        return props.overwrite ? props.beauty : beauty.value
    },
    set(val) {
        if(!props.overwrite) {
            beauty.value = val
        }
    }
})

const cleanlinessVal = computed({
    get() {
        return props.overwrite ? props.cleanliness : cleanliness.value
    },
    set(val) {
        if(!props.overwrite) {
            cleanliness.value = val
        }
    }
})

const wealth = ref(800)
const space = ref(50)
const beauty = ref(1)
const cleanliness = ref(0)
const impressiveness = ref(0)

const wealthLabels = [
    {val:500,desc:"impoverished"},{val:700,desc:"somewhat poor"},{val:2000,desc:"mediocre"},{val:4000,desc:"somewhat rich"},{val:10000,desc:"rich"},
    {val:40000,desc:"luxurious"},{val:100000,desc:"very luxurious"},{val:1000000,desc:"extremely luxurious"},{val:999999999,desc:"unbelievably luxurious"}
]
const wealthLabel = ref("")

const spaceLabels = [
    {val:12.5,desc:"cramped"},{val:29,desc:"rather tight"},{val:55,desc:"average-sized"},{val:70,desc:"somewhat spacious"},
    {val:130,desc:"quite spacious"},{val:349.5,desc:"very spacious"},{val:99999,desc:"extremely spacious"}
]
const spaceLabel = ref("")

const beautyLabels = [
    {val:-3.5,desc:"hideous"},{val:0,desc:"ugly"},{val:2.4,desc:"neutral"},{val:5,desc:"pretty"},
    {val:15,desc:"beautiful"},{val:50,desc:"very beautiful"},{val:100,desc:"extremely beautiful"},{val:99999,desc:"unbelievably beautiful"}
]
const beautyLabel = ref("")

const cleanlinessLabels = [{val:-1.1,desc:"very dirty"},{val:-0.4,desc:"dirty"},{val:-0.05,desc:"slightly dirty"},{val:0.4,desc:"clean"},{val:9999,desc:"sterile"}]
const cleanlinessLabel = ref("")

const impressivenessLabels = [
    {val:20,desc:"awful"},{val:30,desc:"dull"},{val:40,desc:"mediocre"},{val:50,desc:"decent"},{val:65,desc:"slightly impressive"},
    {val:85,desc:"somewhat impressive"},{val:120,desc:"very impressive"},{val:170,desc:"extremely impressive"},{val:240,desc:"unbelievably impressive"},{val:99999,desc:"wondrously impressive"}
]
const impressivenessLabel = ref("")

watch(wealth, (newData) => {
    updateImpressiveness()
})

watch(space, (newData) => {
    updateImpressiveness()
})

watch(beauty, (newData) => {
    updateImpressiveness()
})

watch(cleanliness, (newData) => {
    updateImpressiveness()
})


const updateImpressiveness = () => {
    let modifiedWealth = modifyVal(wealth.value/1500)
    let modifiedSpace = modifyVal(space.value/125)
    let modifiedBeauty = modifyVal(beauty.value/3)
    let modifiedCleanliness = modifyVal(1+cleanliness.value/2.5)
    let baseImpressiveness = 65 * (modifiedWealth+modifiedSpace+modifiedBeauty+modifiedCleanliness) / 4 + 35 * Math.min(modifiedWealth,modifiedSpace,modifiedBeauty,modifiedCleanliness)
    let finalImpressiveness  = baseImpressiveness > 500 * modifiedSpace ? 0.25 * baseImpressiveness + 0.75 * 500 * modifiedSpace : baseImpressiveness
    impressiveness.value = finalImpressiveness.toFixed(2)

    wealthLabel.value = getLabel(wealth.value,wealthLabels)
    spaceLabel.value = getLabel(space.value,spaceLabels)
    beautyLabel.value = getLabel(beauty.value,beautyLabels)
    cleanlinessLabel.value = getLabel(cleanliness.value,cleanlinessLabels)
    impressivenessLabel.value = getLabel(finalImpressiveness,impressivenessLabels)
}


const modifyVal = (x) => {
    return x > 1 ? 1 + Math.log(x)  : (x < -1 ? -(1 + Math.log(-x)) : x)
}

const getLabel = (value,labelList) => {
    for(let index in labelList) {
        let data = labelList[index]
        if(data.val>value) {
            return data.desc
        }
    }
    return labelList[labelList.length-1].desc
}

updateImpressiveness()

// --------------------------------------------------------------------

const props = defineProps({
    // modelValue: {
    //     type: Object 
    //     default: {
    //         wealth: null,
    //         space: null,
    //         beauty: null,
    //         cleanliness: null
    //     }
    // },
    overwrite: {
        type: Boolean,
        default: false
    },
    wealth: {
        type: Number,
        default: 0
    },
    space: {
        type: Number,
        default: 0
    },
    beauty: {
        type: Number,
        default: 0
    },
    cleanliness: {
        type: Number,
        default: 0
    }
})
</script>