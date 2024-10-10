<script setup lang="ts">
import Toast from 'primevue/toast'
import Topbar from './features/navs/topbar/Topbar.vue'
</script>

<template>
  <Topbar />
  <main>
    <RouterView />
  </main>
  <Toast />
</template>

<style scoped></style>
