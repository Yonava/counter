<script setup lang="ts">
import { ref } from 'vue';
import YonaCounter from './YonaCounter.vue';

const total = ref(0)
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  {{ total }}
  <YonaCounter @counter-update="(e) => total += e" />
</template>

<style scoped></style>
