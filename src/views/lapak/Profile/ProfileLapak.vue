<template>
  <Base menu-name="profile">
    <template #header>
      <div class="card-home-profile">
        <div class="image-container">
          <img src="@/assets/images/lapak/lapak.png" alt="" />
        </div>
        <div class="text-container">
          <div class="header1">Warung Lalapan Bu Sum</div>
          <div class="header2">25 Menu</div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="form-input">
        <label class="header2">Gambar Lapak</label>
        <input type="file" id="myfile" name="myfile" />
      </div>
    </template>
  </Base>
</template>

<script>
import Base from "@/components/ui/Base";
export default {
  name: "ProfileLapak",
  components: {
    Base,
  },
};
</script>

<style>
.card-home-profile {
  padding: 16px;
  border-radius: 20px;
  box-shadow: var(--drop-shadow);
  margin-bottom: 24px;
}
.form-input {
  text-align: left;
}
</style>
