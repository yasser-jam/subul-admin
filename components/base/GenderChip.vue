<template>
  <v-chip :color="data.color">{{ data.title }}</v-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  gender: 'male' | 'female' | 'unknown';
}>();

const data = computed(() => {
  switch (props.gender) {
    case 'male':
      return {
        color: 'blue',
        title: 'ذكر',
      };

    case 'female':
      return {
        color: 'pink',
        title: 'أنثى',
      };
      
    default:
      return {
        color: 'pink',
        title: 'أنثى',
      };
  }
});
</script>
