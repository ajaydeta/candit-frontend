<template>
  <div class="content-box-content">
    <div class="image-content">
      <img src="@/assets/images/avatar1.png" alt="avatar" />
    </div>
    <div class="image-title">
      <p class="header1 dark-blue">Amanda Fadila</p>
      <p class="header2 dark-blue">C-Pay : Rp 50.000</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProfil",
  props: {
    imgSrc: String,
  },
};
</script>

<style scoped>
.content-box-content {
  position: relative;
  height: 100%;
  padding: 30px;

  background: var(--white);
  box-shadow: var(--drop-shadow);
  border-radius: 20px;
}
.image-content img {
  width: 40%;
}
</style>
