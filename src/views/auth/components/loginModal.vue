<template>
  <div class="modal">
    <div class="modal-dialog">
      <Close id="close" />
      <div class="header1 dark-blue">Masuk</div>
      <div class="form">
        <InputGeneral @input="username" id="user" placeholder="Nama pengguna" />
        <InputGeneral @input="username" id="password" placeholder="Password" />
        <Button id="submit" placeholder="Masuk" @action="login()" />
        <div class="placeholder">Belum punya akun?</div>
        <div class="titleButton1">Daftar</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import InputGeneral from "@/components/input/InputGeneral";
import Close from "@/components/ui/CloseModal";
import Button from "@/components/ui/Button";

export default {
  name: "LoginModal",
  components: {
    Close,
    InputGeneral,
    Button,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const username = ref("");

    function login() {
      console.log("login");
    }

    return {
      ...toRefs(state),
      username,
      login,
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
  padding: 40px;
  background-color: var(--white);
  border-radius: 50px 50px 0px 0px;
}
</style>
