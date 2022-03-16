<template>
  <div class="card-home" @click="$emit('onClick')">
    <div class="card-home-content">
      <div class="card-home-text">
        <div class="header3">{{ title }}</div>
        <div class="title font-orange">{{ subtitle }}</div>
      </div>
      <Cev
        hex-color="#000000"
      />
    </div>
  </div>
</template>

<script>
import Cev from "@/components/icons/Cev";

export default {
  name: "CardHome",
  components: {
    Cev,
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