// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//=================== Stylesheets ===================//
import './stylesheets/style.css';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Custom Styles

import './stylesheets/dndhome.css';
import './stylesheets/dnddlab.css';

//import './stylesheets/style.css'



// CUSTOM GLOBAL DIRECTIVES
/*
Vue.directive('auto-expand', (element, directElement) => {
  let el = (directElement ? element : element.srcElement);
  el.style.height = "5px";
  el.style.height = (el.scrollHeight + 20) + "px";
});*/





import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueScrollTo from 'vue-scrollto';
import VueClipboard from 'vue-clipboard2';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueScrollTo);
Vue.use(VueClipboard);

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import App from './components/App.vue';
import DndHome from './components/DndHome.vue';
import Dnddlab from './components/Dnddlab.vue';
import PageNotFound from './components/PageNotFound.vue';
import Styleframe from './components/Styleframe.vue';


const routes = [
  {
      path: '/', name: 'Root', component: DndHome
  },
  {
    path: '/Dnddlab', component: Dnddlab
  },

  {
    path: '/Styleframe', component: Styleframe
  },
  {
      path: '*',
      component: PageNotFound
  }
];

export let router = new VueRouter({
    routes: routes
});



//Vue.config.productionTip = false

/* eslint-disable no-new */

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App),
  render (createElement) {
    return createElement(App);
  }
});


Vue.config.errorHandler = function (err, vm, info) {
  console.error(err);
};
