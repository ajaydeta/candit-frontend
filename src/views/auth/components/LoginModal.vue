<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="header-container">
        <a @click="$emit('onClose')" id="closeModal"></a>
        <p class="header1 dark-blue">Masuk</p>
      </div>
      <form class="form">
        <InputGeneral
          id="user"
          placeholder="Nama pengguna"
          v-model:val="loginStore.username"
          :val="username"
        />
        <InputPassword
          id="password"
          placeholder="Password"
          v-model:val="loginStore.password"
          :val="password"
        />
        <Button id="submit" placeholder="Masuk" @action="loginFunction()" />
        <template v-if="loginStore.role == 'siswa'">
          <div class="placeholder">Belum punya akun?</div>
          <div class="titleButton1" @click="$emit('onDaftar')">Daftar</div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputGeneral from "@/components/input/InputGeneral";
import Button from "@/components/ui/Button";
import InputPassword from "@/components/input/InputPassword";
import { useLoginStore } from "@/store/loginStore";

export default {
  name: "LoginModal",
  components: {
    InputPassword,
    InputGeneral,
    Button,
  },
  props: {
    loginFunction: Function,
  },
  setup() {
    const username = ref("");
    const password = ref("");

    const loginStore = useLoginStore();

    return {
      username,
      password,
      loginStore,
    };
  },
};
</script>

<style scoped src="./styleScoped.css"></style>
