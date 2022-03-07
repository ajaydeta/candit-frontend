<template>
  <div class="container-home">
    <div class="header1 dark-blue">Selamat Datang</div>
    <div class="wrapper-image">
      <img src="@/assets/images/home-landing.svg" alt=""/>
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

  <LoginModal v-if="showLoginModal" @onClose="closeLoginModal"/>
</template>
<script>
import LoginModal from "../auth/components/loginModal.vue";
import {ref} from "vue";
import {useLoginStore} from "@/store";

export default {
  name: "Login",
  components: {
    LoginModal,
  },
  setup() {
    const loginStore = useLoginStore();
    const showLoginModal = ref(false)

    function openLoginModal(role) {
      loginStore.role = role
      showLoginModal.value = true
    }

    function closeLoginModal() {
      loginStore.$reset()
      showLoginModal.value = false
    }

    return {
      loginStore,
      showLoginModal,
      openLoginModal,
      closeLoginModal
    }
  }
};
</script>
<style scoped src="./styleScoped.css"/>