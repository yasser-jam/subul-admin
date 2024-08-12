<template>
    <v-dialog max-width="400" transition="fade-transition">
      <v-card :loading="loading" :disabled="loading">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="error"
            height="2"
            indeterminate
          />
        </template>
  
        <v-card-text class="d-flex flex-column align-center">
          <v-icon class="text-h2 mb-4" color="error">
            mdi-alert-circle-outline
          </v-icon>
  
          <div class="text-h6 font-weight-bold">هل أنت متأكد</div>
  
          <div class="text-center">
            انت على وشك حذف {{ item }}. لا يمكنك الاستعادة مرة أخرى
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            variant="tonal"
            color="grey-200"
            @click="$emit('update:model-value', false)"
          >
            الغاء
          </v-btn>
  
          <v-btn
            variant="flat"
            color="error"
            @click="$emit('delete')"
            :loading="loading"
          >
            حذف
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup lang="ts">
  const { item } = defineProps({
    item: { type: String, default: 'العنصر' },
    loading: { type: Boolean, default: false },
    buttonOfDialog: { type: String }
  })
  </script>
  