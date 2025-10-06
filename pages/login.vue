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
      <Button @click="login">Login</Button>
    </div>
  </div>
</template>

<script setup>
const username = ref("")
const password = ref("")

const login = () => {
  if(username.value=="admin" && password.value=="admin") {
    useNotification().showSuccess("Login succeeded!")
    navigateTo("/")
  }
  else {
    useNotification().showError("Login failed; incorrect username or password")
  }
}
</script>