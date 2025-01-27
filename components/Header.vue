<template>
	<div class="bg-gray-700 h-16 text-white flex flex-row items-center justify-between p-5">
		<a v-if="loggedIn" class="text-4xl" href="/">www.platbesimurah.com (admin)</a>
		<a v-else class="text-4xl" href="/">www.platbesimurah.com</a>
			<div class="flex flex-row space-x-8">
				<a href="/">Beranda</a>
				<a href="/">Tentang Kami</a>
				<a href="/">Produk</a>
				<a href="/">Kontak</a>
				<a href="/articles">Artikel</a>

				<a v-if="!loggedIn" href="/login">Login</a>
				<button v-else @click="onLogout">Logout</button>
			</div>
	</div>
</template>
<script setup>
defineOptions({
	name: "Header",
});

const loggedIn = ref(false)
loggedIn.value = useUserInfo().isLoggedIn()

console.log(loggedIn.value)

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