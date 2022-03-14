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
      <div class="form-input">
        <div class="input-data">
          <input type="text" />
          <label>Name</label>
        </div>
        <Button id="submit" placeholder="Ubah" @action="loginFunction()" />
      </div>
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
.form-input {
  padding: 20px;
}
.input-data input {
  border: none;
  width: 100%;
  border-bottom: 2px solid silver;
}
.input-data input:focus ~ label {
  transform: translateY(-20px);
  font-weight: 700;
}
.input-data label {
  position: absolute;
  transition: all 0.3s;
}
</style>
