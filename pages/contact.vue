<template>
    <div class="flex flex-col md:flex-row">
        <div class="md:w-1/4">
            <H2 class="pb-4">Kontak Kami</H2>
            <p>PT. Pijar kreasi Mandiri</p>
            <p>Jl. Serang-Cilegon No.3 Km 8</p>
            <p>Pejaten, Kramatwatu</p>
            <p>Serang, Banten 42161</p>
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
        <div class="md:w-3/4 bg-gray-300 h-80">
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
</template>
<script setup>
definePageMeta({
  layout: 'base'
})
</script>