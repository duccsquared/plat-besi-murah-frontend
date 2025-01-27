<template>
	<Header/>
    <div class="w-full h-[36rem] overflow-hidden bg-gray-400">
        <img src="/img/websiteSplashImage.png" class="w-full h-full object-cover" />
    </div>   
     <div class="flex min-h-screen flex-col bg-gray-100 p-5">
        <p class="px-10 py-1 text-lg font-semibold">Kami menyediaaan plat besi dengan ukuran sesuai dengan kebutuhan produksi., berlokasi di Cilegon Timur yang berdekatan dengan pabrik baja PT. Krakatau Steel. Tbk sehingga kami lebih mudah mendapatkan material plat untuk kami proses dan kirim ke customer.</p>
        <p class="px-10 py-1 text-lg font-semibold">Dengan didukung oleh mesin-mesin yang memadai dan team yang berpengalaman membuat kami dipercaya oleh customer untuk menyediakan plat dengan ukuran sesuai dengan kebutuhan produksi sehingga dapat mempelancar proses produksi. </p>
        
        <H1 class="text-3xl font-bold text-black my-9">Products</H1>

        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-3 gap-20 justify-center px-40 py-5">
                <div v-for="product in productList">
                    <button @click="navigateTo('/products/'+product.id)" class="shadow-md hover:shadow-xl hover:scale-110 transition duration-200 ease-in-out">
                        <img :src="'/img/'+product.id+'.png'" class=""/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const productList = ref(null)
productList.value = [{name:"Plat Baby Coil",id:"platBabyCoil"},{name:"Cutting Size Plate",id:"cuttingSizePlate"},{name:"Base Plate",id:"basePlate"},{name:"Besi Siku Lubang",id:"besiSikuLubang"},{name:"Plat U-head",id:"platUHead"},{name:"Bracket",id:"bracket"}]

</script>