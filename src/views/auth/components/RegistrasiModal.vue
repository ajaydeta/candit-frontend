<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="header-container">
        <a @click="$emit('onClose')" id="closeModal"></a>
        <p class="header1 dark-blue">Daftar</p>
      </div>
      <form class="form">
        <InputDigit
            id="nis"
            placeholder="NIS"
            :max-length="5"
            @input="updateInput"
        />
        <InputGeneral
            id="email"
            placeholder="Email"
            v-model:val="authStore.email"
        />
        <InputPassword
            v-model:val="password"
            id="pass"
            placeholder="Kata Sandi"
        />
        <InputPassword
            v-model:val="password2"
            id="pass2"
            placeholder="Konfirmasi Kata Sandi"
        />
        <Button id="submit" placeholder="Masuk" @action="registrasi()"/>
      </form>
      <div class="placeholder">Sudah punya akun?</div>
      <div class="titleButton1">Masuk</div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {useAuthStore} from "@/store";
import {useToast} from "@/helpers";

import InputGeneral from "@/components/input/InputGeneral";
import InputDigit from "@/components/input/InputDigit";
import InputPassword from "@/components/input/InputPassword";
import Button from "@/components/ui/Button";

export default {
  name: "RegistrasiModal",
  components: {
    InputPassword,
    InputDigit,
    InputGeneral,
    Button,
  },
  setup() {
    const password = ref("");
    const password2 = ref("");
    const authStore = useAuthStore();

    async function registrasi() {
      if (password.value !== password2.value) {
        useToast("Password harus sama!", "danger")
        password2.value = ""
      } else {
        authStore.password = password.value
      }
      await authStore.registerSiswa();
    }

    function updateInput(val) {
      authStore.nis = val
    }


    return {
      registrasi,
      password,
      password2,
      updateInput,
      authStore
    };
  },
};
</script>

<style scoped src="./styleScoped.css"></style>

