<template>
  <div class="nav-bottom-container">
    <div class="nav-bottom-item" @click="action('home')" :class="{active: menuName === 'home'}">
      <House :color="menuName === 'home' ? 'primary' : 'gray'"/>
      Beranda
    </div>
    <div class="nav-bottom-item" @click="action('pesanan')" :class="{active: menuName === 'pesanan'}">
      <ShoppingBag :color="menuName === 'pesanan' ? 'primary' : 'gray'"/>
      Pesanan
    </div>
    <div class="nav-bottom-item" @click="action('menu')" :class="{active: menuName === 'menu'}" v-if="role === 'lapak'">
      <Notebook :color="menuName === 'menu' ? 'primary' : 'gray'"/>
      Menu
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
</template>

<script>
import {useRouter} from "vue-router";

import House from "@/components/icons/House";
import ShoppingBag from "@/components/icons/ShoppingBag";
import Notebook from "@/components/icons/Notebook";
import CreditCard from "@/components/icons/CreditCard";
import User from "@/components/icons/User";

export default {
  name: "BottomNav",
  components: {
    User,
    CreditCard,
    Notebook,
    ShoppingBag,
    House,
  },
  props: {
    menuName: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const role = localStorage.getItem("role")
    const router = useRouter();

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
      action
    }
  }
}
</script>

<style scoped>
.nav-bottom-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 58px;
  width: 100vw;
  background-color: var(--white);

  position: absolute;
  bottom: 0;

  box-shadow: 0 -2px 15px rgba(0, 0, 0, .15);
}

.nav-bottom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: var(--gray);
}

.active {
  color: var(--primary);
}

</style>