import SiswaBase from "@/views/siswa/SiswaBase";
import HomeSiswa from "@/views/siswa/HomeSiswa";
import MenuList from "@/views/siswa/MenuList";
import DetailOrder from "@/views/siswa/DetailOrder";

export default {
    path: "/siswa",
    component: SiswaBase,
    name: 'SiswaBase',
    children: [
        {
            path: "",
            component: HomeSiswa,
            name: 'HomeSiswa',
        },
        {
            path: "order",
            component: SiswaBase,
            name: 'Order',
            children: [
                {
                    path: "menu-list",
                    component: MenuList,
                    name: 'MenuList',
                },
                {
                    path: "detail",
                    component: DetailOrder,
                    name: 'DetailOrder',
                }
            ]
        },
    ]
}