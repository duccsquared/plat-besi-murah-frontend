<template>
    <div>
        <H2 class="mb-6">Produk</H2>
        <div class="w-full flex flex-col items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 xl:gap-20 justify-center py-5">
                <div v-for="product in productList">
                    <button @click="navigateTo('/products/'+product.id)" class="shadow-md hover:shadow-xl hover:scale-110 transition duration-200 ease-in-out">
                        <NuxtImg :src="'/img/'+product.id+'.jpg'" placeholder format="webp" class=""/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'base'
})
const productList = ref(null)
productList.value = [{name:"Plat Baby Coil",id:"platBabyCoil"},{name:"Cutting Size Plate",id:"cuttingSizePlate"},{name:"Base Plate",id:"basePlate"},{name:"Besi Siku Lubang",id:"besiSikuLubang"},{name:"Plat U-head",id:"platUHead"},{name:"Bracket",id:"bracket"}]

</script>