import { defineStore } from 'pinia'

export const useMyUserStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    username: '',
    email: '',
    isClient: false,
    image: '',
    isLogged: false
  }),
  actions: {
    setUser(username: string, email: string, isClient: boolean, image: string) {
      this.username = username
      this.email = email
      this.isClient = isClient
      this.image = image
      this.isLogged = true
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('isClient', isClient.toString())
      localStorage.setItem('image', image)
      localStorage.setItem('isLogged', 'true')
    },
    clearUser() {
      this.username = ''
      this.email = ''
      this.isClient = false
      this.image = ''
      this.isLogged = false
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isClient')
      localStorage.removeItem('image')
      localStorage.removeItem('isLogged')
    }
  }
})
