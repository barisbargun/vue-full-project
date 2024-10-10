<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { ref, reactive, type Component } from 'vue'
const { Icon, to, text } = defineProps<{
  Icon: Component
  to: string
  text: string
}>()
</script>

<template>
  <RouterLink :to="to" class="border-b w-full flex gap-3 px-4 py-5">
    <Icon class="size-5" />
    <span class="text-sm font-medium">{{ text }}</span>
    <ChevronRight class="size-5 ml-auto opacity-50" />
  </RouterLink>
</template>

<style scoped></style>
