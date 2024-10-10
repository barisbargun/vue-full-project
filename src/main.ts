import './styles/globals.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";

import preset from './lib/preset'
import { cn } from './lib/utils'


const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: preset,
    options: {
      prefix: "p",
      darkModeSelector: ".dark",
      cssLayer: false,
    },
  }
})

app.use(createPinia())
app.use(router)
app.use(ToastService);



app.config.globalProperties.$cn = cn;

app.mount('#app')
