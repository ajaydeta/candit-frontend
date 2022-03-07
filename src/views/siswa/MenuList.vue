<template>
  <Base>
    <template #header>
      <div class="header-menu-container">
        <div class="header-menu-wrapper">
          <p class="header2 dark-blue">Warung Lalapan Bu Sum</p>
          <p class="header4 dark-blue">2 Makanan dipilih</p>
          <p class="titleButton2 orange">Lihat Detail</p>
        </div>
        <div class="header-image-wrapper">
          <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="menu-content">
        <div class="menu-header">
          <p class="header3 dark-blue">Lalapan + Nasi</p>
        </div>
        <div class="menu-box">
          <div class="box-title">
            <p class="header3 dark-blue">Lalapan Tempe + Nasi</p>
            <p class="description-menu dark-blue">Lorem mmmmmmmmmmmmm</p>
            <p class="price dark-blue">
              Rp 15.000
              <font class="discount">Rp 19.000</font>
              <font class="button-discount title white">Diskon </font>
            </p>
          </div>
          <div class="header-image-wrapper">
            <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
          </div>
          <div class="box-order">adscx</div>
        </div>
      </div>
    </template>
  </Base>
</template>
<script>
import { ref } from "vue";
import Base from "@/components/ui/Base";
export default {
  name: "MenuList",
  components: {
    Base,
  },
  setup() {
    const splideOpt = {
      type: "loop",
      drag: "free",
      perPage: 3,
      arrows: false,
      pagination: false,
    };

    const namaUser = ref("Amanda");
    const search = ref("");

    function searching() {
      console.log("hohohoho");
    }

    return {
      splideOpt,
      namaUser,
      search,
      searching,
    };
  },
};
</script>
<style scoped>
.header-menu-container {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;

  background: #ffffff;
  box-shadow: 4px 5px 25px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
}
.header-menu-wrapper {
  text-align: left;
}
.header-image-wrapper img {
  margin: 0%;
  /* padding: 10px; */
  text-align: left;
  width: 81px;
  height: 77px;
  /* width: 20%; */
}
.menu-content {
  text-align: left;
}
.menu-box {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  background: #ffffff;
  box-shadow: 4px 5px 25px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
}
.box-title font {
  padding: 20px;
}
.button-discount {
  width: 51px;
  height: 15px;

  /* orange */

  background: #f76d6d;
  border-radius: 20px;
}

.box-image {
  width: 85px;
  height: 83px;
  left: 238px;
  top: 143px;

  border-radius: 20px;
}
.menu-box .box-order {
  width: 310px;
  height: 0px;
  left: 22px;
  top: 231px;
  float: center;
  /* grey */

  border: 1px solid #d0d0d0;
}
</style>
