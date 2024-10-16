<script setup lang="ts">
import assets from '@/assets'

import { onMounted, ref } from 'vue'
import Phone from './components/popover/Phone.vue'
import Language from './components/popover/Language.vue'
import Menu from './components/popover/Menu.vue'
import { Breadcrumb } from '@/components/ui'
import { useRoute } from 'vue-router'
import { routeNames } from '@/constants/route'

const items = ref([{ label: 'Ana sayfa', to: '/' }])
const route = useRoute()
const isOpened = ref(false)
const popCall = ref()
const toggleCall = (event: Event) => {
  popCall.value.toggle(event)
}

onMounted(() => {
  const paths = route.fullPath.split('/')
  paths.forEach((path, index) => {
    if (index > 0 && index < paths.length - 1) {
      items.value.push({ label: path, to: '/' + path })
    }
  })
})

</script>

<template>
  <header class="p-padding z-[9999] flex flex-col bg-primary">
    <div class="mb-2 flex items-center border-b border-border/50 py-4 text-primary-foreground">
      <RouterLink :to="{name:routeNames.home}"><img :src="assets.logoText" alt="logo" class="h-fit w-32" /></RouterLink>
      <nav class="ml-auto grid grid-flow-col gap-4">
        <Phone />
        <Language />
        <Menu />
      </nav>
    </div>
    <!-- breadcrumb -->
    <div v-if="route.path != '/'" class="bg-primary text-blue-400">
      <Breadcrumb class="!bg-transparent !p-0" :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-blue-400">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Breadcrumb>
    </div>
  </header>
</template>

<style scoped>
:deep(.popover-trigger) {
  @apply !p-1.5 !text-sm font-medium;
}
</style>
