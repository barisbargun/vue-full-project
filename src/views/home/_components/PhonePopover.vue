<script setup lang="ts">
import { CallCenterIcon, PhoneCallIcon } from '@/components/icons'
import { ref } from 'vue'

const isOpened = ref(false)
const op = ref()
const toggle = (event: Event) => {
  op.value.toggle(event)
}
</script>

<template>
  <Button
    type="button"
    @click="toggle"
    class="!bg-secondary !px-5 !py-3 text-sm font-medium !text-secondary-foreground"
    :style="isOpened && 'background-color:#fce300 !important'"
    >7/24 <PhoneCallIcon fill="hsl(var(--primary))" class="size-6 scale-x-[-1]" />
  </Button>

  <Popover
    ref="op"
    v-on:show="isOpened = true"
    v-on:hide="isOpened = false"
    al
    class="cursor-pointer !bg-[#fce300] px-3 py-1 before:!hidden after:!hidden"
  >
    <div class="flex items-center gap-4">
      <CallCenterIcon fill="black" class="size-12" />
      <div>
        <p class="text-sm font-medium">Misafir Merkezi</p>
        <strong class="text-sm">0850 360 5 360</strong>
      </div>
    </div>
  </Popover>
</template>

<style scoped></style>
