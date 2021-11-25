<template>
  <div class="flex h-full w-full bg-gray-100">
    <keyboard></keyboard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Keyboard from "@/components/Keyboard.vue";
export default defineComponent({
  name: "App",
  components: { Keyboard },
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  display: block;
}
#app {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
