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
            <p class="description-menu dark-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="price dark-blue">
              Rp 15.000
              <font class="discount">Rp 19.000</font>
              <font class="title blue">Diskon </font>
            </p>
            <hr />
            <p class="price">2 Porsi dipesan</p>
          </div>
          <div class="box-image">
            <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
          </div>
          <div class="box-order"></div>
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
  box-shadow: var(--drop-shadow);
  border-radius: 20px;
}
.header-menu-wrapper {
  text-align: left;
}
.header-image-wrapper img {
  margin: 0%;
  /* padding: 10px; */
  float: right;
  text-align: left;
  width: 81px;
  height: 77px;
  /* width: 20%; */
}
.menu-content {
  text-align: left;
}
.menu-box {
  height: 100% auto;
  display: flex;
  margin: 10px auto;
  padding: 10px;
  background: #ffffff;
  box-shadow: var(--drop-shadow);
  border-radius: 20px;
}
.box-title font {
  padding: 10px;
}
.button-discount {
  margin-top: 20px;
  width: 265px;
  height: 40px;
  left: 44px;
  top: 399px;
  background: #24305e;
  border: 0px;
  border-radius: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  color: #ffffff;
}

.box-image img {
  margin: 0%;
  width: 81px;
  height: 77px;
  float: right;
}
.hr {
  display: block;
  border: none;
  height: 0px;
  /* grey */

  border: 1px solid #d0d0d0;
}
</style>
