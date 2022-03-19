<template>
  <Base menu-name="pesanan">
    <template #header>
      <CardHeader
          :title="idpembelian"
          subtitle="2 Menu"
          :use-right-detail="true"
          right-detail-up="02-01-2022, 00:00"
          :right-detail-down="getStatusTransaksi()"
      />
    </template>
    <template #content>
      <div class="action-wrapper mt-12px">
        <div class="header3 text-left">Pesanan</div>
        {{ pembelianStore.statusPembelian }}
        <Button
            v-if="pembelianStore.statusPembelian <= 3"
            :placeholder="getButtonText()"
            p="xsm"
            btn-style="outline-primary"
        />
      </div>
      <div class="mt-12px">
        <CardPesanan
            title="Lalapan Tempe + Nasi"
            description1="Rp 30.000"
            description2="Sambal tidak pedas"
            badge="2 Porsi"
        />
      </div>
    </template>
  </Base>
</template>

<script>
import Base from '@/components/ui/Base'
import CardHeader from "@/components/ui/CardHeader";
import CardPesanan from "@/views/lapak/Pesanan/components/CardPesanan";
import Button from "@/components/ui/Button";

import {useRoute} from "vue-router";
import {usePembelianStore} from "@/store";

export default {
  name: "DetailPesanan",
  components: {
    Base,
    CardHeader,
    CardPesanan,
    Button
  },
  methods: {
    getButtonText() {
      switch (this.pembelianStore.dataDetail.statusPembelian) {
        case 1:
          return "Siapkan pesanan";
        case 2:
          return "Siap diambil";
        case 3:
          return "Ambil pesanan";
      }
    },
    getStatusTransaksi() {
      return this.pembelianStore.getStatusPembelianDetail();
    }
  },
  setup() {
    const route = useRoute();
    const idpembelian = route.params.idpembelian;

    const pembelianStore = usePembelianStore();
    pembelianStore.dataDetail = {
      idpembelian: "TRX0000001",
      waktu: 1647359726000,
      statusPembelian: 2,
      jumlahMenu: 3
    }

    return {
      idpembelian,
      pembelianStore
    }
  }
}
</script>

<style scoped>
.action-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>