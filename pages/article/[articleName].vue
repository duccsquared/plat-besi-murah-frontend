<template>
	<Header/>
    <div class="flex min-h-screen flex-row bg-gray-100 p-5">
        <div class="flex flex-col w-3/4 m-2 p-2 rounded-md bg-gray-200 space-y-3 grow">
			<h3 class="text-2xl font-semibold pb-2">{{article.title}}</h3>
			<h4 class="text-md font-semibold pb-2">Posted {{getFormattedDate(article.date)}} by {{ article.author }}</h4>
			<div v-if="!editMode" v-for="body in article.bodyList">
				<div v-if="ImageData.prototype.isPrototypeOf(body)">
					<img :src="body.path" :width="body.wdith" :height="body.height"/>
				</div>
				<p v-else class="pb-2">{{body}}</p>
			</div>
			<div v-else v-for="(body, index) in editedArticle?.bodyList" :key="index" class="rounded-md bg-gray-300 flex flex-row">
				<div class="flex flex-col h-full justify-center space-y-2 px-2">
					<button class="rounded-md bg-gray-500 p-2 w-8 h-fit text-white" @click="performSwap(index,index-1)">+</button>
					<button class="rounded-md bg-gray-500 p-2 w-8 h-fit text-white" @click="performSwap(index,index+1)">-</button>
				</div>
				<div v-if="ImageData.prototype.isPrototypeOf(body)">
					<img :src="body.path" :width="body.width" :height="body.height"/>
				</div>
				<textarea
					v-else
					v-model="editedArticle.bodyList[index]"
					class="pb-2 w-4/5 h-32"
				></textarea>
				<div class="flex flex-col h-full justify-center space-y-2 px-2">
					<button class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white" @click="addSectionAtIndex(index+1)">insert</button>
					<button class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white" @click="deleteSectionAtIndex(index)">delete</button>
				</div>
			</div>


			<button v-if="editMode" class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white" @click="addSection">Add Section</button>

		</div>
        <div class="flex w-1/4 m-2 p-2 rounded-md bg-gray-200 grow">
			<div v-if="useUserInfo().isLoggedIn()" class="flex flex-col space-y-2">
				<button v-if="!editMode" class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white" @click="onEdit">edit page</button>
				<button v-if="editMode" class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white"  @click="onConfirm">confirm changes</button>
				<button v-if="editMode" class="rounded-md bg-gray-500 p-2 w-fit h-fit text-white"  @click="onCancel">cancel</button>
			</div>

        </div>
    </div>
</template>
<script setup>
defineOptions({
	name: "articlePage",
});
import Article from "../classes/Article.js"
import ImageData from "../classes/ImageData.js"

const loremIpsum = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum lacus ut sodales sodales. Nullam tempus aliquam tortor, eu iaculis eros tristique in. Aenean vel mauris tristique, feugiat erat quis, porta augue. Curabitur nec ipsum viverra, fermentum arcu eu, convallis nibh. Nunc eleifend sem in magna pulvinar, vitae accumsan mauris elementum. Morbi nulla magna, pharetra ut hendrerit a, molestie vel nisl. Etiam non velit elit. Sed id mi sed nulla commodo dictum at eu tellus. Aliquam cursus vehicula pulvinar. "
const loremIpsum2 = " Donec nibh magna, sollicitudin vitae gravida non, consectetur id lectus. Nullam quis mi egestas, rhoncus nisi suscipit, imperdiet arcu. Nulla quis varius nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae pharetra est, sit amet dapibus dolor. Fusce commodo consequat varius. Ut suscipit leo ut efficitur dapibus. Aliquam vel varius lacus. Fusce vel purus at metus tempor venenatis ac nec massa. Nullam maximus interdum dignissim. Morbi volutpat dolor eget eros lacinia lacinia. Sed pharetra commodo molestie. Pellentesque nec tincidunt lectus, et dapibus tortor. Nam condimentum, urna non porttitor rutrum, est odio ultrices nibh, vitae sodales velit eros ut mi. Morbi et diam tempus, porta nunc sit amet, efficitur nunc. Sed tempor maximus odio, sit amet egestas justo ullamcorper at. "
const loremIpsum3 = " Nam ornare, ante ac ultrices lacinia, nibh dolor pretium orci, vel auctor tellus purus eu arcu. Proin enim tellus, vestibulum id nisi vel, viverra tincidunt metus. Praesent mattis ligula non mollis eleifend. Mauris ut semper mauris. Fusce nunc neque, sodales sit amet porttitor sit amet, porttitor non nunc. Duis quis nisl nec elit aliquam elementum eget ut lorem. Pellentesque sit amet mi magna. Ut finibus risus elit, lacinia dictum nunc sagittis at. Phasellus sed feugiat ex. Proin tincidunt orci quis varius posuere. Cras sit amet nisi id justo iaculis convallis et eget nisl. Phasellus vitae ornare lectus. Vivamus dictum nunc sed lectus tempus malesuada. Etiam ullamcorper interdum imperdiet. Maecenas eget ornare eros, in euismod ipsum. "


const route = useRoute();
const articleName = route.params.dynamicVariable
const article = ref(new Article("Article 4","Subtitle 4","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum,loremIpsum2]))

const editedArticle = ref(null)

const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
const getFormattedDate = (date) => {
    return `${date.getDay()} ${monthFormatter.format(date)}, ${date.getFullYear()}`
}

const editMode = ref(false)

const onEdit = () => {
	editedArticle.value = article.value.copyObj()
	editMode.value = true
}

const onConfirm = () => {
	editMode.value = false
	article.value = editedArticle.value.copyObj()
	editedArticle.value = null
}

const onCancel = () => {
	editMode.value = false	
	editedArticle.value = null
}

const performSwap = (i,j) => {
	[editedArticle.value.bodyList[i], editedArticle.value.bodyList[j]] = [editedArticle.value.bodyList[j], editedArticle.value.bodyList[i]];
}

const addSection = () => {
	editedArticle.value.bodyList.push("")
}

const addSectionAtIndex = (i) => {
	editedArticle.value.bodyList.splice(i,0,"")
}

const deleteSectionAtIndex = (i) => {
	editedArticle.value.bodyList.splice(i,1)
}

</script>