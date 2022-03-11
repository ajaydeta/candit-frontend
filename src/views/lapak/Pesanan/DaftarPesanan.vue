<template>
<Base>
  <template #header>
    <CardHeader
      title="Daftar Pesanan"
      subtitle="3 Transaksi perlu disiapkan"
    />
  </template>
  <template #content>
    <CardPesanan/>
  </template>
</Base>
</template>

<script>
import Base from "@/components/ui/Base";
import CardHeader from "@/components/ui/CardHeader";
import CardPesanan from "@/views/lapak/Pesanan/components/CardPesanan";

export default {
  name: "DaftarPesanan",
  components: {
    CardPesanan,
    Base,
    CardHeader
  }

}
</script>

<style scoped>

</style>