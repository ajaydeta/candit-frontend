<template>
  <div class="modal">
    <div class="modal-dialog">
      <a id="closeModal"></a>
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
import Button from "@/components/ui/Button";

export default {
  name: "LoginModal",
  components: {
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

<style scoped src="./styleScoped.css"></style>
<style scoped>
#closeModal {
  content: url("../../../assets/icon/close.svg");
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
}
</style>
