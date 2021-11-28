<template>
  <div class="flex flex-col h-full w-full bg-gray-100">
    <keyboard @lastkeyPressed="onLastKey"></keyboard>
    <div
      class="info-line flex flex-row w-full bg-gray-300 text-dark-500 justify-start"
    >
      <div class="plcae-content-center text-sm ml-2 box-border border">
        code: {{ lastKey.code }}
      </div>
      <div class="plcae-content-center text-sm ml-2 box-border border">
        key: {{ lastKey.key }}
      </div>
      <div class="plcae-content-center text-sm ml-2 box-border border">
        keyCode: {{ lastKey.keyCode }}
      </div>
      <div class="plcae-content-center text-sm ml-2 box-border border">
        History: {{ his }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Keyboard from "@/components/Keyboard.vue";
export default defineComponent({
  name: "App",
  components: { Keyboard },
  setup() {
    const state = reactive({
      lastKey: {
        code: " ",
        key: " ",
        keyCode: " ",
      },
      his: [] as string[],
    });
    return {
      ...toRefs(state),
      onLastKey: (data: { code: string; key: string; keyCode: string }) => {
        state.lastKey = data;
        if (state.his.length >= 10) {
          state.his.pop();
        }
        state.his.unshift(data.code);
      },
    };
  },
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
