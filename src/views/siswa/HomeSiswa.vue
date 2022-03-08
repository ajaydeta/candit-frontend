<template>
  <Base>
    <template #header>
      <div class="header-home-container">
        <div class="header-text-wrapper">
          <p class="header2">C-Pay : {{ useRupiah(saldo) }}</p>
          <p class="header4 orange">Cek Riwayat</p>
        </div>
        <div class="header-image-wrapper">
          <img src="@/assets/images/avatar1.png" alt="avatar" />
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
        <p class="header3 dark-blue">14 Warung di sekolahmu. Buruan order!</p>
      </div>
      <div>
        <Splide :options="splideOpt">
          <SplideSlide>
            <CardWarung
              img-src="lalap.png"
              :jumlah-menu="5"
              nama="Warung Lalapan Bu Sum"
            />
          </SplideSlide>
        </Splide>
      </div>
    </template>
  </Base>
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css';

import {ref} from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import {useRupiah} from "@/helpers"

import Base from "@/components/ui/Base";
import InputSearch from "@/components/input/InputSearch";
import CardWarung from "@/views/siswa/components/CardWarung";

export default {
  name: "HomeSiswa",
  components: {
    InputSearch,
    Base,
    Splide,
    SplideSlide,
    CardWarung
  },
  setup() {
    const splideOpt = {
      type   : 'slide',
      drag   : 'free',
      perPage: 3,
      arrows: false,
      pagination: false,
      padding: { left: 10, right: 20 },
      fixedWidth: "10rem"
    }

    const saldo = ref("55500")
    const search = ref("")

    function searching() {
      console.log("hohohoho");
    }

    return {
      splideOpt,
      saldo,
      search,
      searching,
      useRupiah
    }
  }
}
</script>

<style scoped>
.header-home-container {
  display: flex;
  justify-content: space-between;
}
.header-text-wrapper {
  padding: 10px;
  text-align: left;
}
</style>