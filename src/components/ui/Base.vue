<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
  <BottomNav/>
</template>

<script>
import BottomNav from "@/components/ui/BottomNav";

export default {
  name: "Base",
  components: {BottomNav}
}
</script>

<style scoped>
.container{
  padding: 25px 22px 0 22px;
}
</style>