<template>
  <div class="modal">
    <div class="modal-dialog">
      <a id="closeModal"></a>
      <div class="header1 dark-blue">Masuk</div>
      <form class="form">
        <InputGeneral id="user" placeholder="Nama pengguna" v-model:val="loginStore.username" :val="username" />
        <InputPassword id="password" placeholder="Password" v-model:val="loginStore.password" :val="password" />
        <Button id="submit" placeholder="Masuk" @action="login()" />
        <div class="placeholder">Belum punya akun?</div>
        <div class="titleButton1">Daftar</div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputGeneral from "@/components/input/InputGeneral";
import Button from "@/components/ui/Button";
import InputPassword from "@/components/input/InputPassword";
import {useLoginStore} from "@/store/loginStore"

export default {
  name: "LoginModal",
  components: {
    InputPassword,
    InputGeneral,
    Button,
  },
  setup() {

    const username = ref("")
    const password = ref("")

    const loginStore = useLoginStore();
    // loginStore.$patch

    function login() {
      console.log(loginStore.username);
      console.log(loginStore.password);
    }

    return {
      username,
      password,
      loginStore,
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
