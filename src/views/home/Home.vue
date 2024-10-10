<script setup lang="ts">
import { CarAlt } from '@/components/icons'
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui'
import {
  FaqAccordion,
  DestinationCarousel,
  FeatureCard,
  CampaignCarousel,
  FilterSearch,
  FilterDate,
} from './components'
import { faq } from '@/constants/faq'
import assets from '@/assets'
import { siteConfig } from '@/constants/site'
import { BlankImgLink } from '@/components/shared'
import { linksConfig } from '@/constants/links'

const isDiffPlace = ref(false)
const vehicleDestination = ref(0)

</script>

<template>
  <!-- Section Filter -->
  <section class="page-padding items-center bg-primary px-3 py-5 text-primary-foreground">
    <h1 class="text-center text-3xl font-semibold">Araç Kiralamak Ne Kolaymış!</h1>
    <h2 class="text-center text-xl text-primary-foreground/60">
      Karşılaştır, ideal aracını tüm dünyada en iyi fiyata kirala.
    </h2>

    <div class="mt-6 flex w-full gap-4 text-lg font-semibold">
      <RouterLink to="/" class="w-full">
        <Button class="w-full text-primary" severity="secondary"
          ><CarAlt class="size-5" /> Araç Kirala
        </Button>
      </RouterLink>
      <RouterLink to="/ucak-bileti" class="w-full">
        <Button class="text-primary-white w-full !border-border/30"
          ><CarAlt class="size-5" fill="white" /> Uçak Bileti Al
        </Button>
      </RouterLink>
    </div>
    <FilterSearch class="mt-3" />
    <div class="mt-2 grid w-full grid-cols-2 gap-2">
      <FilterDate title="Alış Tarihi" type="date" />
      <FilterDate title="Alış Saati" type="time" />
      <FilterDate title="Bırakış Tarihi" type="date" />
      <FilterDate title="Bırakış Saati" type="time" />
    </div>
    <div class="my-3 flex items-center">
      <Checkbox v-model="isDiffPlace" inputId="isDiffPlace" name="pizza" value="Cheese" />
      <label for="isDiffPlace" class="ml-2"> Farklı yerde bırakmak istiyorum</label>
    </div>
    <p class="driver-info">
      Sürücünün yaşadığı ülke <strong>Türkiye</strong> ve yaşı <strong>30-65 !</strong>
    </p>
    <Button class="mt-2 w-full !bg-orange-400 font-medium uppercase">Araç ara</Button>
  </section>

  <!-- Section Suppliers -->
  <section class="page-padding flex flex-col items-center">
    <h2 class="sr-only">Tüm Tedarikçiler</h2>
    <div class="flex items-center gap-2">
      <Button severity="secondary"><ChevronLeftIcon /></Button>
      <div class="grid h-28 w-96 grid-cols-5 gap-4">
        <div
          v-for="v in assets.suppliers"
          class="flex items-center rounded-lg border border-border/50 bg-white"
        >
          <img :src="v" alt="supplier" class="w-full" />
        </div>
      </div>
      <Button severity="secondary"><ChevronRightIcon /></Button>
    </div>
    <Button class="mt-2" severity="secondary">Tüm Tedarikçiler</Button>
  </section>

  <!-- Section Campaigns -->
  <section class="page-padding">
    <div class="mb-4 flex justify-between gap-10">
      <div class="flex flex-col gap-2">
        <h2>Kampanyalar</h2>
        <h3>
          Yolcu360’ın yalnızca misafirlerine özel araç kiralama ve uçak bileti kampanyalarını
          keşfedin.
        </h3>
      </div>
      <Button class="whitespace-nowrap">Tüm Kampanyalar</Button>
    </div>
    <CampaignCarousel />
  </section>

  <!-- Section Features -->
  <section class="page-padding">
    <h2>Yola Bizimle Çıkmak İçin 3 Harika Neden:</h2>
    <div class="flex flex-col gap-4">
      <FeatureCard
        v-for="v in Array(3)"
        title="Kampanyalar"
        desc="Yolcu360’ın yalnızca misafirlerine özel araç kiralama ve uçak bileti kampanyalarını keşfedin."
        ils="https://via.placeholder.com/150"
      />
    </div>
  </section>

  <!-- Section Destinations -->
  <section class="page-padding-y bg-background">
    <div class="page-padding-x">
      <h2>Kampanyalar</h2>
      <div class="mb-6 mt-3 flex items-center justify-between gap-10">
        <h3>Dünyanın dört bir yanında, 30.000’den fazla araç kiralama noktasını keşfedin!</h3>
        <Button class="whitespace-nowrap">Tüm Lokasyonlar</Button>
      </div>
    </div>
    <div class="relative flex flex-col gap-4">
      <div class="page-padding-x flex gap-3">
        <Button @click="vehicleDestination = 0">Popüler Şehir Merkezleri</Button>
        <Button @click="vehicleDestination = 1">Popüler Havalimanları</Button>
      </div>
      <DestinationCarousel class="destinationCarousel" :vehicleDestination="vehicleDestination" />
    </div>
  </section>

  <!-- Section Other Locations -->
  <section class="page-padding bg-background">
    <div v-if="vehicleDestination == 0">
      <h2>Diğer Popüler Noktalar ve Havalimanı Lokasyonları</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>İstanbul Havalimanı</div>
        <div>İstanbul</div>
      </div>
    </div>
    <hr class="my-4" />
    <div>
      <h2>Diğer Araç Kiralama Lokasyonları</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>İstanbul Havalimanı</div>
        <div>İstanbul</div>
      </div>
    </div>
  </section>

  <!-- Section FAQ -->
  <section class="page-padding">
    <h2>Sıkça sorulan sorular</h2>
    <div class="flex flex-col gap-1">
      <FaqAccordion v-for="v in faq" v-bind="v" :key="v.title" />
    </div>
    <p class="float-end mt-2">
      Farklı soruların için
      <strong class="font-medium text-yellow-400 underline">Yardım</strong> sayfamızı ziyaret
      edebilirsin.
    </p>
  </section>
  <!-- Mobile App Banner -->
  <section class="page-padding">
    <div
      :style="{ backgroundImage: `url('${assets.views.mobileView}')` }"
      class="h-52 w-full rounded-lg bg-primary bg-cover bg-center p-8 [&_img]:rounded-lg"
    >
      <div class="flex gap-5 text-white [&_img]:size-24">
        <img :src="assets.logo" alt="logo" />
        <img :src="assets.others.qrCode" alt="qr" />
        <div>
          <h2>{{ siteConfig.slogan }}</h2>
          <p>{{ siteConfig.url.replace('https://', '') }}</p>
        </div>
      </div>
      <div class="mt-4 flex gap-4 [&_img]:w-32">
        <!-- <BlankImgLink v-for="v in mobileAppLinksConfig" v-bind="v" :key="v.alt" /> -->
      </div>
    </div>
  </section>

  <!-- Section Brand Information -->
  <section class="page-padding">
    <h2>Araç Kiralama | Yolcu360</h2>
    <article>
      <p>
        Ucuz araç kiralama, günlük ve aylık rent a car, %70'ye varan online kampanyalar, en iyi
        fiyat garantisi ve %100 iade imkanı ile araç kirala!<br /><br />
        Araç kiralama, yani "rent a car" hizmeti, modern dünyada hem bireyler hem de kurumlar için
        en önemli ihtiyaçlardan biri haline geldi.<br />
        Araç kiralama firmaları da bu artan talebi karşılamak için seçeneklerini günden güne
        artırmaya devam ediyor, her gün binlerce yeni aracı filolarına katıyorlar. Peki, binlerce
        seçenek arasından en uygun fiyatlı kiralık aracı nasıl bulabilirsiniz?<br />
        İşte Yolcu360, tam olarak bu sorunun cevabı!<br />
        İster bireysel ister kurumsal araç kiralama hizmetine ihtiyacınız olsun, Yolcu360 her zaman
        en iyi kiralık araç seçeneklerini bir araya getirir; böylece siz de saniyeler içinde,
        kolayca aracınızı kiralarsınız. <br /><br />
        Farklı yerel ve global markaların sunduğu birçok araç kiralama seçeneği arasından seçim
        yapmak zorlu olabilir. En uygun fiyatlı araç kiralama seçeneğini belirlemek ve bu hizmetin
        hangi marka ya da ofis tarafından sunulduğunu araştırmak zaman alıcı ve zahmetli bir sürece
        dönüşebilir. İşte Yolcu360, tam bu noktada devreye giriyor: Sistemli ve güvenilir
        altyapısıyla, fiyat karşılaştırma, listeleme ve dakikalar içerisinde araç kiralama
        özellikleriyle, misafirlerinin hızlı, kolay ve zahmetsiz bir şekilde en ideal aracı
        bulmalarına olanak sağlıyor. Hem de tek bir platformdan ve yalnızca birkaç tıkla!<br /><br />
        <strong>Yurt içinde ve yurt dışında yola çıkmak hiç bu kadar kolay olmamıştı! </strong
        ><br /><br />
        Yolcu360, yalnızca Türkiye’de değil, dünyanın dört bir yanında sizinle! Havaalanından araç
        kiralamak mı istiyorsunuz? Ya da tatil için kiralık araç mı lazım? Yoksa şirketinizin ulaşım
        ihtiyaçları için kurumsal çözümler mi arıyorsunuz? Rent a car ihtiyacınız ne olursa olsun,
        Yolcu360 olarak size dünyanın her yerinde destek olmaktan mutluluk duyarız. Bizimle yola
        çıkmak için dilediğiniz mobil cihaz üzerinden Yolcu360 uygulamasını kullanabilir, Yolcu360
        web sitesini ziyaret edebilir ya da 0850 360 5 360 numaralı, 7/24 hizmet veren “Efsaneler
        Takımı” isimli Misafir Merkezi’nden bize dilediğiniz an ulaşabilirsiniz.
      </p>
    </article>
  </section>

  <footer class="bg-primary">
    <div>
      <img :src="assets.logoText" alt="logo" class="w-28" />
      <div class="socialLinks">
        <!-- <BlankImgLink v-for="v in mobileAppLinksConfig" v-bind="v" :key="v.alt" /> -->
        <img :src="assets.brands.linkedin" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
:global(main) {
  @apply bg-neutral-100;
}

.driver-info strong {
  @apply font-medium text-amber-400 underline;
}

.socialLinks img {
  filter: invert(85%) sepia(6%) saturate(1643%) hue-rotate(180deg) brightness(100%) contrast(102%);
}
</style>
