<template>
    <div class="space-y-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div class="space-y-1">
                <div class="flex flex-row space-x-4 items-center">
                    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Articles</h1>
                    <LoadingIcon v-if="isLoading" class="ml-2" :size="8"/>
                </div>

                <p class="text-gray-500 dark:text-gray-400">Browse through our collection of articles</p>
            </div>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                <Pagination 
                    @change="changePage" 
                    :activePage="activePage" 
                    :perPage="perPage" 
                    :total="articles.length"
                />
                <button v-if="useUserInfo().isLoggedIn()" @click="onCreateNew" class="px-4 py-2 h-fit rounded-md transition-all duration-200 bg-green-600 text-white hover:bg-green-700">
                    Create New Article
                </button>
            </div>

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
                {{ isLoading? 'Loading Articles...' : 'No articles found' }}
            </div>
        </div>
    </div>
</template>
<script setup>
import useNotification from '~/composables/useNotification';

definePageMeta({
  layout: 'base'
})
// const isLoggedIn = useUserInfo().isLoggedIn()

const isLoading = ref(true)

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
    const result = await useApi("GET","/article")
    if(result && result.isSuccess) {
        articles.value = result.data
        for(let i = 0; i < Math.min(perPage.value,articles.value.length); i++) {
            articleSublist.value.push(articles.value[i])
        }
        console.log("Article retrieval succeeded!");
        // (useNotification()).showError("Article retrieval succeeded!")
    }
    else {
        console.log("Article retrieval failed!");
        (useNotification()).showError(result.error || "Article retrieval failed")
    }
    isLoading.value = false
}

// create new article
const onCreateNew = () => {
    isLoading.value = true
    navigateTo(`/articles/new`);
    isLoading.value = false
}

useAsyncData(() => {
    fetchData()
})



</script>