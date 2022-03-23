<template>
  <div
    class="side-item-menu-container"
    @click="
      state.children && state.children.length > 0
        ? openChild('Children' + state.title.replace(' ', ''))
        : navigate(state.route)
    "
  >
    <div class="main-container">
      <div class="main-side-menu">
        <component
          :is="state.icon"
          v-bind="{ color: 'gray' }"
          v-if="state.icon"
        ></component>
        <div class="side-text-menu">{{ state.title }}</div>
      </div>
      <Cev
        :rotate-deg="90"
        color="primary"
        v-if="state.children && state.children.length > 0"
      />
    </div>
    <div
      :id="'Children' + state.title.replace(' ', '')"
      class="children-container"
      v-if="state.children && state.children.length > 0"
    >
      <div class="main-side-menu" v-for="(child, i) in state.children" :key="i">
        <CevDuo />
        <div class="side-text-menu" @click="navigate(child.route)">
          {{ child.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cev from "@/components/icons/Cev";
import CevDuo from "@/components/icons/CevDuo";
import ChartLine from "@/components/icons/ChartLine";
import Clock from "@/components/icons/Clock";
import Close from "@/components/icons/Close";
import CreditCard from "@/components/icons/CreditCard";
import Filter from "@/components/icons/Filter";
import Hamburger from "@/components/icons/Hamburger";
import House from "@/components/icons/House";
import Notebook from "@/components/icons/Notebook";
import SearchMagnifyingGlass from "@/components/icons/SearchMagnifyingGlass";
import ShoppingBag from "@/components/icons/ShoppingBag";
import User from "@/components/icons/User";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  name: "SideMenuItem",
  components: {
    Cev,
    CevDuo,
    ChartLine,
    Clock,
    Close,
    CreditCard,
    Filter,
    Hamburger,
    House,
    Notebook,
    SearchMagnifyingGlass,
    ShoppingBag,
    User,
  },
  props: {
    state: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const childOpen = ref(false);
    const router = useRouter();

    function navigate(route) {
      console.log(route);
      router.push(route);
    }

    function openChild(id) {
      let el = document.getElementById(id);
      if (el.classList.contains("show")) {
        el.classList.remove("show");
      } else {
        el.classList.add("show");
      }
    }

    return {
      childOpen,
      navigate,
      openChild,
    };
  },
};
</script>

<style scoped>
.side-item-menu-container {
  align-items: center;
  width: 100%;

  padding: 12px;
  border-bottom: 0.2px solid var(--gray);
}

.side-text-menu {
  font-size: 16px;
  padding-left: 12px;
}

.main-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.main-side-menu {
  display: flex;
}
.children-container {
  padding: 12px 0 0 12px;
  display: none;
}
.show {
  display: block;
}
</style>