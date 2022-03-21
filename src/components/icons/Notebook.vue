<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z"
      :stroke="hexColor ? hexColor : hexClr"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 11H16"
      :stroke="hexColor ? hexColor : hexClr"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8H16"
      :stroke="hexColor ? hexColor : hexClr"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 20L8 4"
      :stroke="hexColor ? hexColor : hexClr"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import { ref } from "vue";
import useFormatColorToHex from "@/helpers/useFormatColorToHex";

export default {
  name: "Notebook",
  props: {
    color: {
      type: String,
      required: false,
    },
    hexColor: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  setup(props) {
    const hexClr = ref("#d0d0d0");
    if (props.color) {
      hexClr.value = useFormatColorToHex(props.color);
    }

    return {
      hexClr,
    };
  },
};
</script>

<style scoped>
</style>