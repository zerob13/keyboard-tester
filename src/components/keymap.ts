export const KEYMAP = [
  [
    {
      v: "ESC",
      k: "Escape",
    },
    {
      v: "F1",
      k: "F1",
    },
    {
      v: "F2",
      k: "F2",
    },
    {
      v: "F3",
      k: "F3",
    },
    {
      v: "F4",
      k: "F4",
    },
    {
      v: "F5",
      k: "F5",
    },
    {
      v: "F6",
      k: "F6",
    },
    {
      v: "F7",
      k: "F7",
    },
    {
      v: "F8",
      k: "F8",
    },
    {
      v: "F9",
      k: "F9",
    },
    {
      v: "F10",
      k: "F10",
    },
    {
      v: "F11",
      k: "F11",
    },
    {
      v: "F12",
      k: "F12",
    },
  ],
  [
    {
      v: "~\n`",
      k: "Backquote",
    },
    {
      v: "!\n1",
      k: "Digit1",
    },
    {
      v: "@\n2",
      k: "Digit2",
    },
    {
      v: "#\n3",
      k: "Digit3",
    },
    {
      v: "$\n4",
      k: "Digit4",
    },
    {
      v: "%\n5",
      k: "Digit5",
    },
    {
      v: "^\n6",
      k: "Digit6",
    },
    {
      v: "&\n7",
      k: "Digit7",
    },
    {
      v: "*\n8",
      k: "Digit8",
    },
    {
      v: "(\n9",
      k: "Digit9",
    },
    {
      v: ")\n0",
      k: "Digit0",
    },
    {
      v: "_\n-",
      k: "Minus",
    },
    {
      v: "+\n=",
      k: "Equal",
    },
    {
      v: "←\nBS",
      k: "Backspace",
    },
  ],
  [
    { v: "Tab", k: "Tab" },
    { v: "Q", k: "KeyQ" },
    { v: "W", k: "KeyW" },
    { v: "E", k: "KeyE" },
    { v: "R", k: "KeyR" },
    { v: "T", k: "KeyT" },
    { v: "Y", k: "KeyY" },
    { v: "U", k: "KeyU" },
    { v: "I", k: "KeyI" },
    { v: "O", k: "KeyO" },
    { v: "P", k: "KeyP" },
    { v: "{\n[", k: "BracketLeft" },
    { v: "}\n]", k: "BracketRight" },
    { v: "|\n\\", k: "Backslash" },
  ],
  [
    { v: "Caps Lock", k: "CapsLock" },
    { v: "A", k: "KeyA" },
    { v: "S", k: "KeyS" },
    { v: "D", k: "KeyD" },
    { v: "F", k: "KeyF" },
    { v: "G", k: "KeyG" },
    { v: "H", k: "KeyH" },
    { v: "J", k: "KeyJ" },
    { v: "K", k: "KeyK" },
    { v: "L", k: "KeyL" },
    { v: ":\n;", k: "Semicolon" },
    { v: "\"\n'", k: "Quote" },
    { v: "↵\nEnter", k: "Enter" },
  ],
  [
    { v: "Shift", k: "ShiftLeft" },
    { v: "Z", k: "KeyZ" },
    { v: "X", k: "KeyX" },
    { v: "C", k: "KeyC" },
    { v: "V", k: "KeyV" },
    { v: "B", k: "KeyB" },
    { v: "N", k: "KeyN" },
    { v: "M", k: "KeyM" },
    { v: "<\n,", k: "Comma" },
    { v: ">\n.", k: "Period" },
    { v: "?\n/", k: "Slash" },
    { v: "Shift", k: "ShiftRight" },
  ],
  [
    { v: "Ctrl\ncontrol", k: "ControlLeft" },
    { v: "Win\nMeta", k: "MetaLeft" },
    { v: "Alt\noption", k: "AltLeft" },
    { v: "Space", k: "Space" },
    { v: "Alt\noption", k: "AltRight" },
    { v: "Win\nMeta", k: "MetaRight" },
    { v: "Menu", k: "ContextMenu" },
    { v: "Ctrl\ncontrol", k: "ControlRight" },
  ],
];
export const PART_TWO = [
  [
    {
      v: "Prt\nScr",
      k: "PrintScreen",
    },
    {
      v: "Scroll\nLock",
      k: "ScrollLock",
    },
    {
      v: "Pause",
      k: "Pause",
    },
  ],
  [
    { v: "Insert", k: "Insert" },
    { v: "Home", k: "Home" },
    { v: "Page\nUp", k: "PageUp" },
  ],
  [
    { v: "Delete", k: "Delete" },
    { v: "End", k: "End" },
    { v: "Page\nDown", k: "PageDown" },
  ],
  [{ v: "↑\nup", k: "ArrowUp" }],
  [
    { v: "←\nleft", k: "ArrowLeft" },
    { v: "↓\ndown", k: "ArrowDown" },
    { v: "→\nright", k: "ArrowRight" },
  ],
];

export const NUMBER_PAD = [
  [
    { v: "Num\nLock", k: "NumLock" },
    { v: "/", k: "NumpadDivide" },
    { v: "*", k: "NumpadMultiply" },
    { v: "-", k: "NumpadSubtract" },
  ],
  [
    { v: "7", k: "Numpad7" },
    { v: "8", k: "Numpad8" },
    { v: "9", k: "Numpad9" },
    { v: "+", k: "NumpadAdd" },
  ],
  [
    { v: "4", k: "Numpad4" },
    { v: "5", k: "Numpad5" },
    { v: "6", k: "Numpad6" },
    { v: "Num\nEnter", k: "NumpadEnter" },
  ],
  [
    { v: "1", k: "Numpad1" },
    { v: "2", k: "Numpad2" },
    { v: "3", k: "Numpad3" },
  ],
  [
    { v: "0", k: "Numpad0" },
    { v: ".\nDel", k: "NumpadDecimal" },
  ],
];
