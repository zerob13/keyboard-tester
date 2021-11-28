<template>
  <div class="full-wrap my-auto mx-auto flex flex-row rounded-1xl">
    <div class="keyboard flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line my-1"
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
              active: keyState.has(kk.k),
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
    <div class="keyboard-part2 flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line my-1"
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
              active: keyState.has(kk.k),
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
    <div class="keyboard-num flex flex-col justify-center">
      <div
        class="flex flex-row keyboard-line my-1"
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
              active: keyState.has(kk.k),
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
.full-wrap {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  background: #eee;
  padding-bottom: 40px;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  transition: 0.4s;
  transform: scale(0.9);
}
.keyboard {
  width: 850px;
  height: 310px;
}
.keyboard-part2 {
  width: 176px;
  height: 310px;
  margin-left: 10px;
}
.keyboard-num {
  margin-left: 10px;
  width: 232px;
  height: 310px;
  padding-top: 50px;
}

.key {
  width: 50px;
  height: 50px;
  background: #eee;
  user-select: none;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  cursor: pointer;
  font-size: 14px;
  line-height: 48px;
  box-sizing: border-box;
  color: #9f9f9f;
  &.normal {
    background: #eee;
  }
  &.active {
    box-shadow: 0px 0px 0px 0px #fff9, 0px 0px 0px 0px #fff9,
      0px 0px 0px 0px #0001, 0px 0px 0px 0px #0001,
      inset -7px -7px 20px 0px #fff9, inset -4px -4px 5px 0px #fff9,
      inset 7px 7px 20px 0px #0003, inset 4px 4px 5px 0px #0001;
    transition: 0.2s;
  }
  &.-pressed {
    background: #eee;
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
    width: 100px;
  }
  &.key-ArrowUp {
    margin-top: 60px;
    margin-left: 66px;
  }
  &.-two-line {
    line-height: 20px;
    padding-top: 4px;
  }
  &.key-Numpad0 {
    width: 108px;
  }
}
</style>
