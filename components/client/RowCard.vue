<template>
    <v-card>
        <v-card-text>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <v-avatar icon="mdi-account-tie-outline" color="primary" size="2rem"></v-avatar>

                    <div>
                        <div class="text-lg font-semibold">{{ client.user?.first_name }} {{ client.user?.last_name }}</div>
                        <div class="text-gray-500">{{ client.user?.email }}</div>
                    </div>
                </div>
        
        
                <base-gender-chip :gender="client.gender" />
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

import type { Client } from '~/types/index'

const props = defineProps<{
    client: Client
}>()

</script>