<script setup lang="ts">
import type { LinksConfig } from '@/constants/links'

// const { href, img:Image, alt, text } = defineProps<LinksConfig>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
    <img v-if="typeof img == 'object'"/>
    <img />
  </a>
</template>

<style scoped></style>
