<template>
  <Base>
    <template #header>
      <CardHeader
          :title="idpembelian"
          subtitle="2 Menu"
          :use-right-detail="true"
          right-detail-up="02-01-2022, 00:00"
          right-detail-down="Siap diambil"
      />
    </template>
    <template #content>
      <div class="header3 text-left">Pesanan</div>
      <CardPesanan
        title="Lalapan Tempe + Nasi"
        description1="Rp 30.000"
        description2="Sambal tidak pedas"
        badge="2 Porsi"
      />
    </template>
  </Base>
</template>

<script>
import Base from '@/components/ui/Base'
import CardHeader from "@/components/ui/CardHeader";
import CardPesanan from "@/views/lapak/Pesanan/components/CardPesanan";

import {useRoute} from "vue-router";
export default {
  name: "DetailPesanan",
  components: {
    Base,
    CardHeader,
    CardPesanan
  },
  setup(){
    const route = useRoute();
    const idpembelian = route.params.idpembelian;

    return {
      idpembelian
    }
  }
}
</script>

<style scoped>

</style>