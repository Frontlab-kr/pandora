import './assets/theme.css';
import './assets/common.scss';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';

const app = createApp(App);
app.use(PrimeVue);
app.use(router).mount('#app');
