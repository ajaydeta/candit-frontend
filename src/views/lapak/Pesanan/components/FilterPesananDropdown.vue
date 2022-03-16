<template>
  <div class="filter-wrapper">
    <div class="content-wrapper" @click="action">
      <div class="filter-icon">
        <Filter
          color="primary"
        />
      </div>
      <div class="header2">Filter</div>
    </div>
    <div class="modal-filter-wrapper" v-if="child">
      <div @click="select(0)" :class="{active: selected === 0}" class="modal-filter-item placeholder text-left">Semua
      </div>
      <div @click="select(1)" :class="{active: selected === 1}" class="modal-filter-item placeholder text-left">Belum
        disiapkan
      </div>
      <div @click="select(2)" :class="{active: selected === 2}" class="modal-filter-item placeholder text-left">Sedang
        disiapkan
      </div>
      <div @click="select(3)" :class="{active: selected === 3}" class="modal-filter-item placeholder text-left">Siap
        diambil
      </div>
      <div @click="select(4)" :class="{active: selected === 4}" class="modal-filter-item placeholder text-left">
        Dibatalkan
      </div>
      <div @click="select(5)" :class="{active: selected === 5}" class="modal-filter-item placeholder text-left">Pesanan
        sudah diterima
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "@/components/icons/Filter";
import {ref} from "vue";

export default {
  name: "FilterPesananDropdown",
  components: {
    Filter,
  },
  setup(props, {emit}) {
    const selected = ref(0)
    const child = ref(false)

    function action() {
      child.value = !child.value
    }

    function select(val) {
      selected.value = val
      emit("onSelect", val)
    }

    return {
      child,
      selected,
      action,
      select
    }
  }
}
</script>

<style scoped>
.filter-wrapper {
  position: relative;
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.modal-filter-wrapper {
  position: absolute;
  background-color: var(--white);
  box-shadow: var(--drop-shadow);
  padding: 8px;
  right: 0;
  width: 180px;
}

.modal-filter-item {
  width: 100%;
  padding: 4px 0;
}

.modal-filter-item:not(:nth-last-child(1)) {
  border-bottom: 1px solid var(--gray);
}

.active {
  background-color: #f76d6d;
}
</style>