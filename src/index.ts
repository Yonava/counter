import type { App } from 'vue'
import YonaCounter from './components/YonaCounter.vue'

export { YonaCounter }

export default {
  install(app: App) {
    app.component('YonaCounter', YonaCounter)
  },
}
