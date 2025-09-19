<template>
    <div class="space-y-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div class="space-y-1">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Articles</h1>
                <p class="text-gray-500 dark:text-gray-400">Browse through our collection of articles</p>
            </div>
            <Pagination 
                @change="changePage" 
                :activePage="activePage" 
                :perPage="perPage" 
                :total="articles.length"
            />
        </div>

        <div class="grid gap-6">
            <template v-if="articleSublist.length">
                <ArticleBox 
                    v-for="article in articleSublist" 
                    :key="article.id" 
                    :article="article"
                />
            </template>
            <div 
                v-else 
                class="text-center py-12 text-gray-500 dark:text-gray-400"
            >
                No articles found
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'base'
})
// const isLoggedIn = useUserInfo().isLoggedIn()


const articles = ref([])

const articleSublist = ref([])

const activePage = ref(0);
const perPage = ref(4);

const changePage = (page) => {
    console.log("change page run!")
    activePage.value = page
    console.log(page)
    console.log(activePage.value)
    articleSublist.value = []
    let i = activePage.value
    while(i<Math.min(articles.value.length,activePage.value+perPage.value)) {
        articleSublist.value.push(articles.value[i])
        i += 1
    }
}


const fetchData = async () => {
    // uses hardcoded data from a composable for now
    const result = useArticleData().articleData
    articles.value = result
    for(let i = 0; i < Math.min(perPage.value,articles.value.length); i++) {
        articleSublist.value.push(articles.value[i])
    }

}

onMounted(() => {
    fetchData()
})

</script>