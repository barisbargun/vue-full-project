<script setup lang="ts">
import type { Faq } from '@/constants/faq'

const { title, desc } = defineProps<Faq>()

</script>

<template>
  <div>{{ title }}</div>
</template>

<style scoped></style>
