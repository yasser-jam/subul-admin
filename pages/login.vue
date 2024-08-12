<template>
    <v-container>
      <v-row class="justify-center">
        <v-card class="px-8 py-4">
          <v-card-text>
            <Form v-slot="{ errors }" @submit="login">
              <v-img src="/images/logo.png" class="mx-12 w-[200px] mb-8" />
  
              <base-label>الإيميل</base-label>
  
              <Field
                v-model="credentials.email"
                name="email"
                rules="required|email"
                v-slot="{ field }"
              >
                <v-text-field
                  v-bind="field"
                  type="email"
                  placeholder="ادخل الإيميل"
                  :error-messages="errors.email"
                />
              </Field>
  
              <base-label>كلمة المرور</base-label>
  
              <Field
                v-model="credentials.password"
                name="password"
                rules="required"
                v-slot="{ field }"
              >
                <v-text-field
                  v-bind="field"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="أدخل كلمة المرور"
                  :error-messages="errors.password"
                >
                  <template #append-inner>
                    <v-icon
                      @click="showPassword = !showPassword"
                      class="cursor-pointer"
                      >{{
                        showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                      }}</v-icon
                    >
                  </template>
                </v-text-field>
              </Field>
  
              <v-btn type="submit" block class="mt-4" :loading="loginBtnLoading">
                تسجيل الدخول
              </v-btn>
            </Form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    name: 'تسجيل الدخول',
    layout: 'auth'
  })
  
  // define stores
  const authStore = useAuthStore()
  
  const showPassword = ref(false)
  
  // Buttons loading
  const loginBtnLoading = ref(false)
  
  const { credentials } = storeToRefs(authStore) 
  
  const login = async () => {
    // start loader
    loginBtnLoading.value = true
  
    try {
      await authStore.login()
  
      const { user } = storeToRefs(authStore)

      navigateTo('/')
  
    } catch {}
  
    // hide loader
    loginBtnLoading.value = false
  }
  </script>
  
  <style scoped></style>
  