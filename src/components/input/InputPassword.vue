<template>
  <input
      class="w-100"
      type="password"
      :id="id"
      :placeholder="placeholder"
      autocomplete="off"
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

</style>
