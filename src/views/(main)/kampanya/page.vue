<script setup lang="ts">
import assets from '@/assets'
import { CampaignCard } from './_components'
import { Button } from '@/components/ui'
import { campaignContent } from '@/contents/campaign'
</script>

<template>
  <!-- Filter Type -->
  <section class="page-padding bg-primary">
    <h1>Title</h1>
    <p>Desc</p>
    <div class="filter-types flex gap-2">
      <div>
        <img :src="assets.others.discount" alt="all" />
        <strong>Tümü</strong>
      </div>
      <div>
        <img :src="assets.others.car" alt="all" />
        <strong>Tümü</strong>
      </div>
      <div>
        <img :src="assets.others.plane" alt="all" />
        <strong>Tümü</strong>
      </div>
    </div>
  </section>

  <!-- Filter Country-Abroad  -->
  <section class="page-padding">
    <Button>Yurt içi Kampanyaları</Button>
    <Button severity="secondary">Yurt dışı Kampanyaları</Button>
  </section>

  <!-- Campaigns -->
  <section class="page-padding">
    <CampaignCard
      title="Aracınızı Aylık Kiralayın, Yola 5000 TL İndirimli Çıkın!"
      img="https://strapi.yolcu360.com/aylikkirala5000_slider_fc92547df5.jpg"
      id="uzun-donem-kiralama"
      v-for="i in 5"
    />
  </section>

  <!-- Campaign mdx  -->
  <section class="page-padding">
    <article class="bg-white page-padding">
      <div class="mb-4 last:mb-0" v-for="(article, ind) in campaignContent" :key="ind">
        <h2 class="mb-2 text-xl font-semibold">{{ article.title }}</h2>
        <p>{{ article.desc }}</p>
      </div>
    </article>
  </section>

</template>

<style scoped>
.filter-types {
  div {
  }

  img {
    @apply inline w-16 rounded-full border-[6px] border-orange-300 bg-white;
  }

  strong {
    @apply ml-2 text-primary-foreground;
  }
}
</style>
