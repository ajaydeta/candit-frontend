<template>
  <div class="container-home">
    <h1>Selamat Datang</h1>
    <div class="wrapper-image">
      <img src="@/assets/images/home-landing.svg" alt="" />
    </div>
    <div class="wrapper-bottom">
      <h5>Masuk sebagai</h5>
      <div class="wrapper-choise-user">
        <a href="" class="choice-user"></a>
        <a href="" class="choice-user"></a>
      </div>
    </div>
  </div>

  <LoginModal />
</template>

<script>
// @ is an alias to /src
import LoginModal from "./auth/components/loginModal.vue";

export default {
  name: "Home",
  components: {
    LoginModal,
  },
};
</script>

<style scoped>
.container-home {
  display: flex;
  flex-direction: column;
}

.wrapper-choise-user {
  display: flex;
}

.choice-user {
  width: 132px;
  height: 142px;
  border-radius: 30px;
  background-color: var(--tosca);
}
</style>