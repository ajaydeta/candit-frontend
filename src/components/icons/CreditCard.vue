<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
        :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 15H11" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M3 11H21" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M3 9H21" :stroke="hexColor ? hexColor : hexClr" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
  </svg>
</template>

<script>
import {ref} from "vue";
import useFormatColorToHex from "@/helpers/useFormatColorToHex";

export default {
  name: "CreditCard",
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