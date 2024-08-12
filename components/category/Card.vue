<template>
  <v-card class="mt-4 mb-2">
    <v-card-text class="flex justify-between items-center">
      <v-row class="items-center">
        <v-col cols="3">
          <div class="flex items-center">
            <v-avatar icon="mdi-shape" size="small" color="primary" />

            <div class="flex flex-col ms-2">
              <div class="text-lg font-weight-bold">
                {{ category.name }}
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="6">
          <v-chip rounded="lg" size="small" class="font-weight-bold">
            20 تصنيفات فرعية
          </v-chip>
        </v-col>

        <v-col cols="3" class="flex justify-end">
          <div class="flex gap-2">
            <v-btn-icon icon="mdi-pencil-outline" color="blue" :to="`/offers-categories/category/${category.id}`"> </v-btn-icon>

            <v-tooltip location="top">
              <template v-slot:activator="{ props }">
                <v-btn-icon
                  icon="mdi-trash-can-outline"
                  color="error"
                  @click="$emit('remove', category.id)"
                ></v-btn-icon>
              </template>
              <span> لا يمكنك حذف الصنف لأنه يتعلق بمجموعة من العناصر </span>
            </v-tooltip>

            <v-btn-icon icon="mdi-plus" color="secondary" :to="`offers-categories/category/${category.id}/create`"> </v-btn-icon>

            <v-btn-icon :icon="isVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'" color="gray" @click="isVisible = !isVisible"> </v-btn-icon>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

  <v-expand-transition name="slide-fade">
    <div v-if="isVisible" class="ms-10">
      <subcategory-card
        v-for="sub in category.sub_categories"
        :sub-category="sub"
        @remove="showDeleteDialog"
      />
    </div>
  </v-expand-transition>

  <!-- Delete Dialog -->
  <base-delete-dialog
    v-model="deleteDialogToggler"
    :loading
    @delete="deleteSubCategory"
  />
</template>

<script setup lang="ts">
const categoryStore = useCategoryStore()
const subCategoryStore = useSubCategoryStore()

defineProps<{
  category: Category;
}>();

const loading = ref(false)

const deletedSubCategoryId = ref()
const deleteDialogToggler = ref(false)

const showDeleteDialog = (id: number) => {
  deletedSubCategoryId.value = id;
  deleteDialogToggler.value = true;
};

const deleteSubCategory = async () => {
  loading.value = true;

  await subCategoryStore.remove(Number(deletedSubCategoryId.value))

  // re-list all categories
  await categoryStore.list()

  loading.value = false;

  // close delete dialog
  deleteDialogToggler.value = false;
};

const isVisible = ref(false);
</script>
