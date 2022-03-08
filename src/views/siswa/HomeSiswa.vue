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
      <div class="content-box-container">
        <div class="content-box-title">
          <p class="header3 dark-blue">14 Warung di sekolahmu. Buruan order!</p>
        </div>
        <div class="content-box-content">
          <div class="image-box">
            <div class="image-content">
              <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
            </div>
          </div>
          <div class="image-title">
            <p class="header3 dark-blue">Warung Lalapan Bu sum</p>
          </div>
        </div>

        <div class="content-box-content">
          <div class="image-box">
            <div class="image-content">
              <img src="@/assets/images/lapak/lapak.png" alt="avatar" />
            </div>
          </div>

          <div class="image-title">
            <p class="header3 dark-blue">Warung Lalapan Bu sum</p>
          </div>
        </div>
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

.content-box-container {
  content: "";
  display: table;
  clear: both;
  padding: 5px;
  margin-top: 20px;
  text-align: left;
}

.content-box-content {
  float: left;
  margin-left: 10px;
  width: 146px;
  height: 100%;
  left: 22px;
  top: 195px;

  background: #ffffff;
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
  margin: 10px;
  margin-top: 0px;
}
</style>