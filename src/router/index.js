import { createRouter, createWebHistory } from "vue-router";
import SiswaRoutes from "@/router/siswaRoutes";
import AuthRoutes from "@/router/authRoutes";
import MenuList from "@/views/siswa/MenuList";
import DetailOrder from "@/views/siswa/DetailOrder";
import LapakRoutes from "@/router/lapakRoutes";

const routes = [
  ...AuthRoutes,
  SiswaRoutes,
  LapakRoutes,
  {
    path: "/MenuList",
    name: "Menulist",
    component: MenuList,
  },
  {
    path: "/DetailOrder",
    name: "DetailOrder",
    component: DetailOrder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
