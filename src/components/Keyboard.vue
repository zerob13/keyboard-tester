<template>
  <div
    class="full-wrap my-auto mx-auto flex flex-row border-3 border-dark-100 border-solid rounded-1xl"
  >
    <div class="keyboard bg-grey-50 flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line"
        v-for="(line, idx) in keys"
        :key="idx"
      >
        <div
          class="whitespace-pre-wrap flex place-content-center text-sm ml-2 box-border cursor-pointer border key"
          v-for="kk in line"
          :key="kk.k"
          :class="[
            {
              normal: !keyState.has(kk.k),
              'border-red-500 active text-gray-100': keyState.has(kk.k),
              '-two-line': kk.v.indexOf('\n') >= 0,
              '-pressed': pressed.has(kk.k),
            },
            'key-' + kk.k,
          ]"
        >
          {{ kk.v }}
        </div>
      </div>
    </div>
    <div class="keyboard-part2 bg-grey-50 flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line"
        v-for="(line, idx) in part2Keys"
        :key="idx"
      >
        <div
          class="whitespace-pre-wrap flex place-content-center text-sm ml-2 box-border cursor-pointer border key"
          v-for="kk in line"
          :key="kk.k"
          :class="[
            {
              normal: !keyState.has(kk.k),
              'border-red-500 active text-gray-100': keyState.has(kk.k),
              '-two-line': kk.v.indexOf('\n') >= 0,
              '-pressed': pressed.has(kk.k),
            },
            'key-' + kk.k,
          ]"
        >
          {{ kk.v }}
        </div>
      </div>
    </div>
    <div class="keyboard-num bg-grey-50 flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line"
        v-for="(line, idx) in numPadKey"
        :key="idx"
      >
        <div
          class="whitespace-pre-wrap flex place-content-center text-sm ml-2 box-border cursor-pointer border key"
          v-for="kk in line"
          :key="kk.k"
          :class="[
            {
              normal: !keyState.has(kk.k),
              'border-red-500 active text-gray-100': keyState.has(kk.k),
              '-two-line': kk.v.indexOf('\n') >= 0,
              '-pressed': pressed.has(kk.k),
            },
            'key-' + kk.k,
          ]"
        >
          {{ kk.v }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from "vue";
import { KEYMAP, NUMBER_PAD, PART_TWO } from "./keymap";

export default defineComponent({
  name: "Keyboard",
  setup(props, context) {
    const state = reactive({
      keys: KEYMAP,
      part2Keys: PART_TWO,
      numPadKey: NUMBER_PAD,
      keyState: new Set<string>(),
      pressed: new Set<string>(),
    });
    const onKeyDown = (e: KeyboardEvent) => {
      // console.log("keydown", e);
      e.preventDefault();
      e.stopPropagation();
      state.keyState.add(e.code);
      state.pressed.add(e.code);
      context.emit("lastkeyPressed", {
        code: e.code,
        key: e.key,
        keyCode: e.keyCode,
      });
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
<style lang="scss" scoped>
.keyboard {
  width: 760px;
  height: 310px;
}
.keyboard-part2 {
  width: 164px;
  height: 310px;
  margin-left: 10px;
}
.keyboard-num {
  margin-left: 10px;
  width: 220px;
  height: 310px;
  padding-top: 50px;
}

.key {
  width: 50px;
  height: 50px;
  float: left;
  cursor: pointer;
  color: #000000;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  font-family: Arial;
  line-height: 48px;
  font-weight: 500;
  &.normal {
    background-color: #fffff4;
  }
  &.active {
    background: #ee786e;
  }
  &.-pressed {
    background-color: #f4ffff;
  }
  &.key-Escape {
    width: 85px;
  }
  &.key-Backspace {
    width: 75px;
  }
  &.key-Tab {
    width: 75px;
  }
  &.key-CapsLock {
    width: 88px;
  }
  &.key-ShiftRight,
  &.key-ShiftLeft {
    width: 125px;
  }
  &.key-Space {
    width: 350px;
  }
  &.key-F9,
  &.key-F5,
  &.key-F1 {
    margin-left: 25px;
  }
  &.key-ControlLeft {
    margin-left: 25px;
  }
  &.key-Enter {
    width: 88px;
  }
  &.key-ArrowUp {
    margin-top: 50px;
    margin-left: 50px;
  }
  &.-two-line {
    line-height: 20px;
    padding-top: 4px;
  }
  &.key-Numpad0 {
    width: 102px;
  }
}
</style>
