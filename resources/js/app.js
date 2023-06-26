require('./bootstrap');

import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router';
import store from './store';
import '@ocrv/vue-tailwind-pagination/styles'
import Unicon from 'vue-unicons'
import { uniTrashAlt, uniEdit, uniEye } from 'vue-unicons/dist/icons'

Unicon.add([uniTrashAlt, uniEdit, uniEye])

axios.defaults.withCredentials = true;

store.dispatch('getUser').then(() => {
    createApp(App)
        .use(router)
        .use(store)
        .use(Unicon)
        .mount("#app");
})

