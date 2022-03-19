<template>
  <Base menu-name="pesanan">
    <template #header>
      <CardHeader
          title="Daftar Pesanan"
          subtitle="3 Transaksi perlu disiapkan"
      />
    </template>
    <template #content>
      <div class="action-page-wrapper mt-12px">
        <InputSearch
            class="mr-8px"
            id="search"
            placeholder="Cari Nomor Nota"
            :val="search"
            :do-searching="searching"
            v-model:val="search"
        />

        <FilterPesananDropdown
            @onSelect="filterSelect"
        />
      </div>
      <div class="mt-28px">
        <CardPesanan
            v-for="pembelian in pembelianStore.dataList"
            :key='pembelian.idpembelian'

            :title="pembelian.idpembelian"
            :description1="pembelianStore.getStatusPembelian(pembelian.idpembelian)"
            :description2="'Dibuat: ' + useFormatDate(pembelian.waktu)"
            :badge="pembelian.jumlahMenu + ' Menu'"
            @onCardAction="action(pembelian.idpembelian)"
        />
      </div>
    </template>
  </Base>
</template>

<script>
import Base from "@/components/ui/Base";
import CardHeader from "@/components/ui/CardHeader";
import CardPesanan from "@/views/lapak/Pesanan/components/CardPesanan";


import {useRouter} from "vue-router";
import {useFormatDate} from "@/helpers"
import {usePembelianStore} from "@/store"
import InputSearch from "@/components/input/InputSearch";
import {ref} from "vue";
import FilterPesananDropdown from "@/views/lapak/Pesanan/components/FilterPesananDropdown";

export default {
  name: "DaftarPesanan",
  components: {
    FilterPesananDropdown,
    InputSearch,
    CardPesanan,
    Base,
    CardHeader
  },
  methods: {
    getStatusPembelian(idpembelian) {
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

    function action(idpembelian) {
      router.push({
        name: 'DetailPesanan',
        params: {
          idpembelian: idpembelian
        }
      })
    }

    const search = ref("")

    function searching() {
      console.log("hohohoho");
    }

    function filterSelect(val) {
      console.log(val)
    }

    return {
      action,
      pembelianStore,
      useFormatDate,
      search,
      searching,
      filterSelect
    }
  }
}
</script>

<style scoped>
.action-page-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>