<template>
  <Base>
    <template #header>
      <CardProfil
        img-src="lalap.png"
        :jumlah-menu="5"
        nama="Warung Lalapan Bu Sum"
      />
    </template>
    <template #content>
      <div class="form-item">
        <p class="header2 dark-blue">Nomor Induk Siswa (NIS)</p>
        <input type="nis" name="nis" id="nis" class="header2 dark-blue" />
        <p class="header2 dark-blue">Nama Pengguna</p>
        <input type="nis" name="nis" id="nis" class="header2 dark-blue" />
      </div>
    </template>
  </Base>
</template>

<script>
import Base from "@/components/ui/Base";
import CardProfil from "@/views/siswa/components/CardProfil";
// import Button from "@/components/ui/Button";

export default {
  name: "HomeSiswa",
  components: {
    Base,
    CardProfil,
    // Button,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.form-item {
  text-align: left;
  margin-top: 20px;
}
.form-item input {
  margin-bottom: 5px;
  border-radius: 0%;
  border: none;
  border-bottom: 1px solid grey;
  padding-left: 5px;
  width: 100%;
}
</style>
