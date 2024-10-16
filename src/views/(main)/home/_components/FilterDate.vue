<script setup lang="ts">
import { ref, reactive } from 'vue'
const { title, type } = defineProps<{
  title: string
  type: 'date' | 'time'
}>()
</script>

<template>
  <div
    class="flex w-full flex-col items-center rounded-lg bg-background px-4 py-2 text-foreground shadow-md"
  >
    <p class="text-neutral-500">{{ title }}</p>
    <p>4 Eki, Cum</p>
  </div>
</template>

<style scoped></style>
