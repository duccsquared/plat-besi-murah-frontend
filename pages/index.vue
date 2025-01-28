<template>
	<Header/>
    <!-- <div class="w-full h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[30rem] xl:h-[36rem] overflow-hidden bg-gray-400">
        <img src="/img/websiteSplashImage.png" class="w-full h-full object-cover" />
    </div>    -->
    <ImageSlideshow :imageList="imageList"/>
     <div class="flex min-h-screen flex-col bg-gray-100 px-10 md:px-20 lg:px-32 xl:px-40 py-5">
        <p class="py-1 text-lg font-semibold">Kami menyediaaan plat besi dengan ukuran sesuai dengan kebutuhan produksi., berlokasi di Cilegon Timur yang berdekatan dengan pabrik baja PT. Krakatau Steel. Tbk sehingga kami lebih mudah mendapatkan material plat untuk kami proses dan kirim ke customer.</p>
        <p class="py-1 text-lg font-semibold">Dengan didukung oleh mesin-mesin yang memadai dan team yang berpengalaman membuat kami dipercaya oleh customer untuk menyediakan plat dengan ukuran sesuai dengan kebutuhan produksi sehingga dapat mempelancar proses produksi. </p>
        
        <H1 class="text-3xl font-bold text-black my-9">Products</H1>

        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="product in productList">
                    <button @click="navigateTo('/products/'+product.id)" class="shadow-md hover:shadow-xl hover:scale-110 transition duration-200 ease-in-out">
                        <img :src="'/img/'+product.id+'.png'" class=""/>
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
            <div class="md:w-3/4 bg-gray-300 h-40">
                <iframe
                    class="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.569944047783!2d106.0728835744362!3d-6.18618206223351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42053269d98b03%3A0xc034a1485d9abef0!2sJl.%20Serang%20-%20Cilegon%20Km.%208%2C%20Pejaten%2C%20Kramatwatu%2C%20Serang%2C%20Banten%2042161%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1678475800567!5m2!1sen!2sid"
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

const productList = ref(null)
const imageList = [
  "/img/websiteSplashImage.png",
  "/img/websiteSplashImage2.png",
  "/img/websiteSplashImage3.png",
]
productList.value = [{name:"Plat Baby Coil",id:"platBabyCoil"},{name:"Cutting Size Plate",id:"cuttingSizePlate"},{name:"Base Plate",id:"basePlate"},{name:"Besi Siku Lubang",id:"besiSikuLubang"},{name:"Plat U-head",id:"platUHead"},{name:"Bracket",id:"bracket"}]

</script>