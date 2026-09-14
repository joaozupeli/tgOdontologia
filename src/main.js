import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

/* Marca que o JS rodou. O CSS só esconde elementos animados se esta
   classe existir, então uma falha de script nunca deixa a página em branco. */
document.documentElement.classList.add('js')

createApp(App).use(router).mount('#app')
