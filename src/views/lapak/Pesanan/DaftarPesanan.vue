<template>
  <Base>
    <template #header>
      <CardHeader
          title="Daftar Pesanan"
          subtitle="3 Transaksi perlu disiapkan"
      />
    </template>
    <template #content>
      <InputSelect/>
      <CardPesanan
          v-for="pembelian in pembelianStore.dataList"
          :key='pembelian.idpembelian'

          :title="pembelian.idpembelian"
          :description1="pembelianStore.getStatusPembelian(pembelian.idpembelian)"
          :description2="'Dibuat: ' + useFormatDate(pembelian.waktu)"
          :use-action="true"
          :badge="pembelian.jumlahMenu + ' Menu'"
          @onAction="action"
      />
    </template>
  </Base>
</template>

<script>
import Base from "@/components/ui/Base";
import CardHeader from "@/components/ui/CardHeader";
import CardPesanan from "@/views/lapak/Pesanan/components/CardPesanan";
import InputSelect from "@/components/input/InputSelect";
import {useRouter} from "vue-router";
import {useFormatDate} from "@/helpers"
import {usePembelianStore} from "@/store"

export default {
  name: "DaftarPesanan",
  components: {
    InputSelect,
    CardPesanan,
    Base,
    CardHeader
  },
  methods: {
    getStatusPembelian(idpembelian){
      return this.pembelianStore.getStatusPembelian(idpembelian);
    }
  },
  setup() {
    const router = useRouter();
    const pembelianStore = usePembelianStore();
    pembelianStore.dataList["TRX0000001"] = {
      idpembelian: "TRX0000001",
      waktu: 1647359726000,
      statusPembelian: 1,
      jumlahMenu: 3
    };

    pembelianStore.dataList["TRX0000002"] = {
      idpembelian: "TRX0000002",
      waktu: 1647359726000,
      statusPembelian: 2,
      jumlahMenu: 4
    };

    pembelianStore.dataList["TRX0000003"] = {
      idpembelian: "TRX0000003",
      waktu: 1647359726000,
      statusPembelian: 3,
      jumlahMenu: 3
    };

    pembelianStore.dataList["TRX0000004"] = {
      idpembelian: "TRX0000004",
      waktu: 1647359726000,
      statusPembelian: 4,
      jumlahMenu: 33
    };

    pembelianStore.dataList["TRX0000005"] = {
      idpembelian: "TRX0000005",
      waktu: 1647359726000,
      statusPembelian: 5,
      jumlahMenu: 31
    };

    function action() {
      router.push({
        name: 'DetailPesanan',
        params: {
          idpembelian: 'TRX0000001'
        }
      })
    }

    return {
      action,
      pembelianStore,
      useFormatDate
    }
  }
}
</script>

<style scoped>

</style>