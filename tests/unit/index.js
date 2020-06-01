import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({});

const vuetify = new Vuetify({});

const localVue = new Vue({
  router,
  vuetify,
});

export default localVue;
