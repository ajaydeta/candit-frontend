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
            <ButtonDanger
              id="submit"
              placeholder="Hapus"
              @action="loginFunction()"
            />
          </div>
        </div>
      </div>
      <div class="payment">
        <div class="total">
          <p class="price">
            Total Pembayaran : Rp 30.000
            <ButtonConfirm
              id="submit"
              placeholder="Bayar"
              @action="loginFunction()"
            />
          </p>
        </div>
      </div>
    </template>
  </Base>
</template>
<script>
import { ref } from "vue";
import Base from "@/components/ui/Base";
import ButtonDanger from "@/views/siswa/components/ButtonDanger";
import ButtonConfirm from "@/views/siswa/components/ButtonConfirm";
import Button from "@/components/ui/Button";
export default {
  name: "DetailOrder",
  components: {
    Button,
    Base,
    ButtonDanger,
    ButtonConfirm,
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
  text-align: left;
}
</style>
