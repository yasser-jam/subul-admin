<template>
  <div class="flex flex-col items-center justify-center my-8">
    <v-icon color="primary" size="4rem">mdi-magnify</v-icon>

    <div class="text-primary text-2xl">لا يوجد {{ name ?? 'عناصر' }}</div>

    <slot name="subtitle" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
