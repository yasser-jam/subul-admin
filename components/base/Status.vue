<template>
    <v-chip :color="data.color">{{ data.title }}</v-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: 'pending' | 'active' | 'cloused' | 'in_progress' | 'done';
}>();

const data = computed(() => {
  switch (props.status) {
    case 'pending':
      return {
        color: 'warning',
        title: 'قيد الانتظار',
      };

    case 'active':
      return {
        color: 'secondary',
        title: 'مفعل',
      };

    case 'cloused':
      return {
        color: 'gray',
        title: 'ملغى',
      };

    case 'in_progress':
      return {
        color: 'blue',
        title: 'جار الآن',
      };

    case 'done':
      return {
        color: 'success',
        title: 'منته',
      };

    default:
      return {
        color: 'blue',
        title: 'جار العمل',
      };
  }
});
</script>
