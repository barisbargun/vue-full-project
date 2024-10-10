<script setup lang="ts">
import { BadgePercent, CarAlt, HeartPartnerHandshake } from '@/components/icons'
import { MenuIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import MenuPopoverLink from './MenuLink.vue'
import MenuCurrency from './MenuCurrency.vue';
import MenuLanguage from './MenuLanguage.vue';
import { Button, Popover } from '@/components/ui'
const links = [
  { Icon: BadgePercent, to: '/kampanya', text: 'Kampanyalar' },
  { Icon: CarAlt, to: '/tr/reservation/find', text: 'Rezervasyonumu bul' },
  { Icon: HeartPartnerHandshake, to: 'https://pro.yolcu360.com/', text: 'Kurumsal Kiralama' }
]

const isOpened = ref(false)
const op = ref()
const toggle = (event: Event) => {
  op.value.toggle(event)
}
</script>

<template>
  <Button
    type="button"
    @click="toggle"
    class="popover-trigger !bg-secondary !text-secondary-foreground"
    ><MenuIcon class="size-6 scale-x-[-1]" />
  </Button>

  <Popover
    ref="op"
    v-on:show="isOpened = true"
    v-on:hide="isOpened = false"
    al
    class="menu-popover w-[20rem] before:!hidden after:!hidden"
  >
    <div
      class="flex flex-col items-center bg-primary px-16 py-5 text-center text-primary-foreground"
    >
      <p class="font-semibold text-cerulean-blue-400">
        Oturum açın veya bir hesap oluşturun
      </p>
      <p class="my-4 text-primary-foreground/60">Tüm rezervasyonlarınıza tek bir yerden erişin</p>
      <Button
        class="whitespace-nowrap !rounded-full !bg-yellow-500 !px-10 !py-3 text-lg font-semibold !text-black"
        >Üye Ol / Giriş Yap</Button
      >
    </div>

    <ul>
      <li v-for="v in links" :key="v.text">
        <MenuPopoverLink v-bind="v" />
      </li>
      <li>
        <MenuCurrency />
        <MenuLanguage />
      </li>
    </ul>
  </Popover>
</template>

<style scoped>
:global(.menu-popover .p-popover-content) {
  @apply p-0;
}
</style>
