import Vue from 'vue'
import SvgVue from 'svg-vue';
import App from './App.vue'

Vue.use(SvgVue);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
