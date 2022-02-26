<template>
  <div class="container-home">
    <div class="header1 dark-blue">Selamat Datang</div>
    <div class="wrapper-image">
      <img src="@/assets/images/home-landing.svg" alt="" />
    </div>
    <div class="wrapper-bottom">
      <div class="header2 dark-blue">Masuk sebagai</div>
      <div class="wrapper-choise-user">
        <a href="" class="choice-user">
          <img src="@/assets/images/siswa.svg" alt="" />
          <div class="text header2 blue">SISWA</div>
        </a>
        <a href="" class="choice-user"
          ><img src="@/assets/images/lapak.svg" alt="" />
          <div class="text header2 blue">LAPAK</div>
        </a>
      </div>
    </div>
  </div>

  <LoginModal />
</template>
<script>
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
  margin-top: 90px;
  margin-bottom: 10px;
}

.wrapper-image img {
  padding: 20px;
}

.wrapper-bottom {
  margin: 30px;
  margin-top: 20px;
}

.wrapper-choise-user {
  display: flex;
  padding: 10px;
}

.choice-user {
  width: 132px;
  height: 142px;
  background-color: var(--tosca);
  margin: 10px auto;
  border-radius: 30px;
}

.choice-user img {
  width: 70%;
  margin-top: 10px;
}

.choice-user .text {
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
