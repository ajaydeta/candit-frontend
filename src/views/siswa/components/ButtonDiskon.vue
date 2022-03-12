<template>
  <diskonbutton type="button" :id="id" @click="action">
    {{ placeholder }}
  </diskonbutton>
</template>

<script>
export default {
  name: "ButtonDiskon",
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
diskonbutton {
  margin-left: 15px;
  padding-left: 5px;
  padding-right: 5px;
  width: 90px;
  height: 20px;
  left: 237px;
  top: 236px;

  /* dark-blue */
  background: #f76d6d;
  border: none;
  box-sizing: border-box;
  border-radius: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 118%;
  /* identical to box height, or 13px */

  /* dark-blue */

  color: #ffffff;
}
</style>
