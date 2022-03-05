import {defineStore} from 'pinia'

const state = () => ({
        username: "",
        password: ""
    })

export const useLoginStore = defineStore("login", {
    state
})
