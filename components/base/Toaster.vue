<template>
    <v-snackbar
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      :timeout="3000"
      variant="tonal"
      :color="props.type"
      location="top left"
    >
      <slot></slot>
  
      <template v-slot:actions>
        <v-btn
          variant="plain"
          size="small"
          :color="props.type"
          icon
          @click="emit('update:modelValue', false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    type: { type: String, default: 'info' },
    modelValue: { type: Boolean, default: false }
  })
  
  const emit = defineEmits(['update:modelValue'])
  </script>
  
  <style>
  .v-snackbar--variant-tonal {
    background-color: white !important;
  }
  </style>
  