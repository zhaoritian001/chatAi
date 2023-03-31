/**
 * @Author: 赵东升
 * @Date: 2023/2/23
 */
import { defineStore} from "pinia";

export const mainStore = defineStore('main', {
    state: () => {
       return {
           msg: '66666666'
       }
    },
    getters: {},
    actions: {
        changeMsg () {
            this.msg = '88888888'
        }
    }
})