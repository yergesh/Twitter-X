<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from "@/components/layout/AppFooter.vue"
import { usePreferences } from "@/stores/preferences";
const preferences = usePreferences();

</script>

<template>

  <v-main class="login_layout__wrapper">
    <router-view />
  </v-main>
</template>

<style>
.login_layout__wrapper {
  height: 100vh;
}
</style>
