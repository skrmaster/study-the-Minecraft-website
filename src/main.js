import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {
	BootstrapVue,
	BootstrapVueIcons
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
	if (to.matched.some(record => record.name)) {
		next()
	} else {
		next('/')
	}
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
		window.scrollTo(0, 0)
	}
	next()
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
