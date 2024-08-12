<template>
  <v-card class="mb-2">
    <v-card-text class="flex justify-between items-center py-2">
      <div class="flex items-center">
        <v-avatar icon="mdi-ab-testing" size="small" color="secondary" />

        <div class="flex flex-col ms-2">
          <div class="text-lg font-weight-bold">
            {{ subCategory.name }}
          </div>
        </div>
      </div>

      <div class="flex gap-2">
        <v-btn-icon icon="mdi-pencil-outline" color="blue"> </v-btn-icon>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn-icon
              icon="mdi-trash-can-outline"
              color="error"
              @click="$emit('remove', subCategory.id)"
            ></v-btn-icon>
          </template>
          <span> لا يمكنك حذف الصنف لأنه يتعلق بمجموعة من العناصر </span>
        </v-tooltip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  subCategory: SubCategory;
}>();
</script>
