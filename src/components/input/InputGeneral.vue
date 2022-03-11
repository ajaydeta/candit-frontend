<template>
  <input
      class="w-100"
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="val"
      @input='$emit("update:val", $event.target.value)'
  />
</template>

<script>
import {ref} from "vue";

export default {
  name: "InputGeneral",
  props: {
    id: String,
    placeholder: String,
    val: String
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

</style>
