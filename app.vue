<template>
  <Header/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
  <div class="pt-16 bg-white dark:bg-gray-900 min-h-screen">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <NotificationView/>
</template>
