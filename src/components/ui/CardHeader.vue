<template>
  <div class="card-header">
    <div class="card-header-content">
      <div class="card-header-item">
        <div class="header5 font-dark-blue">{{ title }}</div>
        <div class="title mt-4px font-orange">{{ subtitle }}</div>
      </div>
      <div class="card-header-item" v-if="useRightDetail">
        <div class="description-menu font-orange">{{ rightDetailUp }}</div>
        <div class="title mt-4px">{{ rightDetailDown }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    title: String,
    subtitle: String,
    useRightDetail: Boolean,
    rightDetailUp: String,
    rightDetailDown: String
  }
}
</script>

<style scoped>
.card-header {
  padding: 12px 24px;
  border-radius: 20px;
  box-shadow: var(--drop-shadow);
}

.card-header-content {
  display: flex;
  justify-content: space-between;
}

.card-header-item:nth-child(1) {
  text-align: left;
}

.card-header-item:nth-child(2) {
  text-align: right;
}
</style>