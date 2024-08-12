<template>
  <v-list>
    <v-list-item>
      <div class="flex flex-col items-center justify-center py-8">

        <v-img src="./images/logo.png" width="125" class="mb-2"></v-img>

        <div class="text-3xl">سٌبُل</div>

        <div class="font-semibold text-sm text-center text-white mt-6">
          سُبُلك المثلى لمستقبل أفضل
        </div>
      </div>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <template v-for="item in links">
        <v-list-item
          v-if="!item.children"
          color="white"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.link"
        />

        <v-list-group v-else color="white" no-action>
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.title"
              :prepend-icon="item.icon"
            />
          </template>

          <v-list-item
            v-for="child in item.children"
            :to="child.link"
            color="white"
            :prepend-icon="child.icon"
            :title="child.title"
          >
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-list>
</template>

<script setup lang="ts">
const links = ref<
  {
    title: string;
    link: string;
    icon: string;
    children?: any[];
  }[]
>([
  {
    title: 'الرئيسية',
    link: '/',
    icon: 'mdi-home',
  },
  {
    title: 'الشركات',
    link: '/companies',
    icon: 'mdi-domain',
    children: [],
  },

  {
    title: 'عروض العملاء',
    link: '/offers',
    icon: 'mdi-briefcase-outline',
    children: [
      {
        title: 'العروض',
        link: '/offers',
        icon: 'mdi-briefcase-outline',
      },
      {
        title: 'العملاء',
        link: '/clients',
        icon: 'mdi-account-tie-outline',
      },
      {
        title: 'أنواع العروض',
        link: '/offers-categories',
        icon: 'mdi-shape',
      },
    ],
  },
]);
</script>
