export default defineNuxtRouteMiddleware((to, from) => {

    if (to.path.includes('login')) return

    // get token from cookie
    const token = useCookie('admin_access_token')

    if (!token.value) {
        return navigateTo('/login')
    }
  })