<template>
    <button class="flex flex-col w-full p-2 rounded-md bg-gray-300 hover:bg-gray-400" @click="onReadMore">
        <h3 class="text-2xl font-bold pb-1">{{article.title}}</h3>
        <h4 class="text-lg font-medium pb-1">{{article.subtitle}}</h4>
        <p class="text-md font-light pb-1"> {{getFormattedDate(article.date)}} | {{ article.author }}</p>
        <!-- <div v-for="body in article.bodyList">
            <div v-if="ImageData.prototype.isPrototypeOf(body)">
                <img :src="body.path" :width="body.width" :height="body.height"/>
            </div>
            <p v-else class="pb-2">{{body}}</p>
        </div> -->
        <!-- <button @click="onReadMore" class="rounded-md bg-gray-500 p-2 w-fit text-white">Read More</button> -->
    </button>
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

const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
const getFormattedDate = (date) => {
    return `${date.getDay()} ${monthFormatter.format(date)}, ${date.getFullYear()}`
}

const onReadMore = () => {
    navigateTo(`/articles/${props.article.title.replace(" ","-")}`);

}

</script>