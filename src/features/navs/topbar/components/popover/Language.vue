<script setup lang="ts">
import { languageConfig } from '@/constants/languages'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { Search } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { Button, Popover } from '@/components/ui'
import { siteConfig } from '@/constants/site'
const isOpened = ref(false)
const op = ref()
const searchInput = ref('')
const toggle = (event: Event) => {
  op.value.toggle(event)
}

const selectedLanguage = languageConfig.find((v) => v.key === siteConfig.defaultLang)
const languages = computed(() =>
  languageConfig.filter((v) =>
    `${v.name}${v.url.base}${v.url.param}`.toLowerCase().includes(searchInput.value.toLowerCase())
  )
)
</script>

<template>
  <Button
    type="button"
    @click="toggle"
    :class="
      $cn(
        'popover-trigger !border-b-0 !border-t-0 !bg-primary !text-primary-foreground',
        isOpened && '!bg-[#fce300] !text-black'
      )
    "
  >
    <!-- WIP: text size change not working. -->
    <img :src="selectedLanguage?.img" alt="lang-icon" class="size-5" />
    <h1 class="font-medium uppercase">{{ siteConfig.defaultLang }}</h1>
  </Button>
  <Popover
    ref="op"
    v-on:show="isOpened = true"
    v-on:hide="isOpened = false"
    al
    class="lang-popover flex cursor-pointer flex-col before:!hidden after:!hidden"
  >
    <InputGroup class="w-full">
      <InputGroupAddon>
        <Search class="size-4" />
      </InputGroupAddon>
      <Input placeholder="Ara" class="!text-sm" v-model="searchInput" />
    </InputGroup>
    <ul class="grid grid-cols-2">
      <li v-for="(v, i) in languages" :key="i" class="border-b border-border/40">
        <a
          :href="v.url.param ? `https://www.${v.url.base}/${v.url.param}` : ''"
          class="flex gap-3 py-3 pl-3 pr-7 text-sm !text-secondary-foreground hover:!bg-gray-200/80"
        >
          <img :src="v.img" alt="lang-icon" class="size-5" />
          <span class="font-medium">{{ v.name }}</span>
          <span class="text-neutral-500">{{ capitalizeFirstLetter(v.url.base) }}</span>
        </a>
      </li>
    </ul>
  </Popover>
</template>

<style scoped>
:global(.lang-popover .p-popover-content) {
  @apply p-0;
}
</style>
