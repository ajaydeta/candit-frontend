<template>
  <span :id="id" @click="action">
    {{ placeholder }}
  </span>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: String,
    placeholder: String,
  },
  setup(props, { emit }) {
    function action(payload) {
      console.log("cadsdasdsad");
      emit("action", payload);
    }
    return {
      action,
    };
  },
};
</script>

<style scoped>
span {
  content: url("https://api.iconify.design/ep/close-bold.svg?color=%2324305e");
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
}
</style>
