<template>
  <Base>
    <template #header>
      <div class="header-home-container">
        <div class="header-image">
          <img src="@/assets/images/avatar1.png" alt="avatar" />
        </div>
        <div class="header-text">
          <p class="header2">Riwayat Pemesanan</p>
        </div>
      </div>
    </template>
    <template #content>
      <InputSearch
        id="search"
        placeholder="Cari Makanan Favoritmu..."
        :val="search"
        :do-searching="searching"
        v-model:val="search"
      />
      {{ search }}

      <div class="content-box-title">
        <p class="header3 dark-blue">Belum Diambil</p>
      </div>
      <div class="box-ordered">
        <div class="order-title">
          <p class="header3 dark-blue">Lapak Bu Sri</p>
          <p class="quantity dark-blue">2 Porsi</p>
          <p class="header4 dark-blue">Siap Diambil</p>
        </div>
        <div class="order-info">
          <p class="header3 grey">Id Transaksi</p>
          <p class="header3 grey">20/01/2021, 12.12</p>
          <Button
            id="submit"
            placeholder="AMBIL"
            btn-style="outline-primary"
            p="sm"
            @action="loginFunction()"
          />
        </div>
      </div>
      <div class="content-box-title">
        <p class="header3 dark-blue">Sudah Diambil</p>
      </div>
      <div class="box-ordered">
        <div class="order-title">
          <p class="header3 dark-blue">Lapak Bu Sri</p>
          <p class="quantity dark-blue">2 Porsi</p>
          <p class="header4 dark-blue">Siap Diambil</p>
        </div>
        <div class="order-info">
          <p class="header3 grey">Id Transaksi</p>
          <p class="header3 grey">20/01/2021, 12.12</p>
        </div>
      </div>
    </template>
  </Base>
</template>

<script>
import "@splidejs/splide/dist/css/splide.min.css";

import { useRupiah } from "@/helpers";

import Base from "@/components/ui/Base";
import Button from "@/components/ui/Button";
import InputSearch from "@/components/input/InputSearch";

export default {
  name: "HistoryOrder",
  components: {
    InputSearch,
    Base,
    Button,
  },
  setup() {
    function searching() {
      console.log("hohohoho");
    }

    return {
      searching,
      useRupiah,
      Button,
    };
  },
};
</script>

<style scoped>
.header-home-container {
  display: flex;
}
.header-image img {
  padding: 10px;
  float: right;
}
.header-text {
  padding: 10px;
  text-align: left;
  align-items: center;
  display: flex;
}
.content-box-title {
  text-align: left;
  margin-top: 10px;
}
.box-ordered {
  display: flex;
  justify-content: space-between;

  margin-top: 5px;
  text-align: left;
  width: 312px;
  height: 100%;
  padding: 10px;

  background: #ffffff;
  box-shadow: 4px 5px 25px rgba(0, 0, 0, 0.06);
}
.order-title p {
  margin-top: 5px;
}
.order-info {
  margin-top: 5px;
  text-align: right;
}
.order-info p {
  text-align: right;
}
</style>
