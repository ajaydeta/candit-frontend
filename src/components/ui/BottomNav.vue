<template>
<div class="nav-bottom-container">
  <div class="nav-bottom-item" >
    <House/>
    Beranda
  </div>
  <div class="nav-bottom-item">
    <ChartLine/>
    Beranda
  </div>
  <div class="nav-bottom-item">
    <ShoppingBag/>
    Pesanan
  </div>
  <div class="nav-bottom-item">
    <Notebook/>
    Menu
  </div>
  <div class="nav-bottom-item">
    <CreditCard/>
    Saldo
  </div>
  <div class="nav-bottom-item">
    <User/>
    Profile
  </div>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";

import ChartLine from "@/components/icons/ChartLine";
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
    ChartLine,
  },
  setup(){
    const navState = reactive({
      color: "#d0d0d0",

      profile:false,
      home:true,
      history:false,
    })

    const role = localStorage.getItem("role")
    const router = useRouter();

    function toHome() {
      // eslint-disable-next-line no-empty
      if (!navState.home){
        navState.profile = false
        navState.home = true
        navState.history = false

        router.push("/home-siswa")
      }
    }

    function toProfile() {
      // eslint-disable-next-line no-empty
      if (!navState.profile){
        navState.profile = true
        navState.home = false
        navState.history = false

        // router.push("/profile")
      }
    }

    function toHistory() {
      // eslint-disable-next-line no-empty
      if (!navState.history){
        navState.profile = false
        navState.home = false
        navState.history = true

        // router.push("/history")
      }
    }

    return{
      role,
      ...toRefs(navState),
      toHome,
      toProfile,
      toHistory
    }
  }
}
</script>

<style scoped>
.nav-bottom-container{
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
  color: v-bind(color);
}

</style>