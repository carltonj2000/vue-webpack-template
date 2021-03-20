<template>
  <div>Vue app take 1</div>
  <div class="bg-yellow-100">{{ greeting }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const greeting: string = "hello there";

export default defineComponent({
  name: "App",
  data() {
    return {
      greeting,
    };
  },
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
