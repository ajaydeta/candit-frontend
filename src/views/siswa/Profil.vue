<template>
  <Base>
    <template #header>
      <CardProfil />
    </template>
    <template #content>
      <div class="form-item">
        <p class="header2 dark-blue">Nomor Induk Siswa (NIS)</p>
        <input type="text" name="nis" id="nis" class="header2 dark-blue" />
        <p class="header2 dark-blue">Nama Pengguna</p>
        <input type="text" name="nis" id="nis" class="header2 dark-blue" />
        <p class="header2 dark-blue">Email</p>
        <input type="email" name="nis" id="nis" class="header2 dark-blue" />
        <p class="header2 dark-blue">Password</p>
        <input type="password" name="nis" id="nis" class="header2 dark-blue" />
      </div>
      <Button
        class="mt-28px"
        id="submit"
        placeholder="Ubah"
        :long="true"
        @action="loginFunction()"
      />
    </template>
  </Base>
</template>

<script>
import Base from "@/components/ui/Base";
import CardProfil from "@/views/siswa/components/CardProfil";
import Button from "@/components/ui/Button";

export default {
  name: "HomeSiswa",
  components: {
    Base,
    CardProfil,
    Button,
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
