<template>
    <base-page-dialog max-width="500" :loading="loading" @close="goBack">
      <Form v-slot="{ errors }" @submit="submitForm">
        <v-card-title class="d-flex">
          <div class="flex-grow-1">معلومات التصنيف</div>
        </v-card-title>
  
        <v-card-text>
          <base-label>الاسم</base-label>
  
          <Field
            v-model="category.name"
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
  const categoryStore = useCategoryStore();
  const { category } = storeToRefs(categoryStore);
  
  // check if editMode (param != "create")
  const route = useRoute();
  
  const categoryId = route.params.category_id
  const editMode = categoryId !== 'create';
  
  // if editMode => get the tag data from the api
  const { pending: loading } = useLazyAsyncData<Category>(() => {
    categoryStore.reset();
  
    if (editMode) return categoryStore.get(Number(categoryId));
    return Promise.resolve({} as Category);
  });
  
  const submitFunction = async () => {
    if (editMode) return categoryStore.update(Number(categoryId));
    else return categoryStore.create();
  };
  
  const submitForm = async () => {
    loading.value = true;
  
    try {
      await submitFunction();
  
      goBack();
    } catch {}
  
    loading.value = false;
  };
  
  // go back function
  const goBack = () => navigateTo('/offers-categories')
  </script>
  
  <style scoped></style>
  