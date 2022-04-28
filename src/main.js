import { createApp } from 'vue';
import * as vueRouter from 'vue-router';
import App from './App.vue';
import * as featuresRoute from './features/route.js';
const routes = Object.values(featuresRoute).flatMap(ele => ele.routes);
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');
