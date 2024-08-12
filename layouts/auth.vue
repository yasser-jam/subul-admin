<template>
    <v-app dir="rtl">
      <st-toaster v-model="showToaster" :type="toasterType">
        <div v-for="message in messages">
          {{ message }}
        </div>
      </st-toaster>
  
      <v-main key="login-main">
        <div class="h-full flex items-center">
          <NuxtPage />
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia'
  
  const toasterStore = useToasterStore()
  const { showToaster, messages, toasterType } = storeToRefs(toasterStore)
  </script>
  <style scoped>
  .v-application {
    background: #3D6186;
    background: radial-gradient(
      circle,
      #598dc2 25%,
      #7fb3e7 60%
    );
  }
  </style>
  