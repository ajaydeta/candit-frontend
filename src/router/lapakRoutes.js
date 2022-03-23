import LapakBase from "@/views/lapak/LapakBase";
import HomeLapak from "@/views/lapak/Home/HomeLapak";
import DaftarPesanan from "@/views/lapak/Pesanan/DaftarPesanan";
import DetailPesanan from "@/views/lapak/Pesanan/DetailPesanan";
import ProfileLapak from "@/views/lapak/Profile/ProfileLapak";

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
        {
            path: "profile",
            name: "Profile",
            component: ProfileLapak,
        }
    ]
}