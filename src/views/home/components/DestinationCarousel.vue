<script setup lang="ts">
import { ref, reactive } from 'vue'
const { vehicleDestination } = defineProps<{
  vehicleDestination: number
}>()
</script>

<template>
    <!-- WIP: Make -m-4 dynamic -->
    <div class="h-80 w-full bg-blue-200"></div>
</template>

<style scoped></style>
