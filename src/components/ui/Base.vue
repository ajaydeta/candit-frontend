<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
  <BottomNav
      :menu-name="menuName"
  />
</template>

<script>
import BottomNav from "@/components/ui/NavMenu/BottomNav";

export default {
  name: "Base",
  components: {BottomNav},
  props: {
    menuName: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.container {
  padding: 25px 22px 0 22px;
}
</style>