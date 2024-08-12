<template>
    <v-card>

        <v-card-text>

            <div class="text-lg font-semibold mb-4">معلومات العرض</div>

            <div class="flex gap-4 mb-4">
                <div class="label">تاريخ الإضافة</div>
                <v-chip>{{ offer.created_at }}</v-chip>
            </div>
            
            <div class="flex gap-4 mb-4">
                <div class="label">الأيام: </div>
                <v-chip color="warning">{{ offer.days }} يوم</v-chip>
            </div>

            <div class="flex gap-4 mb-4">
                <div class="label">نوع العرض: </div>
                <v-chip color="blue">{{ offer.sub_category?.name }}</v-chip>
            </div>

            <div class="flex gap-4 mb-4">
                <div class="label">السعر: </div>
                

                <div class="flex justify-between">
                    <v-chip color="primary">{{ offer.min_price }}ل.س -</v-chip>

                    <v-icon>mdi-arrow-right</v-icon>

                    <v-chip color="primary">{{ offer.max_price }}ل.س -</v-chip>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

const props = defineProps<{
    offer: ClientOffer
}>()
</script>