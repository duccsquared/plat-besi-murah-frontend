<template>
	<Header/>
    <div class="flex min-h-screen flex-row bg-gray-100 p-5">
        <div class="flex flex-col space-y-3 grow">
            <div class="flex flex-row justify-between">
                <H1>Artikel</H1>
                <Pagination @change="changePage" :activePage="activePage" :perPage="perPage" :total="total"/>
            </div>
            <div v-for="article in articleSubList">
                <ArticleBox :article="article"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const isLoggedIn = useUserInfo().isLoggedIn()

const loremIpsum = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum lacus ut sodales sodales. Nullam tempus aliquam tortor, eu iaculis eros tristique in. Aenean vel mauris tristique, feugiat erat quis, porta augue. Curabitur nec ipsum viverra, fermentum arcu eu, convallis nibh. Nunc eleifend sem in magna pulvinar, vitae accumsan mauris elementum. Morbi nulla magna, pharetra ut hendrerit a, molestie vel nisl. Etiam non velit elit. Sed id mi sed nulla commodo dictum at eu tellus. Aliquam cursus vehicula pulvinar. "
const loremIpsum2 = " Donec nibh magna, sollicitudin vitae gravida non, consectetur id lectus. Nullam quis mi egestas, rhoncus nisi suscipit, imperdiet arcu. Nulla quis varius nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae pharetra est, sit amet dapibus dolor. Fusce commodo consequat varius. Ut suscipit leo ut efficitur dapibus. Aliquam vel varius lacus. Fusce vel purus at metus tempor venenatis ac nec massa. Nullam maximus interdum dignissim. Morbi volutpat dolor eget eros lacinia lacinia. Sed pharetra commodo molestie. Pellentesque nec tincidunt lectus, et dapibus tortor. Nam condimentum, urna non porttitor rutrum, est odio ultrices nibh, vitae sodales velit eros ut mi. Morbi et diam tempus, porta nunc sit amet, efficitur nunc. Sed tempor maximus odio, sit amet egestas justo ullamcorper at. "
const loremIpsum3 = " Nam ornare, ante ac ultrices lacinia, nibh dolor pretium orci, vel auctor tellus purus eu arcu. Proin enim tellus, vestibulum id nisi vel, viverra tincidunt metus. Praesent mattis ligula non mollis eleifend. Mauris ut semper mauris. Fusce nunc neque, sodales sit amet porttitor sit amet, porttitor non nunc. Duis quis nisl nec elit aliquam elementum eget ut lorem. Pellentesque sit amet mi magna. Ut finibus risus elit, lacinia dictum nunc sagittis at. Phasellus sed feugiat ex. Proin tincidunt orci quis varius posuere. Cras sit amet nisi id justo iaculis convallis et eget nisl. Phasellus vitae ornare lectus. Vivamus dictum nunc sed lectus tempus malesuada. Etiam ullamcorper interdum imperdiet. Maecenas eget ornare eros, in euismod ipsum. "

import Article from "../classes/Article.js"
import ImageData from "../classes/ImageData.js"

const articleData = useArticleData().articleData

let articleList = []

for(var key in articleData){
    articleList.push(articleData[key])
}

let articleSubList = [articleList[0],articleList[1],articleList[2],articleList[3]]

const activePage = ref(0);
const perPage = ref(4);
const total = ref(articleList.length);

const changePage = (page) => {
    console.log("change page run!")
    activePage.value = page
    console.log(page)
    console.log(activePage.value)
    articleSubList = []
    let i = activePage.value
    while(i<Math.min(total.value,activePage.value+perPage.value)) {
        articleSubList.push(articleList[i])
        i += 1
    }
}

console.log(useUserInfo().username.value)
console.log(useUserInfo().password.value)

</script>