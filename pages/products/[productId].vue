<template>
	<Header/>
    <img :src="mainImage" class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden"/>
    <div class="flex min-h-screen flex-col bg-gray-100 p-12">
        <H1 class="pb-2">{{productData?.name}}</H1>
        <p style="white-space: pre-line;">{{ productData?.desc }}</p>
        <div class="w-full flex flex-col items-center">
            <!-- image grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="image in imageList" :key="image" class="cursor-pointer" @click="openModal(image)">
                    <img :src="image" class="w-full h-auto rounded-md shadow-md hover:scale-105 transition duration-200" />
                </div>
            </div>

            <!-- enlarged image -->
            <button v-if="selectedImage" @click="selectedImage = null" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div class="relative bg-white p-2 rounded-lg">
                    <img :src="selectedImage" class="max-w-[80vw] h-[80vh] object-contain" />
                </div>
            </button>
        </div>
        <H3>Hubungi Kami</H3>
        <div class="flex flex-row">
            <img src="/img/whatsappSymbol.png" class="w-5 h-5"/>
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
  "/img/platBabyCoil1.png",
  "/img/platBabyCoil2.png",
  "/img/platBabyCoil3.png",
  "/img/platBabyCoil4.png",
  "/img/platBabyCoil5.png",
  "/img/platBabyCoil6.png",
]

const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
};

const mainImage = "/img/platBabyCoil1.png"



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


</script>