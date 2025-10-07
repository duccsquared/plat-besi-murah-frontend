<template>
	<div class="bg-gray-900 shadow-lg fixed z-50 w-full border-b border-gray-700">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<!-- Website Logo/Name -->
				<div class="flex-shrink-0">
					<a 
						href="/" 
						class="text-2xl font-bold text-white hover:text-orange-600 transition-colors duration-200"
					>
						Plat Besi Murah
						<span v-if="loggedIn" class="text-sm font-normal text-gray-400 ml-2">(admin)</span>
					</a>
				</div>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex space-x-1">
					<a
						v-for="link in navigationLinks"
						:key="link.path"
						:href="link.path"
						class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out"
						:class="[
							fullPath === link.path
								? 'bg-orange-600 text-white shadow-md'
								: 'text-gray-300 hover:bg-gray-800 hover:text-orange-600'
						]"
					>
						{{ link.name }}
					</a>
					<button v-if="useUserInfo().isLoggedIn()" @click="onLogout" class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out text-gray-300 hover:bg-gray-800 hover:text-orange-600">Logout</button>
				</nav>

				<!-- Mobile menu button -->
				<div class="md:hidden">
					<button
						@click="toggleSidebar"
						class="p-2 rounded-lg text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors duration-200"
						aria-label="Toggle menu"
					>
						<svg
							v-if="!showSidebar"
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							v-else
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6m0 12L6 6"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Navigation Overlay -->
		<div
			v-if="showSidebar"
			class="fixed inset-0 z-50 md:hidden"
			@click="closeSidebar"
		>
			<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
			
			<!-- Mobile menu panel -->
			<div class="fixed top-0 right-0 w-80 max-w-sm h-full bg-gray-900 shadow-2xl">
				<div class="p-6">
					<!-- Mobile menu header -->
					<div class="flex items-center justify-between mb-8">
						<h2 class="text-lg font-semibold text-white">Menu</h2>
						<button
							@click="toggleSidebar"
							class="p-2 rounded-lg text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors duration-200"
							aria-label="Close menu"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6m0 12L6 6" />
							</svg>
						</button>
					</div>

					<!-- Mobile navigation links -->
					<nav class="space-y-2">
						<a
							v-for="link in navigationLinks"
							:key="link.path"
							:href="link.path"
							@click="closeSidebar"
							class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
							:class="[
								fullPath === link.path
									? 'bg-orange-600 text-white shadow-md'
									: 'text-gray-300 hover:bg-gray-800 hover:text-orange-600'
							]"
						>
							{{ link.name }}
						</a>
					</nav>

					<!-- Admin actions (if needed) -->
					<!-- <div v-if="loggedIn" class="mt-8 pt-6 border-t order-gray-700">
						<button
							@click="onLogout"
							class="w-full px-4 py-3 text-left rounded-lg text-red-400 hover:bg-red-900/20 transition-colors duration-200"
						>
							Logout
						</button>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: "Header",
});

// Navigation links configuration
const navigationLinks = [
	{ name: 'Beranda', path: '/' },
	{ name: 'Tentang Kami', path: '/about' },
	{ name: 'Produk', path: '/products' },
	{ name: 'Kontak', path: '/contact' },
	{ name: 'Artikel', path: '/articles' }
];

const loggedIn = ref(false);
loggedIn.value = useUserInfo().isLoggedIn();

const route = useRoute();
const fullPath = route.fullPath;

const showSidebar = ref(false);

const toggleSidebar = () => {
	showSidebar.value = !showSidebar.value;
};

const closeSidebar = () => {
	showSidebar.value = false;
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