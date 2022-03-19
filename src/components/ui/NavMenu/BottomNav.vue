<template>
  <div class="nav-bottom-container" :class="role === 'siswa' ? 'grid-row-4' : 'grid-row-5'">
    <div class="nav-bottom-item" @click="action('home')" :class="{active: menuName === 'home'}">
      <House :color="menuName === 'home' ? 'primary' : 'gray'"/>
      Beranda
    </div>
    <div class="nav-bottom-item" @click="action('pesanan')" :class="{active: menuName === 'pesanan'}">
      <ShoppingBag :color="menuName === 'pesanan' ? 'primary' : 'gray'"/>
      Pesanan
    </div>
    <div class="nav-bottom-item" @click="actionToSide" v-if="role !== 'siswa'">
      <div class="nav-botom-menu-action">
        <Hamburger
            v-if="!menuSide"
            :size="28"
            color="white"
        />
        <Close
            v-else
            color="white"
            :size="28"
        />
      </div>
    </div>
    <div class="nav-bottom-item" @click="action('saldo')" :class="{active: menuName === 'saldo'}">
      <CreditCard :color="menuName === 'saldo' ? 'primary' : 'gray'"/>
      Saldo
    </div>
    <div class="nav-bottom-item" @click="action('profile')" :class="{active: menuName === 'profile'}">
      <User :color="menuName === 'profile' ? 'primary' : 'gray'"/>
      Profile
    </div>
  </div>
  <div id="slide-menu" class="menu-side-container animate__animated animate__fadeInUpBig" v-if="menuSide">
    <div class="side-bar-menu"></div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

import House from "@/components/icons/House";
import ShoppingBag from "@/components/icons/ShoppingBag";
// import Notebook from "@/components/icons/Notebook";
import CreditCard from "@/components/icons/CreditCard";
import User from "@/components/icons/User";
// import Clock from "@/components/icons/Clock";
import Hamburger from "@/components/icons/Hamburger";
import {ref} from "vue";
import Close from "@/components/icons/Close";

export default {
  name: "BottomNav",
  components: {
    Close,
    // Clock,
    User,
    CreditCard,
    // Notebook,
    ShoppingBag,
    House,
    Hamburger
  },
  props: {
    menuName: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const menuSide = ref(false)
    const role = localStorage.getItem("role")
    const router = useRouter();

    function actionToSide() {
      if (menuSide.value) {
        let wrapp = document.getElementById("slide-menu");
        wrapp.classList.remove("animate__fadeInUpBig");
        wrapp.classList.add("animate__fadeOutDownBig");
        setTimeout(() => {
          menuSide.value = !menuSide.value
        }, 400);
      } else {
        menuSide.value = !menuSide.value
      }
    }

    function action(name) {
      switch (name) {
        case "home":
          if (props.menuName !== "home") {
            switch (role) {
              case "siswa":
                router.push({name: "HomeSiswa"});
                break;
              case "lapak":
                router.push({name: "HomeLapak"});
                break;
            }
          }
          break;
        case "pesanan":
          if (props.menuName !== "pesanan") {
            switch (role) {
              case "siswa":
                router.push({name: "HistoryOrder"});
                break;
              case "lapak":
                router.push({name: "ListPesanan"});
                break;
            }
          }
          break;
      }
    }

    return {
      role,
      menuSide,
      action,
      actionToSide
    }
  }
}
</script>

<style scoped>
.nav-bottom-container {
  display: grid;
  align-items: center;

  height: 58px;
  width: 100vw;
  background-color: var(--white);

  position: absolute;
  bottom: 0;
  z-index: 9999;

  box-shadow: 0 -2px 15px rgba(0, 0, 0, .15);

}

.grid-row-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-row-5 {
  grid-template-columns: repeat(5, 1fr);
}

.nav-bottom-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  font-size: 10px;
  color: var(--gray);
}

.active {
  color: var(--primary);
}

.nav-botom-menu-action {
  background-color: var(--secondary);
  border-radius: 50%;
  padding: 12px;

  display: flex;
  align-items: center;
  border: 5px solid var(--white);
  position: relative;
  top: -17px;
}

.nav-botom-menu-text {
  position: relative;
  top: -17px;
  height: 10px;
}

.menu-side-container {
  background-color: var(--white);
  height: 100%;
  max-width: 390px;
  position: fixed;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  overflow: auto;
}

</style>