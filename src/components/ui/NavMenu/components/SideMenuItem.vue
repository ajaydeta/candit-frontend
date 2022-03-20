<template>
  <div class="side-item-menu-container">
    <div class="side-icon-menu">
      <Notebook 
      />
    </div>
    <div class="side-text-menu">Pesanan</div>
  </div>
</template>

<script>
import Notebook from "@/components/icons/Notebook";
export default {
  name: "SideMenuItem",
  components: {
    Notebook,
  },
};
</script>

<style>
</style>