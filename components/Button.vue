<template>
	<button v-bind="$attrs" class=" bg-gray-500 hover:bg-gray-600 p-2 transition duration-200 ease-in-out w-fit h-fit text-white"><slot/></button>
</template>
<script setup>
defineOptions({
	name: "Button",
});
</script>