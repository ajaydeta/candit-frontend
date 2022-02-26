<template>
  <div class="container">
    <div class="header1 dark-blue">Daftar</div>
    <div class="form">
      <InputGeneral @input="nis" id="user" placeholder="Nomor Induk Siswa" />
      <InputGeneral @input="email" id="user" placeholder="Email" />
      <InputGeneral @input="password" id="user" placeholder="Kata Sandi" />
      <InputGeneral
        @input="password"
        id="user"
        placeholder="Konfirmasi Kata Sandi"
      />
      <Button id="submit" placeholder="Masuk" @action="login()" />
      <div class="placeholder">Sudah punya akun?</div>
      <div class="titleButton1">Masuk</div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
import InputGeneral from "@/components/input/InputGeneral";
import Button from "@/components/ui/Button";

export default {
  components: {
    InputGeneral,
    Button,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const username = ref("");
  },
};
</script>
<style scoped>
.container {
  padding: 30px;
}
</style>
