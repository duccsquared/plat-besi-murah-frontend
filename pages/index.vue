<template>
    <ImageSlideshow :imageList="imageList"/>
     <div class="flex flex-col py-5 px-8">
        <p class="py-1 text-lg font-medium">Kami bergerak dibidang penyediaan plat besi khususnya baby coil yang kami luruskan dan potong menjadi ukuran standard mau pun ukuran khusus. </p>
        <p class="py-1 text-lg font-medium">Perusahaan kami berlokasi di Cilegon Timur dan dioperasikan secara profesional oleh tim produksi yang berpengalaman dan didukung mesin-mesin berstandar modern seperti mesin pelurus, mesin cutting size, mesin bending, mesin laser cutting dan lain-lain.</p>
        <p class="py-1 text-lg font-medium">Dengan kinerja profesional dan dukungan peralatan memadai, kami telah mendapat kepercayaan customer untuk menyediakan plat dengan ukuran dan ketebalan sesuai dengan kebutuhan, sehingga dapat mempelancar proses produksi.</p>
        <p class="py-1 text-lg font-medium">Keunggulan utama kami adalah harga plat yang kami tawarkan murah sehingga dapat membantu menekan biaya produksi. </p>

        <H2 class="pb-4 mt-9 mb-2">Produk</H2>

        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="product in productList">
                    <button @click="navigateTo('/products/'+product.id)" class="shadow-md hover:shadow-xl hover:scale-110 transition duration-200 ease-in-out">
                        <NuxtImg :src="'/img/'+product.id+'.jpg'" placeholder format="webp" class=""/>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4">
                <H2 class="pb-4">Kontak Kami</H2>
                <p>PT. Pijar kreasi Mandiri</p>
                <p>Jl. Serang-Cilegon No.3 Km 8</p>
                <p>Pejaten, Kramatwatu</p>
                <p>Serang, Banten 42161</p>
                <div class="flex flex-row mt-8 mb-8 md:mb-0">
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
            <div class="md:w-3/4 bg-gray-300 h-40">
                <iframe
                    class="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.9405640265457!2d106.1161622!3d-6.0597629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418d6a60da799b%3A0x88edce79ee46774c!2sPT.%20Pijar%20Kreasi%20Mandiri!5e0!3m2!1sen!2snl!4v1738312755380!5m2!1sen!2snl"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useProductData } from '~/composables/productData';


const productList = ref(null)
const imageList = [
  "/img/websiteSplashImage.jpg",
  "/img/websiteSplashImage2.jpg",
  "/img/websiteSplashImage3.jpg",
]
productList.value = [{name:"Plat Baby Coil",id:"platBabyCoil"},{name:"Cutting Size Plate",id:"cuttingSizePlate"},{name:"Base Plate",id:"basePlate"},{name:"Besi Siku Lubang",id:"besiSikuLubang"},{name:"Plat Jack Base & U-head",id:"platJackBaseUHead"},{name:"Bracket",id:"bracket"}]
useProductData()
</script>