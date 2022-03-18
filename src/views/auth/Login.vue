<template>
  <div class="container-home">
    <div class="header1 dark-blue">Hai, selamat datang</div>
    <div class="wrapper-image">
      <LottieAnimation
          class="lottie-login"
          path="lottie/landing.json"
          :speed="1"
          :loop="true"
          :autoPlay="true"

          :width="300"
      />
    </div>
    <div class="wrapper-bottom">
      <div class="header2 dark-blue">Masuk sebagai</div>
      <div class="wrapper-choise-user">
        <div class="choice-user" @click="openLoginModal('siswa')">
          <img src="@/assets/images/siswa.svg" alt=""/>
          <div class="text header2 blue">SISWA</div>
        </div>
        <div class="choice-user" @click="openLoginModal('lapak')">
          <img src="@/assets/images/lapak.svg" alt=""/>
          <div class="text header2 blue">LAPAK</div>
        </div>
      </div>
    </div>
  </div>

  <LoginModal
      v-if="showLoginModal"
      :login-function="login"
      @onClose="closeLoginModal"
      @onDaftar="openRegistModal"
  />

  <RegistrasiModal v-if="showRegistModal" @onClose="closeRegistModal" @onMasuk="closeRegistModal"/>
</template>
<script>
import LoginModal from "./components/LoginModal.vue";
import RegistrasiModal from "./components/RegistrasiModal.vue";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

import {ref} from "vue";
import {useAuthStore} from "@/store";
import {useRouter} from "vue-router";

export default {
  name: "Login",
  components: {
    LoginModal,
    RegistrasiModal,
    LottieAnimation
  },
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const showLoginModal = ref(false);
    const showRegistModal = ref(false);

    function openLoginModal(role) {
      store.role = role;
      showLoginModal.value = true;
    }

    function closeLoginModal() {
      store.$reset();
      showLoginModal.value = false;
    }

    function openRegistModal() {
      showLoginModal.value = false;
      showRegistModal.value = true;
    }

    function closeRegistModal() {
      let roleTemp = store.role
      store.$reset();
      store.role = roleTemp
      showLoginModal.value = true;
      showRegistModal.value = false;
    }

    function login() {
      console.log(store.username);
      console.log(store.password);

      switch (store.role) {
        case "siswa":
          router.push({name: "HomeSiswa"});
          break;
        case "lapak":
          router.push({name: "HomeLapak"});
          break;
      }

      localStorage.setItem("role", store.role);
    }

    return {
      store,
      showLoginModal,
      openLoginModal,
      closeLoginModal,
      login,
      showRegistModal,
      openRegistModal,
      closeRegistModal,
    };
  },
};
</script>
<style scoped src="./styleScoped.css"/>