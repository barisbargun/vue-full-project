<script setup lang="ts">
import assets from '@/assets'
import { linksConfig } from '@/constants/links'
import { CustomBlankLink } from '.'

const {} = defineProps<{}>()

const brandInfo = [
  {
    title: 'Kep adresi',
    value: 'yolcu360bilisim@hs01.kep.tr'
  },
  {
    title: 'Uçak bileti servis sağlayıcımız Biletdükkanı Turizm A.Ş IATA üyesidir. IATA No',
    value: '882 - 18885'
  },
  {
    title: 'TÜRSAB Belge No',
    value: '16078'
  }
]

const brandLinks = [
  {
    text: 'Gizlilik',
    href: '/firma/gizlilik'
  },
  {
    text: 'Kullanım Koşulları',
    href: '/firma/gizlilik'
  },
  {
    text: 'Kişisel Verilerin Korunması',
    href: '/firma/gizlilik'
  }
]
</script>

<template>
  <footer class="page-padding bg-primary pb-20 text-primary-foreground">
    <!-- logo and social media links -->
    <div class="flex items-center justify-between">
      <img :src="assets.logoText" alt="logo" class="w-40" />
      <div class="socialLinks flex gap-5">
        <CustomBlankLink v-for="v in linksConfig.social" v-bind="v" :key="v.alt" />
      </div>
    </div>

    <!-- links -->
    <div class="footerLinks grid grid-cols-5 gap-2">
      <div v-for="v in linksConfig.footer" :key="v.title">
        <h2 class="text-background">{{ v.title }}</h2>
        <ul>
          <li v-for="link in v.links" :key="link.alt">
            <CustomBlankLink :class="$cn(!link.img && 'text-[#bfe1ff]')" v-bind="link" />
          </li>
        </ul>
      </div>
    </div>

    <hr />

    <!-- mobile apps -->
    <div class="flex flex-col items-center">
      <h2>Mobil Uygulamamız</h2>
      <div class="mt-4 flex gap-4 [&_img]:w-32">
        <CustomBlankLink v-for="v in linksConfig.mobileApp" v-bind="v" :key="v.alt" />
      </div>
    </div>

    <hr />

    <!-- brand information -->
    <ul class="brandInfo flex flex-col items-center gap-2">
      <li v-for="info in brandInfo" :key="info.title">
        <strong>{{ info.title }}:</strong>
        <span class="text-blue-400">{{ info.value }}</span>
      </li>
      <li>
        <strong>Yolcu360 güvencesiyle %100 güvenli ödeme</strong>
        <span>
          <img
            class="mr-2 inline last:mr-0"
            v-for="img in Object.values(assets.creditProvider)"
            :src="img"
            :key="img"
          />
        </span>
      </li>
    </ul>

    <hr />

    <div class="text-center">
      <strong>YOLCU360 TÜM HAKLARI SAKLIDIR.</strong>
    </div>

    <hr />

    <ul class="flex justify-around">
      <li v-for="link in brandLinks" :key="link.text">
        <CustomBlankLink class="text-[#bfe1ff]" v-bind="link" />
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.brandInfo strong {
  @apply font-normal;
}

hr {
  @apply w-full border-border/20;
}

:deep(.footerLinks svg),
:deep(.footerLinks img) {
  @apply size-4;
  filter: invert(66%) sepia(55%) saturate(1341%) hue-rotate(345deg) brightness(101%) contrast(101%);
}
</style>
