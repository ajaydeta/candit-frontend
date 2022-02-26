<template>
  <button
      type="button"
      :id="id"
      @click="action"
  >
    {{placeholder}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: String,
    placeholder: String,
  },
  setup(props, { emit }){
    function action(payload) {
      console.log("cadsdasdsad")
      emit("action", payload);
    }
    return{
      action
    }
  }
}
</script>

<style scoped>

</style>