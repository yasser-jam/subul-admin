<template>
    <v-dialog
      :model-value="true"
      transition="fade-transition"
      @click:outside="emit('close')"
    >
      <v-card :loading="loading" :disabled="loading" class="overflow-y-auto">
        <template #loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="primary"
            height="2"
            indeterminate
          />
        </template>
  
        <v-icon-btn
          icon="mdi-close"
          variant="plain"
          position="absolute"
          location="top left"
          class="mt-2"
          style="z-index: 99999"
          color="gray-lighten-2"
          @click="emit('close')"
        />
        <slot></slot>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup lang="ts">
  import { useMagicKeys } from '@vueuse/core'
  
  defineProps({
    loading: { type: Boolean, default: false }
  })
  
  const emit = defineEmits(['close'])
  
  const { escape } = useMagicKeys()
  
  watch(
    () => escape.value,
    e => {
      if (e) emit('close')
    }
  )
  </script>
  
  <style scoped></style>
  