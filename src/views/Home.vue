<template>
  <div class="container-home">
    <div class="header1 dark-blue">Selamat Datang</div>
    <div class="wrapper-image">
      <img src="@/assets/images/home-landing.svg" alt="" />
    </div>
    <div class="wrapper-bottom">
      <div class="header2 dark-blue">Masuk sebagai</div>
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
  margin-top: 100px;
}

.wrapper-image img {
  padding: 20px;
}

.wrapper-bottom {
  margin-top: 20px;
}

.wrapper-choise-user {
  display: flex;
}

.choice-user {
  width: 132px;
  height: 142px;
  background-color: var(--tosca);
  margin: 5px auto;
  border-radius: 30px;
}
</style>
