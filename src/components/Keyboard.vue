<template>
  <div class="mx-auto bg-yellow-50 flex flex-col w-full justify-center">
    <div
      class="flex flex-row keyboard-line mt-4"
      v-for="(line, idx) in keys"
      :key="idx"
    >
      <div
        class="whitespace-pre-wrap flex w-13 place-content-center h-13 text-sm ml-2 box-border cursor-pointer border"
        v-for="kk in line"
        :key="kk.k"
        :class="{
          'border-gray-500 ': activeKey != kk.k,
          'border-red-500 bg-red-200 text-gray-100': activeKey == kk.k,
        }"
      >
        {{ kk.v }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from "vue";
import { KEYMAP } from "./keymap";

export default defineComponent({
  name: "Keyboard",
  setup(props, context) {
    const state = reactive({
      keys: KEYMAP,
      activeKey: "",
    });
    const onKeyDown = (e: KeyboardEvent) => {
      // console.log("keydown", e);
      state.activeKey = e.code;
      e.preventDefault();
      e.stopPropagation();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      console.log("keyup", e.code);
      state.activeKey = "";
    };
    onMounted(() => {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    });
    return {
      ...toRefs(state),
      onKeyDown,
      onKeyUp,
    };
  },
});
</script>
