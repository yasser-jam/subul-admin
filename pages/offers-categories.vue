<template>
  <v-container>
    <div class="d-flex mb-4">
      <div class="flex-grow-1 text-3xl font-semibold py-2">التصنيفات</div>

      <div class="flex gap-2">

        <nuxt-link to="/offers-categories/category/create">
          <v-btn prepend-icon="mdi-plus">إضافة تصنيف</v-btn>
        </nuxt-link>
      </div>
    </div>

    <base-loader v-if="loading && !categories.length" />

    <v-row v-else>
      <v-col v-if="categories.length" cols="12">
        <category-card
          v-for="category in categories"
          :category
          @remove="showDeleteDialog"
        />
      </v-col>

      <v-col v-else>
        <div class="d-flex flex-column justify-center items-center">
          <v-icon color="primary" size="8rem" class="mb-2">mdi-magnify</v-icon>
          <div class="text-h6 text-primary">لا يوجد أي تصنيف بعد!</div>
          <v-btn
            variant="tonal"
            class="mt-8"
            size="large"
            link
            to="/articles/categories/create"
            >أضف تصنيفاً جديداً</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>

  <nuxt-page></nuxt-page>

  <!-- Delete Dialog -->
  <base-delete-dialog
    v-model="deleteDialogToggler"
    :loading="deleteLoading"
    @delete="deleteCategory"
  />
</template>

<script setup lang="ts">
const deleteLoading = ref(false);
const deletedCategoryId = ref<number>();
const deleteDialogToggler = ref(false);

const categoryStore = useCategoryStore();

const { categories } = storeToRefs(categoryStore);

const { pending: loading, refresh } = useLazyAsyncData(() =>
  categoryStore.list()
);

const showDeleteDialog = (id: number) => {
  deletedCategoryId.value = id;
  deleteDialogToggler.value = true;
};


const deleteCategory = async () => {
  deleteLoading.value = true;

  await categoryStore.remove(Number(deletedCategoryId.value))

  deleteLoading.value = false;

  // close delete dialog
  deleteDialogToggler.value = false;
};

</script>
