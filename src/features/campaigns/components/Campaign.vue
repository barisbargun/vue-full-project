<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCampaign } from '../api/get-campaign'
import { Button } from '@/components/ui'
import type { Campaign } from '@/types/campaign'

const { campaignId } = defineProps<{
  campaignId: string
}>()

const data = ref<Campaign>()
onMounted(async () => {
  try {
    data.value = (await getCampaign(campaignId)).data
  } catch (error) {
    console.error('Error fetching jobs', error)
  }
})
</script>

<template>
  <div v-if="data" class="px-4 pb-4">
    <!-- img -->
    <img :src="data?.img" alt="campaign-img" class="min-h-80 w-full object-cover" />

    <!-- header -->
    <section class="page-padding">
      <h1>{{ data.title }}</h1>
      <p>{{ data.desc }}</p>
      <Button>Katıl</Button>
    </section>

    <!-- conditions -->
    <section class="page-padding">
      <article>
        <h2>Kampanya Koşulları</h2>
        <ul>
          <li v-for="cond in data.conditions.main">{{ cond }}</li>
        </ul>
      </article>
      <article>
        <h2>Diğer Koşullar</h2>
        <ul>
          <li v-for="cond in data.conditions.other">{{ cond }}</li>
        </ul>
      </article>
    </section>

    <section class="page-padding !bg-transparent">
      <h2>Neden rezervasyonunuzu bizimle yapmalısınız?</h2>
      <ul>
        <li>Gizli ücret yok</li>
        <li>Ücretsiz iptal</li>
        <li>7/24 destek hattı</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
img,
section {
  @apply rounded-lg;
}
section {
  @apply bg-white;
}
</style>
