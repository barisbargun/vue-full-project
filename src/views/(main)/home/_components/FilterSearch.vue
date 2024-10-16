<script setup lang="ts">
import { Input } from '@/components/ui'
import { ref, reactive } from 'vue'
const { prop } = defineProps<{
  prop?: any
}>()
</script>

<template>
  <div
    class="flex w-full flex-col items-center rounded-lg bg-background px-4 py-2 text-foreground shadow-md"
  >
    <p>Aracını Nereden Almak İstersin?</p>
    <Input />
  </div>
</template>

<style scoped></style>
