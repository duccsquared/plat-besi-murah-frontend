<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 to-stone-200 dark:from-gray-900 dark:to-gray-800 px-4">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col space-y-6 p-8">
      <div class="text-center mb-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Login</h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Plat Besi Murah</p>
      </div>
      
      <div class="space-y-5">
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
          <input 
            v-model="username" 
            type="text"
            class="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your username"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input 
            v-model="password" 
            type="password"
            class="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your password"
          />
        </div>
      </div>
      
      <button 
        class="w-full py-3 px-4 text-base font-semibold text-white rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:transform-none disabled:cursor-not-allowed" 
        :disabled="loading" 
        :class="loading ? 'bg-gray-400 dark:bg-gray-600' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg'" 
        @click="login"
      >
        <span v-if="loading" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Signing in...
        </span>
        <span v-else>Sign In</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false)
const username = ref("")
const password = ref("")


const login = async () => {
  loading.value = true
  const response = await useApi("POST","/auth/login",null,{username:username.value,password:password.value})
  console.log(response)
  const userStore = useUserInfo()
  if(response.status==200) {
    userStore.username.value = response.data?.username
    console.log(userStore.username.value)
    useNotification().showSuccess("Login succeeded!")
    navigateTo("/")
  }
  else {
    useNotification().showError("Login failed; incorrect username or password")
  }
  loading.value = false
}
</script>