<script setup lang="ts">
import { useRoute } from 'vue-router'
import Campaign from '@/features/campaigns/components/Campaign.vue'
import { Breadcrumb } from '@/components/shared'
const id = useRoute().params.id
</script>

<template>
  <!-- breadcrumb -->


  <Campaign v-if="typeof id == 'string' && id.length > 2" :campaign-id="id" />
</template>
