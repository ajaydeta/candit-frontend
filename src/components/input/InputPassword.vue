<template>
  <input
      type="password"
      :id="id"
      :placeholder="placeholder"
      :value="val"
      @input='$emit("update:val", $event.target.value)'
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "InputPassword",
  props: {
    id: String,
    placeholder: String,
    val: String
  },
  setup() {
    const inputVal = ref("");
    return {
      inputVal,
    };
  },
};
</script>

<style scoped>
input {
  margin: 10px auto;
  width: 265px;
  height: 40px;
  left: 44px;
  top: 282px;
  border: 1px solid #374785;
  box-sizing: border-box;
  border-radius: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  padding: 20px;

  display: flex;
}
</style>
