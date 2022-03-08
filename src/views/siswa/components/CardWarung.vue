<template>
<div class="card-warung">
  <div class="card-warung-content">
    <div class="card-warung-img-wrapper">
      <img src="@/assets/images/lalap.png" alt="lalap">
    </div>
    <div class="card-warung-text-wrapper">{{ nama }}</div>
    <div class="card-warung-badge">{{ jumlahMenu }} Menu</div>
  </div>
</div>
</template>

<script>
export default {
  name: "CardWarung",
  props:{
    imgSrc: String,
    nama: String,
    jumlahMenu: Number
  }
}
</script>

<style scoped>
.card-warung{
  width: 146px;
  height: 184px;
}

.card-warung-content{
  display: flex;
  flex-direction: row;
}
</style>