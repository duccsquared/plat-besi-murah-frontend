<template>
    <div class="content-center items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
        <div class="flex flex-row space-x-1">
            <input type="checkbox" v-model="advancedMode"/>
            <p class="text-black">advanced mode</p>
        </div>
       <MainModule :overwrite="advancedMode" :space="space"/>
       <SpaceModule v-if="advancedMode" v-model="space"/>
    </div>

</template>
<script setup>
const advancedMode = ref(false)

const space = ref(0)
</script>