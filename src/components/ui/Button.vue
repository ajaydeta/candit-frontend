<template>
  <button type="button" :id="id" @click="action">
    {{ placeholder }}
  </button>
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
      emit("action", payload);
    }
    return {
      action,
    };
  },
};
</script>

<style scoped>
button {
  margin-top: 20px;
  width: 265px;
  height: 40px;
  left: 44px;
  top: 399px;
  background: #24305e;
  border: 0px;
  border-radius: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  color: #ffffff;
}
</style>
