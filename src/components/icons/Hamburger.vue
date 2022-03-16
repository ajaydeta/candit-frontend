<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17H19" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12H19" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 7H19" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
import {ref} from "vue";
import useFormatColorToHex from "@/helpers/useFormatColorToHex";

export default {
  name: "Hamburger",
  props: {
    color: {
      type: String,
      required: false
    },
    hexColor: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const hexClr = ref("#d0d0d0")
    if (props.color) {
      hexClr.value = useFormatColorToHex(props.color)
    }

    return {
      hexClr
    }
  }
}
</script>

<style scoped>

</style>