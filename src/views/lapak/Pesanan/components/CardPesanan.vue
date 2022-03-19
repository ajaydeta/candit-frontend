<template>
  <div class="card-pesanan w-100" @click="$emit('onCardAction')">
    <img class="card-pesanan-image" src="@/assets/images/lapak/lapak.png" alt="avatar"/>
    <div class="card-pesanan-wrapper">
      <div class="card-pesanan-deskripsi">
        <div class="header3">{{ title }}</div>
        <div class="header4 font-orange">{{ description1 }}</div>
        <div class="description-menu mt-6px">{{ description2 }}</div>
      </div>
      <div class="card-pesanan-action">
        <div>
          <div class="badge" v-if="badge">
            <div class="description-menu">{{ badge }}</div>
          </div>
        </div>
        <Button
            v-if="useAction"
            btnStyle="outline-primary"
            p="sm"
            placeholder="Detail"
            @action="$emit('onAction')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  name: "CardPesanan",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description1: {
      type: String,
      required: true
    },
    description2: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      required: false
    },
    useAction: Boolean
  },
}
</script>

<style scoped>
.card-pesanan {
  box-shadow: var(--drop-shadow);
  display: grid;
  grid-template-columns: 100px 1fr;
}

.card-pesanan-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 6px;
}

.card-pesanan-image {
  width: 100px;
}

.card-pesanan-deskripsi {
  text-align: left;
}

.badge {
  background-color: var(--secondary);
  border-radius: 20px;
  padding: 6px 12px;
  color: var(--white);
}

.card-pesanan-action {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>