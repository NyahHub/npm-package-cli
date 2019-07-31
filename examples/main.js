"use strict";
import 'babel-polyfill'
/* 引入Vue相关 */
import Vue from 'vue'
import Hello from '../src/index.js';
import App from './app.vue';
Vue.component('Hello', Hello);
new Vue({
  el: '#app',
  render: h => h(App)
});
