<script setup lang="ts">
import Topbar from '@/features/navs/topbar/Topbar.vue'
import { Footer } from '@/components/shared'
</script>

<template>
  <Topbar />
  <main class="relative bg-neutral-100 min-h-[90vh]">
    <RouterView />
  </main>
  <Footer class="relative" />
</template>

<style scoped></style>
