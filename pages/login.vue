<template>
    <div class="flex flex-row">
        <div class="bg-gray-200 w-1/2 min-h-full">
        </div>
        <div class="bg-gray-300 w-1/2 min-h-full flex flex-col justify-center items-center space-y-4">
            <H2 class="text-2xl">Login</H2>
            <div class="flex flex-row space-x-2">
                <p>Username/email:</p>
                <input v-model="username">
            </div>
            <div class="flex flex-row space-x-2">
                <p>Password:</p>
                <input v-model="password">
            </div>
            <div class="flex flex-row space-x-2">
                <button class="rounded-md bg-gray-500 p-2 w-fit text-white" @click="onLogin">login</button>
                <button class="rounded-md bg-gray-500 p-2 w-fit text-white" @click="navigateTo('/')">back</button>
            </div>
        </div>
    </div>
</template>
<script setup>

const username = ref("")
const password = ref("")

const onLogin = () => {
    if(username.value=="Mario" && password.value=="123456") {
        console.log("logged in!")
        useToast().success("login successful!")
        useUserInfo().username.value = "Mario"
        useUserInfo().password.value = "123456"
        navigateTo("/")
    }
    else {
        console.log("not logged in!")
        useToast().error("login failed!")
    }
}

</script>