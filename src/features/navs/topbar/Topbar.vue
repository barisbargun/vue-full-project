<script setup lang="ts">
import assets from '@/assets'

import { ref } from 'vue'
import Phone from './components/popover/Phone.vue'
import Language from './components/popover/Language.vue'
import Menu from './components/popover/Menu.vue'

const isOpened = ref(false)
const popCall = ref()
const toggleCall = (event: Event) => {
  popCall.value.toggle(event)
}
</script>

<template>
  <header class="p-padding flex items-center border-b bg-primary py-4 text-primary-foreground">
    <img :src="assets.logoText" alt="logo" class="h-fit w-32" />
    <nav class="ml-auto grid grid-flow-col gap-4">
      <Phone />
      <Language />
      <Menu />
    </nav>
  </header>
</template>

<style scoped>
:deep(.popover-trigger) {
  @apply !p-1.5 !text-sm font-medium;
}
</style>
