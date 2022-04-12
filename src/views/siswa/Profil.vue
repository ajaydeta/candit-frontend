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
        <p class="formLabel">Email</p>
        <input
          type="email"
          name="email"
          id="email"
          class="form-style"
          autocomplete="off"
        />
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

<style scoped></style>
