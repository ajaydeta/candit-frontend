<template>
  <input
      class="w-100"
      type="text"
      :id="id"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="inputVal"
  />
</template>

<script>

import {ref, watch} from "vue";
import {useRegexDigit} from "@/helpers";

export default {
  name: "InputDigit",
  props: {
    id: String,
    placeholder: String,
    val: String,
    maxLength: {
      type: Number,
      required: false
    }
  },
  emits: ["input"],
  setup(props, {emit}) {
    const inputVal = ref("");
    const valMax = ref("");

    watch(inputVal, () => {
      inputVal.value = useRegexDigit(inputVal.value)
      if (inputVal.value.toString().length <= props.maxLength) {
        valMax.value = inputVal.value
      } else {
        inputVal.value = valMax.value
      }
      emit("input", inputVal.value)
    })

    return {
      inputVal
    }
  }
};
</script>