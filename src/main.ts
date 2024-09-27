import './assets/globals.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Select from 'primevue/select';
import Input from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

import ToastService from "primevue/toastservice";
import preset from './lib/preset'

import Popover from 'primevue/popover';


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

app.component('Select', Select)
app.component('Input', Input)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('Textarea', Textarea)
app.component('Button', Button)
app.component('Popover', Popover)

app.mount('#app')
