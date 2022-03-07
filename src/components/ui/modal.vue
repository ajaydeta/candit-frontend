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
export default {
  name: "modal"
}
</script>

<style scoped>

</style>