<script setup lang="ts">
import PostsTable from '@/components/posts/PostsTable.vue';
import { ref } from 'vue';

const selectedTab = ref("");
</script>

<template >
    <v-tabs v-model="selectedTab">
      <v-tab value="foryou">For you</v-tab>
      <v-tab value="following">Following</v-tab>
    </v-tabs>
    <v-window v-model="selectedTab">
      <v-window-item value="foryou">
        <posts-table />
      </v-window-item>
      <v-window-item value="following">
      </v-window-item>
    </v-window>
</template>