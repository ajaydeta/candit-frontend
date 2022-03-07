import {defineStore} from 'pinia'

const state = () => ({
        role: "",
        username: "",
        password: ""
    })

export const useLoginStore = defineStore("login", {
    state
})
