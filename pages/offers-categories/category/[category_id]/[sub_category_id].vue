<template>
    <base-page-dialog max-width="500" :loading="loading" @close="goBack">
      <Form v-slot="{ errors }" @submit="submitForm">
        <v-card-title class="d-flex">
          <div class="flex-grow-1">معلومات التصنيف الفرعية</div>
        </v-card-title>
  
        <v-card-text>
          <base-label>الاسم</base-label>
  
          <Field
            v-model="subCategory.name"
            name="name"
            rules="required"
            v-slot="{ field }"
          >
            <v-text-field
              v-bind="field"
              :error-messages="errors.name"
              placeholder="ادخل الاسم"
            />
          </Field>
        </v-card-text>
  
        <v-card-actions class="justify-end">
          <v-btn variant="tonal" color="grey-darken-1" @click="goBack">
            الغاء
          </v-btn>
  
          <v-btn type="submit" variant="flat"> حفظ</v-btn>
        </v-card-actions>
      </Form>
    </base-page-dialog>
  </template>
  
  <script setup lang="ts">
  const categoryStore = useCategoryStore()
  const subCategoryStore = useSubCategoryStore();
  const { subCategory } = storeToRefs(subCategoryStore);
  
  // check if editMode (param != "create")
  const route = useRoute();
  
  const categoryId = route.params.category_id
  const subCategoryId = route.params.sub_category_id
  const editMode = subCategoryId !== 'create';
  
  // if editMode => get the tag data from the api
  const { pending: loading } = useLazyAsyncData<SubCategory>(() => {
    subCategoryStore.reset();
  
    if (editMode) return subCategoryStore.get(Number(subCategoryId));
    return Promise.resolve({} as SubCategory);
  });
  
  const submitFunction = async () => {
    if (editMode) return subCategoryStore.update(Number(subCategoryId));
    else return subCategoryStore.create(Number(categoryId));
  };
  
  const submitForm = async () => {
    loading.value = true;
  
    try {
      await submitFunction();

      // re-list all cateogries
      categoryStore.list()
  
      goBack();
    } catch {}
  
    loading.value = false;
  };
  
  // go back function
  const goBack = () => navigateTo('/offers-categories')
  </script>
  
  <style scoped></style>
  