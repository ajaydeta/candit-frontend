import {createRouter, createWebHistory} from 'vue-router'
import SiswaRoutes from "@/router/siswaRoutes";
import AuthRoutes from "@/router/authRoutes";

const routes = [
    ...AuthRoutes,
    SiswaRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
