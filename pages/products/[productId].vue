<template>
	<Header/>
    <img :src="mainImage" class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden"/>
    <div class="flex min-h-screen flex-col bg-gray-100 p-12">
        <H1 class="pb-2">{{title}}</H1>
        <div v-for="body in bodyList">
            <p class="pb-2">{{ body }}</p>
        </div>
        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="image in imageList">
                    <img :src="image" class=""/>
                </div>
            </div>
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
const title = "Plat Baby Coil"
const bodyList = [
    "Kami menyediakan plat baby coil dengan harga murah dan dapat membantu untuk menekan biaya produksi. Plat baby coil terdiri dari beberapa spesifikasi sebagai berikut:",
    "",
    "Baby Coil SPHC (plat Hitam) & SPHC-PO (plat abu-abu)",
    "tebal: 1.8-6.0mm",
    "Lebar: 900-1220mm",
    "panjang: standard atau sesuai ",
    "kebutuhan",
    "",
    "Baby Coil SPCC-SD & SPCC-UN (plat putih)",
    "tebal: 0.4-1.8mm",
    "Lebar: 900-1220mm",
    "panjang: standard atau sesuai ",
    "kebutuhan"
]

const imageList = [
  "/img/platBabyCoil1.png",
  "/img/platBabyCoil2.png",
  "/img/platBabyCoil3.png",
  "/img/platBabyCoil4.png",
  "/img/platBabyCoil5.png",
  "/img/platBabyCoil6.png",
]

const mainImage = "/img/platBabyCoil1.png"
</script>