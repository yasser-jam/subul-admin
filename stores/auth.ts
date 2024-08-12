export const useAuthStore = defineStore('auth', () => {
    const token = useCookie('admin_access_token')
  
    const user = ref(initUser())
  
    const credentials = ref<{ email: string; password: string }>({
      email: '',
      password: ''
    })
  
    const login = async () => {
      const res = await api('login', {
        method: 'POST',
        body: JSON.stringify(credentials.value)
      })
  
      token.value = res.access_token
    }
  
    const me = async (): Promise<User> => {
      const res = await api('request.me')
    
      user.value = res.data
  
      return user.value
  }
  
    return {
      credentials,
      login,
      user,
      me
    }
  })
  