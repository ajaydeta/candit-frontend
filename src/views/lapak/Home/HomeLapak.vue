<template>
  <Base menu-name="home">
    <template #header>
      <div class="card-home-profile">
        <div class="image-container">
          <img src="@/assets/images/lapak/lapak.png" alt="">
        </div>
        <div class="text-container">
          <div class="header1">Warung Lalapan Bu Sum</div>
          <div class="header2 font-orange" @click="cardAction">Kunjungi profil</div>
        </div>
      </div>
    </template>
    <template #content>
      <CardHome
          title="Daftar Pesanan"
          subtitle="3 Pesanan baru • 5 Belum diambil"
          @onClick="toDaftarPesanan"
      />
      <CardHome
          title="Kelola Menu dan Diskon"
          subtitle="26 Menu dilapakmu. Ayo tambah!"
          @onClick="cardAction"
      />
      <CardHome
          title="Saldo Lapak"
          subtitle="Rp 599.000,-"
          @onClick="cardAction"
      />
      <CardHome
          title="Daftar Pesanan"
          @onClick="cardAction"
      />
    </template>
  </Base>
</template>

<script>
import {useRouter} from "vue-router";

import Base from "@/components/ui/Base";
import CardHome from "@/views/lapak/Home/components/CardHome";

export default {
  name: "HomeLapak",
  components: {
    CardHome,
    Base
  },
  setup() {
    const router = useRouter();

    function cardAction() {
      console.log('clookk')
    }

    function toDaftarPesanan() {
      router.push({name: 'ListPesanan'})
    }

    return {
      cardAction,
      toDaftarPesanan
    }
  }
}
</script>

<style scoped>
.card-home-profile {
  padding: 16px;
  border-radius: 20px;
  box-shadow: var(--drop-shadow);
  margin-bottom: 24px;
}
</style>