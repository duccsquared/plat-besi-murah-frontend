<template>
	<div class="bg-gray-700 h-16 text-white flex flex-row items-center justify-between p-5">
            <a class="text-4xl" href="/">Blogging Website (User End)</a>
			<div class="flex flex-row space-y-2">
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