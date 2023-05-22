import { createApp } from 'vue'
import App from './App.vue'
import  './assets/css/main.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


createApp(App)
.use(router)
.use(VueAxios,axios)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


