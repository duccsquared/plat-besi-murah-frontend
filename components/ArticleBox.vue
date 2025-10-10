<template>
    <div class="group cursor-pointer" @click="onReadMore">
        <div class="transform transition-all duration-300 hover:-translate-y-1 w-full p-6 rounded-xl shadow-md hover:shadow-xl" :class="clicked?'bg-gray-100 dark:bg-gray-600':'bg-white dark:bg-gray-700'">
            <div class="flex flex-col">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <i v-if="clicked" class="bi bi-arrow-clockwise mr-1 spinning"></i>
                    {{article.title}}
                </h2>
                <h3 class="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    {{article.subtitle}}
                </h3>
                <div class="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                    <span class="text-sm">
                        {{new Date(article.publishDate ?? article.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}}
                    </span>
                    <span class="mx-2">•</span>
                    <span class="text-sm">
                        {{ article.author }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Article from "../classes/Article.js"
import ImageData from "../classes/ImageData.js"
defineOptions({
	name: "ArticleBox",
});

let props = defineProps({
    article: {
        default: new Article()
    }
})
const clicked = ref(false);

const onReadMore = () => {
    clicked.value = true;
    navigateTo(`/articles/${props.article.id}`);

}

</script>
<style>
.spinning {
  animation: spin 1s linear infinite;
}
</style>