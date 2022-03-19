<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 7V12H17" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
import {ref} from "vue";
import useFormatColorToHex from "@/helpers/useFormatColorToHex";

export default {
  name: "Clock",
  props: {
    color: {
      type: String,
      required: false
    },
    hexColor: {
      type: String,
      required: false
    },
    rotateDeg: {
      type: Number,
      default: 0
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