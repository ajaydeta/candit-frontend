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
      default: 300
    },
    doSearching: Function
  },
  setup(props, {emit}) {
    const inputVal = ref("");

    let timeOut = null
    function doSearch(event) {
      clearTimeout(timeOut)
      timeOut = setTimeout(() => {
        emit("update:val", event.target.value)
        console.log(event.target.value)
        props.doSearching()
      }, props.delay)
    }
    
    return {
      inputVal,
      doSearch
    };
  },
};
</script>

<style scoped>
input {
  width: 200px;
  /*border: none;*/
  /*outline: none;*/
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
}
</style>
