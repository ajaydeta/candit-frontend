<template>
<div class="nav-bottom-container">
  <div @click="toProfile" class="nav-bottom-item">
    <Profile :is-blue="profile"/>
  </div>
  <div @click="toHome" class="nav-bottom-item">
    <Home :is-blue="home"/>
  </div>
  <div @click="toHistory" class="nav-bottom-item">
    <History :is-blue="history"/>
  </div>
  <div class="nav-bottom-item">
    <DaftarPesanan/>
  </div>
  <div class="nav-bottom-item">
    <MenuLapak/>
  </div>
  <div class="nav-bottom-item">
    <Saldo/>
  </div>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import Profile from "@/components/icons/Profile";
import Home from "@/components/icons/Home";
import History from "@/components/icons/History";
import MenuLapak from "@/components/icons/MenuLapak";
import Saldo from "@/components/icons/Saldo";
import DaftarPesanan from "@/components/icons/DaftarPesanan";

export default {
  name: "BottomNav",
  components: {
    Profile,
    Home,
    History,
    MenuLapak,
    Saldo,
    DaftarPesanan
  },
  setup(){
    const navState = reactive({
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

</style>