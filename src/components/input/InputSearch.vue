<template>
  <input
    type="text"
    :id="id"
    :placeholder="placeholder"
    :value="val"
    @input="doSearch"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "InputSearch",
  props: {
    id: String,
    placeholder: String,
    val: String,
    delay: {
      type: Number,
      default: 300,
    },
    doSearching: Function,
  },
  setup(props, { emit }) {
    const inputVal = ref("");

    let timeOut = null;
    function doSearch(event) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        emit("update:val", event.target.value);
        console.log(event.target.value);
        props.doSearching();
      }, props.delay);
    }

    return {
      inputVal,
      doSearch,
    };
  },
};
</script>

<style scoped>
input {
  margin: 5px auto;
  width: 325px;
  height: 40px;
  left: 22px;
  top: 97px;
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
