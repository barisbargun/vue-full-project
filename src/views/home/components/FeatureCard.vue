<script setup lang="ts">
import { ref, reactive } from 'vue'
const { title, desc, ils } = defineProps<{
  title: string
  desc: string
  ils: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 rounded-lg bg-white p-3">
    <div class="flex flex-col gap-2">
      <h3>{{ title }}</h3>
      <h4>{{ desc }}</h4>
    </div>
    <img :src="ils" class="w-20" />
  </div>
</template>

<style scoped></style>
