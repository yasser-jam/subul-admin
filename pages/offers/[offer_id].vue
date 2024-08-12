<template>
    <v-container>
        <base-loader v-if="pending"></base-loader>

        <v-row v-else>
            {{ offer }}
            <v-col cols="12">

                <div class="text-3xl font-semibold">اسم المشروع </div>
                <div class="text-lg text-gray-500 mt-2">20/2/3002</div>

            </v-col>

            <v-col cols="8">
                <v-card>
                    <v-card-text>
                        <div class="mb-4">
                            <div class="text-xl font-semibold mb-1">وصف المشروع</div>
                            <div class="text-gray-500">{{ offer.description }}</div>
                        </div>
        
                        <div v-if="offer.files?.length">
                            <div class="text-xl font-semibold mb-1">ملفات المشروع</div>
                            <div v-for="file in offer.files" class="text-gray-500 mb-2">{{ file.name }}</div>

                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="4">
                <client-row-card v-if="offer.client" :client="offer.client" />

                <client-offer-card :offer class="mt-4" />
            </v-col>
        </v-row>
    </v-container>
</template>


<script setup lang="ts">

const route = useRoute()

const offerId = route.params.offer_id

const offerStore = useClientOfferStore()

const { offer } = storeToRefs(offerStore)

const { pending } = useLazyAsyncData(() => offerStore.get(Number(offerId)))

</script>