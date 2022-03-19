import {defineStore} from 'pinia'

const state = () => ({
    dataList: {},
    dataDetail: {},
    listMenuDipesan: {}
})

const actions = {
    getStatusPembelian(idpembelian) {
        if (!this.dataList[idpembelian]) {
            return "Invalid Data"
        }

        switch (this.dataList[idpembelian].statusPembelian) {
            case 1 :
                return "Belum disiapkan";
            case 2 :
                return "Sedang disiapkan";
            case 3 :
                return "Siap diambil";
            case 4 :
                return "Dibatalkan";
            case 5 :
                return "Pesanan sudah diterima";
        }
    },
    getStatusPembelianDetail() {
        switch (this.dataDetail.statusPembelian) {
            case 1 :
                return "Belum disiapkan";
            case 2 :
                return "Sedang disiapkan";
            case 3 :
                return "Siap diambil";
            case 4 :
                return "Dibatalkan";
            case 5 :
                return "Pesanan sudah diterima";
        }
    }
}

export const usePembelianStore = defineStore("pembelianStore", {
    state,
    actions
})