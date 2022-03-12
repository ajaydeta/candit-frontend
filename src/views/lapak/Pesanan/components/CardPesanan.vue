<template>
  <div class="card-pesanan w-100">
    <img class="card-pesanan-image" src="@/assets/images/lapak/lapak.png" alt="avatar"/>
    <div class="card-pesanan-wrapper">
      <div class="card-pesanan-deskripsi">
        <div class="header3">TRX12345678901234</div>
        <div class="description-menu mt-6px">02-01-2022, 00:00</div>
        <div class="header4 font-orange">Belum Disiapkan</div>
      </div>
      <div class="card-pesanan-action">
        <div class="badge">
          <div class="description-menu">5 Menu</div>
        </div>
        <Button
            btnStyle="outline-primary"
            p="sm"
            placeholder="Detail"
            @action="action"
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
  setup() {
    function action() {
      console.log("asasdasdasd")
    }

    return {
      action
    }
  }
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