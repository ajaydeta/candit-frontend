<template>
  <button type="button" :id="id" @click="action">
    {{ placeholder }}
  </button>
</template>

<script>
export default {
  name: "ButtonConfirm",
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
  width: 75px;
  height: 22px;
  float: right;

  /* dark-blue */
  background: #ffffff;
  border: 1px solid #24305e;
  box-sizing: border-box;
  border-radius: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 118%;
  /* identical to box height, or 13px */

  /* dark-blue */

  color: #24305e;
}
</style>
