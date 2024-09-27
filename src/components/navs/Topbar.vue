<script setup lang="ts">
import assets from '@/constants/assets'

import { ref } from 'vue'
import { CallCenterIcon, PhoneCallIcon } from '../icons'
import PhonePopover from '@/views/home/_components/PhonePopover.vue'
import LanguagePopover from '@/views/home/_components/LanguagePopover.vue'

const isOpened = ref(false)
const popCall = ref()
const toggleCall = (event: Event) => {
  popCall.value.toggle(event)
}
</script>

<template>
  <header class="p-padding flex border-b bg-primary py-2 text-primary-foreground">
    <img :src="assets.logoIcon" alt="logo" class="w-40" />
    <nav class="ml-auto grid grid-flow-col">
      <PhonePopover />
      <LanguagePopover />
    </nav>
  </header>
</template>

<style scoped></style>
