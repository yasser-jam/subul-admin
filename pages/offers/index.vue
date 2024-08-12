<template>
  <v-container>
    <v-card>
      <v-card-title class="d-flex">
        <div class="flex-grow-1">العروض</div>
      </v-card-title>

      <v-card-text>
        <client-only v-if="offers.length && !pending">
          <v-data-table-server
            :headers="headers"
            :items="offers"
            :items-length="100"
            :loading="pending"
          >
            <template v-slot:item.name="{ item }">
              <nuxt-link :to="`/offers/${item.id}`">
                <div class="flex items-center gap-4 py-2">
                    <v-avatar icon="mdi-briefcase" color="primary" />

                    <div>
                        <div class="text-lg text-slate-800 font-semibold">{{ item.title }}</div>
                        <div class="text-sm text-gray-500">20/2/2003</div>
                    </div>
                </div>
              </nuxt-link>
            </template>

            <template #item.category="{ item }">
              <v-chip color="blue">{{ item.sub_category?.name || 'غير محدد' }}</v-chip>
            </template>

            <template #item.status="{ item }">
                <base-status :status="item.status" />
            </template>

            <template v-slot:item.actions="{ item }">
              <v-btn-icon
                icon="mdi-pencil-outline"
                color="blue"
                :to="`/offers/${item.id}`"
                class="me-2"
                >
              </v-btn-icon>

              <v-btn-icon
                icon="mdi-trash-can-outline"
                color="error"
                @click="showDeleteDialog(Number(item.id))"
              ></v-btn-icon>

            </template>
          </v-data-table-server>
        </client-only>

        <base-not-found name="عرض" v-else />
      </v-card-text>
    </v-card>
  </v-container>

  <nuxt-page />

  <!-- Delete Dialog -->
  <base-delete-dialog
    v-model="deleteDialogToggler"
    :loading="deleteLoading"
    @delete="onDelete"
  />
</template>

<script setup lang="ts">
const offerStore = useClientOfferStore();

const { offers } = storeToRefs(offerStore);

const status = ref('active');

const { pending } = useLazyAsyncData(() => offerStore.list());

const headers: Header[] = [
  { title: 'الاسم', key: 'name' },
  { title: 'نوع العرض', key: 'category' },
  { title: 'حالة العرض', key: 'status' },
  { title: '', key: 'actions', align: 'end', sortable: false },
];

const deletedOfferId = ref<number>();
const deleteLoading = ref(false);
const deleteDialogToggler = ref(false);

const showDeleteDialog = (id: number) => {
  deletedOfferId.value = id;
  deleteDialogToggler.value = true;
};

const onDelete = async () => {
  deleteLoading.value = true;

  // await offerStore.remove(deletedOfferId.value)

  deleteLoading.value = false;

  // close delete dialog
  deleteDialogToggler.value = false;
};

// watch(paginationOptions, async (oldValue, newValue) => {
//   if (isEqual(oldValue, newValue)) return;
//   pending.value = true;

//   await offerStore.list();

//   pending.value = false;
// });
</script>

<style scoped></style>
