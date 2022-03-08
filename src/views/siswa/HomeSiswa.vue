<template>
  <Base>
    <template #header>
      <div class="header-home-container">
        <div class="header-text-wrapper">
          <p class="header1">C-Pay : {{ useRupiah(saldo) }}</p>
          <p class="header2">Mau makan apa hari ini ?</p>
        </div>
        <div class="header-image-wrapper">
          <img src="@/assets/images/avatar1.png" alt="avatar">
        </div>
      </div>
    </template>
    <template #content>
      <InputSearch
          id="search"
          :val="search"
          :do-searching="searching"
          v-model:val="search"
      />
      {{search}}

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
  setup(){
    const splideOpt = {
      type   : 'slide',
      drag   : 'free',
      perPage: 3,
      arrows: false,
      pagination: true,
      padding: { left: 10, right: 20 },
      fixedWidth: "10rem"
    }

    const saldo = ref("55500")
    const search = ref("")

    function searching() {
      console.log("hohohoho")
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
.header-home-container{
  display: flex;
  justify-content: space-between;
}
.header-text-wrapper{
  text-align: left;
}
</style>