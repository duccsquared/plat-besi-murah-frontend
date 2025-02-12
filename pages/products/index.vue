<template>
	<Header/>
    <div class="flex min-h-screen flex-col bg-gray-100 p-5">
        <H1 class="text-3xl font-bold text-black my-9">Products</H1>

        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="product in productList">
                    <button @click="navigateTo('/products/'+product.id)" class="shadow-md hover:shadow-xl hover:scale-110 transition duration-200 ease-in-out">
                        <NuxtImg :src="'/img/'+product.id+'.png'" placeholder format="webp" class=""/>
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