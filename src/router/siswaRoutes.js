import HomeSiswa from "@/views/siswa/HomeSiswa";

export default {
    path: "/siswa",
    component: HomeSiswa,
    name: 'HomeSiswa',
    children: [
        {
            path: "/profile",
        }
    ]
}