<template>
  <Base>
    <template #header>
      <div class="header-home-container">
        <div class="header-text-wrapper">
          <p class="header1">Hai, {{ namaUser }}</p>
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
          <SplideSlide></SplideSlide>
        </Splide>
      </div>
    </template>
  </Base>
</template>

<script>
import {ref} from "vue";
import Base from "@/components/ui/Base";
import InputSearch from "@/components/input/InputSearch";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "Home",
  components: {
    InputSearch,
    Base,
    Splide,
    SplideSlide
  },
  setup(){
    const splideOpt = {
      type   : 'loop',
      drag   : 'free',
      perPage: 3,
      arrows: false,
      pagination: false
    }

    const namaUser = ref("Amanda")
    const search = ref("")

    function searching() {
      console.log("hohohoho")
    }

    return {
      splideOpt,
      namaUser,
      search,
      searching
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