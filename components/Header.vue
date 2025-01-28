<template>
	<div class="bg-gray-700 h-16 text-white flex flex-row items-center justify-between p-5">
		<!-- website name -->
		<a v-if="loggedIn" class="text-4xl" href="/">Plat Besi Murah (admin)</a>
		<a v-else class="text-4xl" href="/">Plat Besi Murah </a>

		<!-- hamburger menu for small screens -->
		<button
			class="lg:hidden hover:bg-gray-800 p-2 transition duration-200 ease-in-out"
			@click="toggleSidebar"
		>
			<!-- Hamburger Icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
				/>
			</svg>
		</button>

		<!-- links (large screens) -->
		<div class="hidden lg:flex flex-row space-x-8">
			<a href="/" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/'}">Beranda</a>
			<a href="/about" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/about'}">Tentang Kami</a>
			<a href="/products" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/products'}">Produk</a>
			<a href="/contact" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/contact'}">Kontak</a>
			<a href="/articles" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-800':fullPath=='/articles'}">Artikel</a>
			<a v-if="!loggedIn" href="/login" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out">Login</a>
			<button v-else @click="onLogout" class="hover:bg-gray-800 p-2 transition duration-200 ease-in-out">Logout</button>
		</div>

		<!-- sidebar (small screens) -->
		<div
			v-if="showSidebar"
			class="fixed top-0 right-0 bg-gray-800 h-full w-3/4 sm:w-1/2 p-5 text-white z-50 flex flex-col space-y-4"
		>
			<button @click="toggleSidebar" class="text-right mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-white ml-auto"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<a href="/" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-900':fullPath=='/'}">Beranda</a>
			<a href="/about" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-900':fullPath=='/about'}">Tentang Kami</a>
			<a href="/products" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-900':fullPath=='/products'}">Produk</a>
			<a href="/contact" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-900':fullPath=='/contact'}">Kontak</a>
			<a href="/articles" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out" :class="{'bg-gray-900':fullPath=='/articles'}">Artikel</a>
			<a v-if="!loggedIn" href="/login" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out">Login</a>
			<button v-else @click="onLogout" class="hover:bg-gray-700 p-2 transition duration-200 ease-in-out">Logout</button>
		</div>
	</div>
</template>
<script setup>
defineOptions({
	name: "Header",
});

const loggedIn = ref(false);
loggedIn.value = useUserInfo().isLoggedIn();

const route = useRoute();
const fullPath = route.fullPath;

const showSidebar = ref(false);

const toggleSidebar = () => {
	showSidebar.value = !showSidebar.value;
};


const onLogout = () => {
	const usernameCookie = useCookie("username");
	const passwordCookie = useCookie("password");
	usernameCookie.value = null;
	passwordCookie.value = null;
	useUserInfo().username.value = null;
	useUserInfo().password.value = null;
	loggedIn.value = false;
	window.location.reload(true);
};
</script>