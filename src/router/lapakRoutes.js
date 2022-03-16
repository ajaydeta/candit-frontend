import HomeLapak from "@/views/lapak/Home/HomeLapak";
import DaftarPesanan from "@/views/lapak/Pesanan/DaftarPesanan";
import LapakBase from "@/views/lapak/LapakBase";
import DetailPesanan from "@/views/lapak/Pesanan/DetailPesanan";

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
            path: "pesanan",
            name: "Pesanan",
            component: LapakBase,
            children:[
                {
                    path: "list_pesanan",
                    name: "ListPesanan",
                    component: DaftarPesanan,
                },
                {
                    path: "detail_pesanan/:idpembelian",
                    name: "DetailPesanan",
                    component: DetailPesanan,
                }
            ]
        },
    ]
}