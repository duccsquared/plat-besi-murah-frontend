<template>
	<Header/>
    <div class="flex min-h-screen flex-col bg-gray-100 p-5">
        <H2>Tentang Kami</H2>
        <p class="py-1 text-lg">Kami menyediaaan plat besi dengan ukuran sesuai dengan kebutuhan produksi., berlokasi di Cilegon Timur yang berdekatan dengan pabrik baja PT. Krakatau Steel. Tbk sehingga kami lebih mudah mendapatkan material plat untuk kami proses dan kirim ke customer.</p>
        <p class="py-1 text-lg">Dengan didukung oleh mesin-mesin yang memadai dan team yang berpengalaman membuat kami dipercaya oleh customer untuk menyediakan plat dengan ukuran sesuai dengan kebutuhan produksi sehingga dapat mempelancar proses produksi. </p>
        
    </div>
</template>
<script setup>
console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
const testApiVal = ref(null)
testApiVal.value = await useApi("/testCategory/addition","POST",null,{num1:8,num2:7})
console.log(testApiVal)
console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBb")
</script>