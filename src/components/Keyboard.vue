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
          'border-gray-500 ': !keyState.has(kk.k),
          'border-red-500 bg-red-200 text-gray-100': keyState.has(kk.k),
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
      keyState: new Set<string>(),
    });
    const onKeyDown = (e: KeyboardEvent) => {
      // console.log("keydown", e);
      e.preventDefault();
      e.stopPropagation();
      state.keyState.add(e.code);
      return true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("keyup", e.code);
      state.keyState.delete(e.code);
      if (e.code === "MetaLeft" || e.code === "MetaRight") {
        state.keyState.clear();
      }
      return true;
    };
    onMounted(() => {
      document.onkeyup = onKeyUp;
      document.onkeydown = onKeyDown;
    });
    onUnmounted(() => {
      // document.removeEventListener("keydown", onKeyDown);
      // document.removeEventListener("keyup", onKeyUp);
    });
    return {
      ...toRefs(state),
      onKeyDown,
      onKeyUp,
    };
  },
});
</script>
