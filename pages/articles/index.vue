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
                <Button color="green" v-if="useUserInfo().isLoggedIn()" @click="onCreateNew" >
                    Create New Article
                </Button>
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
import useNotification from '~/composables/useNotification'

definePageMeta({
  layout: 'base'
})

const activePage = ref(0)
const perPage = ref(4)

const { data: articles, pending: isLoading, error } = await useAsyncData(
  'articles',
  async () => {
    const result = await useApi('GET', '/article')
    if (result?.isSuccess) {
      console.log('Article retrieval succeeded!')
      return result.data
    } else {
      console.log('Article retrieval failed!')
      useNotification().showError(result?.error || 'Article retrieval failed')
      return []
    }
  }
)

// reactive computed slice for pagination
const articleSublist = computed(() => {
  const start = activePage.value
  const end = Math.min(
    articles.value?.length || 0,
    activePage.value + perPage.value
  )
  return articles.value?.slice(start, end) || []
})

const changePage = (page) => {
  console.log('change page run!')
  activePage.value = page
}

const onCreateNew = () => {
  navigateTo('/articles/new')
}

// SEO visibility fix
const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": articles.value.map((a, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "url": `https://plat-besi-murah-frontend.vercel.app/articles/${a.slug || a.id}`,
    "item": {
      "@type": "Article",
      "headline": a.title,
      "description": a.description || a.subtitle || '',
      "author": {
        "@type": "Organization",
        "name": "PT. Pijar Kreasi Mandiri"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Plat Besi Murah",
      },
      "datePublished": a.publishDate,
    }
  }))
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd.value)
    }
  ]
})
</script>