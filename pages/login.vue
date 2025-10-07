<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-stone-100 dark:bg-gray-800">
    <div class="min-w-2/5 w-2/5 bg-white rounded-lg shadow-lg flex flex-col space-y-4 p-4">
      <h1 class="text-2xl text-bold">Plat Besi Murah Admin Login</h1>
      <div class="flex flex-rol justify-between">
        <p>Username</p>
        <input v-model="username" class="border border-gray-900 rounded-lg"/>
      </div>
      <div class="flex flex-rol justify-between">
        <p>Password</p>
        <input type="password" v-model="password" class="border border-gray-900 rounded-lg"/>
      </div>
      <button class="p-2 transition duration-200 ease-in-out w-fit h-fit text-white" :disabled="loading" :class="loading?'bg-gray-500 hover:bg-gray-600':'bg-orange-500 hover:bg-orange-600'" @click="login">Login</button>
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