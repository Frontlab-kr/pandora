<template>
  <div class="card flex justify-content-center">
    <InputText type="text" v-model="value" />
  </div>

  11
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
