<template>
  <div class="modal">
    <div class="modal-dialog">
      <InputGeneral
        @input="username"
        id="user"
        placeholder="cokkkkk"
      />
      <Button
        id="submit"
        placeholder="Masuk"
        @action="login()"
      />
    </div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from "vue";
import InputGeneral from "@/components/input/InputGeneral"
import Button from "@/components/ui/Button";

export default {
  name: "LoginModal",
  components: {
    InputGeneral,
    Button
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const username = ref("");

    function login() {
      console.log("login")
    }

    return {
      ...toRefs(state),
      username,
      login
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