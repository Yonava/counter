<script setup lang="ts">
import { ref, watch } from 'vue';

const counter = ref(0)

const emits = defineEmits<{
  (e: 'counter-update', count: number): void
}>()

watch(counter, (v) => emits('counter-update', v))
</script>

<template>
  <h1>
    {{ counter }}
  </h1>
  <button @click="counter++">
    increment
  </button>
  <button @click="counter--">
    decrement
  </button>
</template>