import {createRouter, createWebHistory} from "vue-router";
import SiswaRoutes from "@/router/siswaRoutes";
import AuthRoutes from "@/router/authRoutes";
import LapakRoutes from "@/router/lapakRoutes";

const routes = [
    AuthRoutes,
    SiswaRoutes,
    LapakRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
