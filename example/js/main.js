//import Example from './Example.vue'
import Example from './js/Example.vue'

Vue.component('app-example', Example);

new Vue({
    el: '#player',
	render: h => h(App)    
});