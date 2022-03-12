import SiswaBase from "@/views/siswa/SiswaBase";
import HomeSiswa from "@/views/siswa/HomeSiswa";
import MenuList from "@/views/siswa/MenuList";
import DetailOrder from "@/views/siswa/DetailOrder";
import HistoryOrder from "@/views/siswa/HistoryOrder";
import HistorySaldo from "@/views/siswa/HistorySaldo";

export default {
  path: "/siswa",
  component: SiswaBase,
  name: "SiswaBase",
  children: [
    {
      path: "",
      component: HomeSiswa,
      name: "HomeSiswa",
    },
    {
      path: "order",
      component: SiswaBase,
      name: "Order",
      children: [
        {
          path: "",
          component: MenuList,
          name: "MenuList",
        },
        {
          path: "detail",
          component: DetailOrder,
          name: "DetailOrder",
        },
      ],
    },
    {
      path: "riwayat",
      component: SiswaBase,
      name: "Riwayat",
      children: [
        {
          path: "",
          component: HistoryOrder,
          name: "HistoryOrder",
        },
        {
          path: "saldo",
          component: HistorySaldo,
          name: "HistorySaldo",
        },
      ],
    },
  ],
};
