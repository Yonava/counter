import type { App } from 'vue';
import YonasCounter from './components/YonasCounter.vue';
export { YonasCounter };
declare module 'vue' {
    interface GlobalComponents {
        YonasCounter: typeof YonasCounter;
    }
}
declare const _default: {
    install(app: App): void;
};
export default _default;
