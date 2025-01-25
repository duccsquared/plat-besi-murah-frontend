<template>
	<button v-bind="$attrs" class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white"><slot/></button>
</template>
<script setup>
defineOptions({
	name: "Button",
});
</script>