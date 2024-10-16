<script setup lang="ts">
import type { LinksConfig } from '@/constants/links'

const { href, img: Image, alt, text } = defineProps<LinksConfig>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="flex cursor-pointer items-center gap-2"
  >
    <component v-if="typeof Image == 'object'" :is="Image" />
    <img v-if="typeof Image == 'string'" :src="Image" :alt="alt" />
    <p v-if="text">{{ text }}</p>
  </a>
</template>

<style scoped></style>
