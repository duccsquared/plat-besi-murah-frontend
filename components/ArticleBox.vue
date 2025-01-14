<template>
    <div class="flex flex-col w-full p-2 rounded-md bg-gray-300">
        <h3 class="text-2xl font-semibold pb-2">{{article.title}}</h3>
        <h3 class="text-lg font-semibold pb-2">{{article.subtitle}}</h3>
        <h4 class="text-md font-semibold pb-2">Posted {{getFormattedDate(article.date)}} by {{ article.author }}</h4>
        <!-- <div v-for="body in article.bodyList">
            <div v-if="ImageData.prototype.isPrototypeOf(body)">
                <img :src="body.path" :width="body.width" :height="body.height"/>
            </div>
            <p v-else class="pb-2">{{body}}</p>
        </div> -->
        <button @click="onReadMore" class="rounded-md bg-gray-500 p-2 w-fit text-white">Read More</button>
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

const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
const getFormattedDate = (date) => {
    return `${date.getDay()} ${monthFormatter.format(date)}, ${date.getFullYear()}`
}

const onReadMore = () => {
    navigateTo(`/article/${props.article.title.replace(" ","-")}`);

}

</script>