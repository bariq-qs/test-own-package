<script setup lang="ts">
import {
  ref
} from 'vue'
const testVal = ref('')
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  <i class="fas fa-underline"></i>
  <i class="fad fa-laugh-wink"></i>
  <EditorTiptap v-model="testVal" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
