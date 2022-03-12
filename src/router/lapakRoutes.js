import HomeLapak from "@/views/lapak/Home/HomeLapak";
import DaftarPesanan from "@/views/lapak/Pesanan/DaftarPesanan";
import LapakBase from "@/views/lapak/LapakBase";

export default {
    path: "/lapak",
    name: "Lapak",
    component: LapakBase,
    children:[
        {
            path: "",
            name: "HomeLapak",
            component: HomeLapak,
        },
        {
            path: "daftar_pesanan",
            name: "DaftarPesanan",
            component: DaftarPesanan,
        }
    ]
}