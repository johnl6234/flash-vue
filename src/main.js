import { createApp } from 'vue';
import App from './App.vue';
import FlashView from './plugin/flashPlugin.js';

const app = createApp(App);
app.use(FlashView);
app.mount('#app');
