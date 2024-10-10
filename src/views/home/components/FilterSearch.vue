<script setup lang="ts">
import { ref, reactive } from 'vue'
const { prop } = defineProps<{
  prop?: any
}>()
</script>

<template>
  <div class="w-full rounded-lg bg-background px-4 py-2 text-foreground shadow-md flex flex-col items-center">
    <p>Aracını Nereden Almak İstersin?</p>
    <Input />
  </div>
</template>

<style scoped></style>
