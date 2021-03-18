import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ObserveVisibility } from 'vue-observe-visibility';

createApp(App)
    .use(router)
    .directive('observe-visibility', {
        beforeMount: (el, binding, vnode) => {
            (vnode as any).context = binding.instance
            ObserveVisibility.bind(el, binding, vnode)
        },
        updated: ObserveVisibility.update,
        unmounted: ObserveVisibility.unbind,
    })
    .mount('#app')