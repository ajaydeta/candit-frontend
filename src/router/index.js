import {createRouter, createWebHistory} from 'vue-router'
import SiswaRoutes from "@/router/siswaRoutes";
import AuthRoutes from "@/router/authRoutes";
import MenuList from "@/views/siswa/MenuList";
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
