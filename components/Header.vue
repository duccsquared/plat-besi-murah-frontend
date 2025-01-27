<template>
	<div class="bg-gray-700 h-16 text-white flex flex-row items-center justify-between p-5">
		<a v-if="loggedIn" class="text-4xl" href="/">www.platbesimurah.com (admin)</a>
		<a v-else class="text-4xl" href="/">www.platbesimurah.com</a>
			<div class="flex flex-row space-x-8">
				<a href="/" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/'}">Beranda</a>
				<a href="/" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/about'}">Tentang Kami</a>
				<a href="/" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/products'}">Produk</a>
				<a href="/" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/contact'}">Kontak</a>
				<a href="/articles" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/articles'}">Artikel</a>

				<a v-if="!loggedIn" href="/login" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out">Login</a>
				<button v-else @click="onLogout" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out">Logout</button>
			</div>
	</div>
</template>
<script setup>
defineOptions({
	name: "Header",
});

const loggedIn = ref(false)
loggedIn.value = useUserInfo().isLoggedIn()

const route = useRoute()
const fullPath = route.fullPath

const onLogout = () => {
	const usernameCookie = useCookie("username");
	const passwordCookie = useCookie("password");
	usernameCookie.value = null;
	passwordCookie.value = null;
	useUserInfo().username.value = null
	useUserInfo().password.value = null
	loggedIn.value = false
	window.location.reload(true)
}
</script>