<script setup lang="ts">
import { CallCenterIcon, PhoneCallIcon } from '@/components/icons'
import { ref } from 'vue'
import { Button, Popover } from '@/components/ui'

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
    :class="
      $cn('popover-trigger !bg-secondary !text-secondary-foreground', isOpened && '!bg-[#fce300]')
    "
    >7/24 <PhoneCallIcon class="size-4 scale-x-[-1]" />
  </Button>

  <Popover
    ref="op"
    v-on:show="isOpened = true"
    v-on:hide="isOpened = false"
    al
    class="cursor-pointer !bg-[#fce300] before:!hidden after:!hidden"
  >
    <div class="flex items-center gap-4">
      <CallCenterIcon fill="black" class="size-10" />
      <div>
        <p class="text-sm font-medium">Misafir Merkezi</p>
        <strong class="text-sm">0850 360 5 360</strong>
      </div>
    </div>
  </Popover>
</template>

<style scoped></style>
