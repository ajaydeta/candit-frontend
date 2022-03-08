<template>
  <div class="card-home" @click="$emit('onClick')">
    <div class="card-home-content">
      <div class="card-home-text">
        <div class="header3">{{ title }}</div>
        <div class="title font-orange">{{ subtitle }}</div>
      </div>
      <CevRight/>
    </div>
  </div>
</template>

<script>
import CevRight from "@/components/icons/CevRight";

export default {
  name: "CardHome",
  components: {
    CevRight
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
  }
}
</script>

<style scoped>
.card-home {
  border-radius: 20px;
  box-shadow: var(--drop-shadow);
  display: flex;
  align-items: center;
  padding: 16px 24px;
  margin-bottom: 10px;
}

.card-home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-home-text {
  text-align: left;
}
</style>