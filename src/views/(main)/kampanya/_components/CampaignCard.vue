<script setup lang="ts">
import { Card } from '@/components/ui'
import type { Campaign } from '@/types/campaign'
import { routeNames } from '@/constants/route'

const { img, title } = defineProps<Pick<Campaign, 'id' | 'img' | 'title'>>()
</script>

<template>
  <RouterLink :to="{ name: `${routeNames.campaign}-id`, params: { id: id } }">
    <Card class="w-full overflow-hidden">
      <template #header>
        <img alt="user header" :src="img" />
      </template>
      <template #title>{{ title }}</template>
    </Card>
  </RouterLink>
</template>

<style scoped></style>
