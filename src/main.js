import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ButtonCustom from './components/ButtonCustom.vue'

const app = createApp(App)
app.component('button-custom', ButtonCustom)
app.mount('#app')
