<script lang="ts">
export default {
  name: 'YonasCounter'
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';

const counter = ref(0)

const emits = defineEmits<{
  (e: 'counter-update', count: number): void
}>()

watch(counter, (v) => emits('counter-update', v))
</script>

<template>
  <div class="container">
    <h1>
      {{ counter }}
    </h1>
    <button @click="counter++">
      increment
    </button>
    <button @click="counter--">
      decrement
    </button>
  </div>
</template>

<style scoped>
div.container {
  border: 1px solid black;
  padding: 12px;
  border-radius: 20px;
  display: inline-block;
}
</style>