<template>
  <Base>
    <template #header>
      <div class="header-home-container">
        <div class="header-text-wrapper">
          <p class="header2">Detail Pesanan</p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="menu-content">
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
              <button class="discount-button" type="button">DISKON</button>
            </p>
          </div>
          <div class="box-image">
            <img src="@/assets/images/lapak/lapak.png" alt="avatar" />

            <p class="title dark-blue">2 Porsi dipesan</p>
            <button type="button">Pesan</button>
          </div>
        </div>
      </div>
    </template>
  </Base>
</template>
<script>
import { ref } from "vue";
import Base from "@/components/ui/Base";
export default {
  name: "DetailOrder",
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
.header-text-wrapper {
  text-align: left;
}
.menu-content {
  text-align: left;
}
.box-title p font {
  padding-top: 10px;
  padding-left: 8px;
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
.box-image img {
  padding-bottom: 10px;
  margin: 0%;
  width: 81px;
  height: 77px;
  float: right;
}
.box-order {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 300px;
  height: 26px;
}

.hr {
  margin: 10px;
  width: 10px;
  height: 0px;

  /* grey */

  border: 1px solid #d0d0d0;
}
button {
  width: 85px;
  height: 22px;
  left: 237px;
  top: 236px;

  /* dark-blue */
  background: #ffffff;
  border: 1px solid #24305e;
  box-sizing: border-box;
  border-radius: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 118%;
  /* identical to box height, or 13px */

  /* dark-blue */

  color: #24305e;
}
.discount-button {
  margin-left: 15px;
  width: 80px;
  height: 20px;
  left: 237px;
  top: 236px;

  /* dark-blue */
  background: #f76d6d;
  border: none;
  box-sizing: border-box;
  border-radius: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 118%;
  /* identical to box height, or 13px */

  /* dark-blue */

  color: #ffffff;
}
</style>
