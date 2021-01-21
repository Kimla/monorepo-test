  
<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    {{ hello }}
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import url from "test-url";

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

const hello = url('testar');
</script>

<style scoped>
a {
  color: #42b983;
}
</style>