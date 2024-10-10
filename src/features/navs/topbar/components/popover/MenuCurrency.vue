<script setup lang="ts">
import Coins from '@/components/icons/Coins.vue';
import { ref, reactive } from 'vue'

const currencyOption = {
  Icon: Coins,
  defaultOption: 'try',
  options: [
    { val: 'eur', text: '€ EUR' },
    { val: 'usd', text: '$ USD' },
    { val: 'gbp', text: '£ GBP' },
    { val: 'try', text: '₺ TRY' }
  ]
}

</script>

<template>
  <li>Currency</li>
</template>

<style scoped></style>