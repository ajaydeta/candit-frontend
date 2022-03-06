<template>
<div class="nav-bottom-container">
  <div @click="toProfile" class="nav-bottom-item">
    <img v-if="profile" src="@/assets/icon/gg_profile-blue.svg" alt="profile">
    <img v-else src="@/assets/icon/gg_profile.svg" alt="profile">
  </div>
  <div @click="toHome" class="nav-bottom-item">
    <img v-if="home" src="@/assets/icon/home-blue.svg" alt="home">
    <img v-else src="@/assets/icon/home.svg" alt="home">
  </div>
  <div @click="toHistory" class="nav-bottom-item">
    <img v-if="history" src="@/assets/icon/history-blue.svg" alt="history">
    <img v-else src="@/assets/icon/history.svg" alt="history">
  </div>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
// import {useRouter} from "vue-router";

export default {
  name: "BottomNav",
  setup(){
    const navState = reactive({
      profile:false,
      home:true,
      history:false,
    })

    // const router = useRouter();

    function toHome() {
      // eslint-disable-next-line no-empty
      if (!navState.home){
        navState.profile = false
        navState.home = true
        navState.history = false

        // router.push("/home")
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