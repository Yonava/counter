import type { App } from 'vue'
import YonasCounter from './components/YonasCounter.vue'

export { YonasCounter }

declare module 'vue' {
  export interface GlobalComponents {
    YonasCounter: typeof YonasCounter
  }
}

export default {
  install(app: App) {
    app.component('YonasCounter', YonasCounter)
  },
}
