<template>
  <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      v-model="inputVal"
      @input="$emit('input', inputVal)"
  />
</template>

<script>
import {ref} from "vue";

export default {
  name: "InputGeneral",
  props: {
    id: String,
    placeholder: String,
  },
  setup() {
    const inputVal = ref("");
    //
    // watch(inputVal, (newVal, oldVal) => {
    //   console.log("new:", newVal, "old:", oldVal)
    // })

    return {
      inputVal
    };
  },
};
</script>

<style scoped>
</style>