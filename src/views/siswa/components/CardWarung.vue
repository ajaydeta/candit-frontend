<template>
  <div class="content-box-content">
    <div class="image-box">
      <div class="image-content">
        <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
      </div>
    </div>
    <div class="image-title">
      <p class="header3 dark-blue">{{ nama }}</p>
    </div>
    <div class="badge">
      <div class="title font-white">{{ jumlahMenu }} Menu</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWarung",
  props: {
    imgSrc: String,
    nama: String,
    jumlahMenu: Number,
  },
};
</script>

<style scoped>
.content-box-content {
  position: relative;
  width: 146px;
  height: 100%;

  background: var(--white);
  box-shadow: 4px 5px 25px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
}

.image-box .image-content {
  /* position: relative; */
  /* z-index: 1; */
  margin-top: 7px;
  width: 146px;
  height: 133px;
  left: 22px;
  top: 189px;
}

.content-box-content .image-title {
  margin: 0 10px 10px;
}

.badge {
  background-color: var(--secondary);
  border-radius: 20px 20px 20px 0;

  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 16px;
}
</style>
