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
          <div class="box-image">
            <img src="@/assets/images/lapak/lapak.png" />
          </div>
          <div class="box-title">
            <p class="header3 dark-blue">
              Lalapan Tempe + Nasi <font class="header3 orange">Rp 30.000</font>
            </p>
            <p class="quantity dark-blue">2 Porsi</p>
            <p class="header4 dark-blue">Sambal tidak pedas</p>
            <Button
              id="submit"
              placeholder="Hapus"
              btn-style="outline-danger"
              p="sm"
            />
          </div>
        </div>
      </div>
      <div class="payment">
        <p class="price">Total Pembayaran : Rp 30.000</p>
        <Button id="submit" placeholder="Bayar" @action="loginFunction()" />
      </div>
    </template>
  </Base>
</template>
<script>
import { ref } from "vue";
import Base from "@/components/ui/Base";
import Button from "@/components/ui/Button";
export default {
  name: "DetailOrder",
  components: {
    Button,
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
.box-title p {
  padding-top: 5px;
  padding-right: 8px;
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
  margin-right: 10px;
  width: 81px;
  height: 77px;
  float: left;
}
.payment {
  margin-top: 30px;
  margin-left: 30px;
  float: right;
}
Button {
  float: right;
}
</style>
