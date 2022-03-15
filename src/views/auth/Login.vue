<template>
  <div class="container-home">
    <div class="header1 dark-blue">Selamat Datang</div>
    <div class="wrapper-image">
      <img src="@/assets/images/home-landing.svg" alt="" />
    </div>
    <div class="wrapper-bottom">
      <div class="header2 dark-blue">Masuk sebagai</div>
      <div class="wrapper-choise-user">
        <div class="choice-user" @click="openLoginModal('siswa')">
          <img src="@/assets/images/siswa.svg" alt="" />
          <div class="text header2 blue">SISWA</div>
        </div>
        <div class="choice-user" @click="openLoginModal('lapak')">
          <img src="@/assets/images/lapak.svg" alt="" />
          <div class="text header2 blue">LAPAK</div>
        </div>
      </div>
    </div>
  </div>

  <LoginModal
    v-if="showLoginModal"
    :login-function="login"
    @onClose="closeLoginModal"
  />

  <RegistrasiModal v-if="showRegistModal" />
</template>
<script>
import LoginModal from "./components/LoginModal.vue";
import RegistrasiModal from "./components/RegistrasiModal.vue";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/store";
// import { useToast } from "@/helpers";
// import db from "@/config/firestore";
// import { collection, getDocs } from "firebase/firestore/lite";
// import {Registrasi} from '@/controller/auth'

export default {
  name: "Login",
  components: {
    LoginModal,
    RegistrasiModal,
  },
  setup() {
    const store = useAuthStore();
    const showLoginModal = ref(false);
    const showRegistModal = ref(true);

    function openLoginModal(role) {
      store.role = role;
      showLoginModal.value = true;
    }

    function closeLoginModal() {
      store.$reset();
      showLoginModal.value = false;
    }

    function login() {
      console.log(store.username);
      console.log(store.password);

      localStorage.setItem("role", store.role);
    }

    // async function getCities(db) {
    //   const citiesCol = collection(db, "user");
    //   const citySnapshot = await getDocs(citiesCol);
    //   return citySnapshot.docs.map((doc) => doc.data());
    // }

    onMounted(() => {
      // useToast('hokk')
      // console.log(this.$moshaToast('Hmm..not as easy huh'))
    });

    return {
      store,
      showLoginModal,
      openLoginModal,
      closeLoginModal,
      login,
      showRegistModal,
    };
  },
};
</script>
<style scoped src="./styleScoped.css"/>