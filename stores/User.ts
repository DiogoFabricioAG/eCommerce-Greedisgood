import { defineStore } from 'pinia'

export const useMyUserStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    username: '',
    email: '',
    isClient: false,
    image: '',
    isLogged: false,
    slug: ''
  }),
  actions: {
    setUser(username: string, email: string, isClient: boolean, image: string, slug: string) {
      this.username = username
      this.email = email
      this.isClient = isClient
      this.image = image
      this.isLogged = true
      this.slug = slug
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('isClient', isClient.toString())
      localStorage.setItem('image', image)
      localStorage.setItem('isLogged', 'true')
      localStorage.setItem('slug', slug)
    },
    refreshUser() {
      this.username = localStorage.getItem('username') || ''
      this.email = localStorage.getItem('email') || ''
      this.isClient = localStorage.getItem('isClient') ? true : false
      this.image = localStorage.getItem('image') || ''
      this.isLogged = localStorage.getItem('isLogged') ? true : false
      this.slug = localStorage.getItem('slug') || ''
    },
    clearUser() {
      this.username = ''
      this.email = ''
      this.isClient = false
      this.image = ''
      this.isLogged = false
      this.slug = ''
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isClient')
      localStorage.removeItem('image')
      localStorage.removeItem('isLogged')
      localStorage.removeItem('slug')
    }
  }
})
