<script setup lang="ts">
import { ref } from 'vue';
import YonaCounter from './components/YonaCounter.vue';

const total = ref(0)
</script>

<template>
  <div class="v-stack">
    <h1>
      Total: {{ total }}
    </h1>
    <YonaCounter @counter-update="(e) => total += e" />
  </div>
</template>

<style scoped>
.h-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
