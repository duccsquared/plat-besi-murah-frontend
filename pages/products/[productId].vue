<template>
    <img :src="productData?.mainImage" class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden"/>
    <div class="flex flex-col py-5 px-8">
        <H1 class="pb-2">{{productData?.name}}</H1>
        <!-- <p style="white-space: pre-line;">{{ productData?.desc }}</p> -->
        <div v-for="text in productData?.bodyList">
            <div v-if="text==''" class="h-4" />
            <p v-else-if="text.substring(0,3)=='<b>'"><b>{{ text.substring(3)}}</b></p>
            <p v-else>{{ text }}</p>
        </div>
        <div class="w-full flex flex-col items-center">
            <!-- image grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="image in productData?.imageList" :key="image" class="cursor-pointer" @click="openModal(image)">
                    <NuxtImg placeholder format="webp" :src="image" class="w-full h-auto rounded-md shadow-md hover:scale-105 transition duration-200" />
                </div>
                 <!-- youtube video -->
                <iframe class="col-span-2 md:col-span-3 aspect-video min-w-full"
                    :src="productData?.video">
                </iframe> 
            </div>

            <!-- enlarged image -->
            <button v-if="selectedImage" @click="selectedImage = null" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div class="relative bg-white p-2 rounded-lg">
                    <NuxtImg placeholder format="webp" :src="selectedImage" class="max-w-[80vw] h-[80vh] object-contain" />
                </div>
            </button>
        </div>


        <H3>Hubungi Kami</H3>
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
</template>
<script setup>
const route = useRoute();
const productId = route.params.productId
const productData = ref(null)

const imageList = [
  "/img/platBabyCoil1.jpg",
  "/img/platBabyCoil2.jpg",
  "/img/platBabyCoil3.jpg",
  "/img/platBabyCoil4.jpg",
  "/img/platBabyCoil5.jpg",
  "/img/platBabyCoil6.jpg",
]

const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
};

productData.value = useProductData().productData[productId]

// onMounted(async ()=> {
//     await useApi(`/addition`,"GET",null,{num1:5,num2:5});
//     const result = await useApi(`/products`,"GET",null,{id:productId});
//     console.log(result)
//     if(result.isSuccess==true) {
//         productData.value = result.data
//     }
//     else {
//         useToast().error(result.error)
//     }
// })
productData.value.bodyList = productData.value.desc.split("\n")
console.log(productData.value)
</script>