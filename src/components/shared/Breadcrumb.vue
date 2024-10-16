<script setup lang="ts">
import { Breadcrumb } from '@/components/ui'
import { ref } from 'vue'
const items = ref([
  { label: 'Electronics' },
  { label: 'Computer' },
  { label: 'Accessories' },
  { label: 'Keyboard' },
  { label: 'Wireless' }
])
</script>

<template>
  <Breadcrumb :model="items"  />
</template>

<style scoped></style>
