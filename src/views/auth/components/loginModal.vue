<template>
  <div class="modal">
    <div class="modal-dialog"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "LoginModal",
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.modal {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background-color: var(--black-transparent50);
}

.modal-dialog {
  position: relative;
  top: calc(100vh - 452px);
  bottom: 0;
  height: 452px;
  background-color: var(--white);
}
</style>