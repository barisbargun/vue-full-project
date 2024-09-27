<script setup lang="ts">
import { languageConfig } from '@/constants/languages'
import siteConfig from '@/constants/site'
import { capitalizeFirstLetter } from '@/lib/utils'
import { Search } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const isOpened = ref(false)
const op = ref()
const searchInput = ref('')
const toggle = (event: Event) => {
  op.value.toggle(event)
}

const selectedLanguage = languageConfig[siteConfig.defaultLang]
const languages = computed(() =>
  Object.values(languageConfig).filter((v) =>
    `${v.name}${v.url.base}${v.url.param}`.toLowerCase().includes(searchInput.value.toLowerCase())
  )
)
</script>

<template>
  <Button
    type="button"
    @click="toggle"
    class="!bg-secondary !px-5 !py-3 !text-secondary-foreground"
    :style="isOpened && 'background-color:#fce300 !important'"
  >
    <!-- WIP: text size change not working. -->
    <img :src="selectedLanguage.img" alt="lang-icon" class="size-7" />
    <h1 class="font-medium uppercase">{{ siteConfig.defaultLang }}</h1>
  </Button>
  <Popover
    ref="op"
    v-on:show="isOpened = true"
    v-on:hide="isOpened = false"
    al
    class="flex min-w-[40rem] cursor-pointer flex-col before:!hidden after:!hidden"
  >
    <InputGroup class="w-full">
      <InputGroupAddon>
        <Search class="size-7" />
      </InputGroupAddon>
      <Input placeholder="Ara" v-model="searchInput" />
    </InputGroup>
    <ul class="grid grid-cols-2">
      <li v-for="(v, i) in languages" :key="i">
        <a
          :href="`https://www.${v.url.base}/${v.url.param}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex gap-4 !px-3 !py-6 !text-secondary-foreground hover:!bg-gray-200/80"
        >
          <img :src="v.img" alt="lang-icon" class="size-7" />
          <span class="font-medium">{{ v.name }}</span>
          <span class="text-neutral-500">{{ capitalizeFirstLetter(v.url.base) }}</span>
        </a>
      </li>
    </ul>
  </Popover>
</template>

<style scoped>
.p-popover-content {
  padding: 0 !important;
}
</style>
