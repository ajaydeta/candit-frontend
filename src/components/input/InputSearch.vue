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
import { ref } from "vue";

export default {
  name: "InputSearch",
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
      inputVal,
    };
  },
};
</script>

<style scoped>
input {
  width: 400px;
  background: transparent;
  border: none;
  outline: none;
  width: 0px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
}
</style>
