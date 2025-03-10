import { defineStore } from 'pinia'

export const useMyCuponStore = defineStore({
  id: 'myCuponStore',
  state: () => ({
    cuponCode: '',
    cuponId: 0,
    exist: false
  }),
  actions: {
    setCupon(cuponCode: string, cuponId: number) {
      this.cuponCode = cuponCode
      this.cuponId = cuponId
      this.exist = true
    },
    clearCupon() {
      this.cuponCode = ''
      this.cuponId = 0
      this.exist = false
    }
  }
})
