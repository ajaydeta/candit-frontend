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
import { onMounted, ref } from "vue";
import { useLoginStore } from "@/store";
import db from "@/config/firestore";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
  name: "Login",
  components: {
    LoginModal,
    RegistrasiModal,
  },
  setup() {
    const loginStore = useLoginStore();
    const showLoginModal = ref(false);
    const showRegistModal = ref(true);

    function openLoginModal(role) {
      loginStore.role = role;
      showLoginModal.value = true;
    }

    function closeLoginModal() {
      loginStore.$reset();
      showLoginModal.value = false;
    }

    function login() {
      console.log(loginStore.username);
      console.log(loginStore.password);

      localStorage.setItem("role", loginStore.role);
    }

    async function getCities(db) {
      const citiesCol = collection(db, "user");
      const citySnapshot = await getDocs(citiesCol);
      return citySnapshot.docs.map((doc) => doc.data());
    }

    onMounted(async () => {
      console.log(await getCities(db));
    });

    return {
      loginStore,
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