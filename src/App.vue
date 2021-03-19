<template>
  <div>Vue app take 1</div>
  <div>{{ greeting }}</div>
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