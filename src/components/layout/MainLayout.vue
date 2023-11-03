<script setup lang="ts">
import { Component, ref } from 'vue'
import AppFooter from "@/components/layout/AppFooter.vue"
import ButtonCheckbox from "@/components/ButtonCheckbox.vue"
import LeftMenu from "@/components/layout/LeftMenu.vue"
import { usePreferences } from "@/stores/preferences";

const preferences = usePreferences();
</script>

<template>
<div class="main_layout__wrapper">
  <header class="main_layout__header elevation-2">
    <img src="src\assets\X-Logo.jpg" style="width: 50px; align-content: flex-start; margin-left: 60px;"/>
    <div class="d-flex mr-4 align-center">
      <v-spacer />
    </div>
  </header>
  <div>
    <left-menu />
  </div>
  <main class="main_layout__main">
    
    <router-view  />
    <notifications class="mb-8" position="bottom right" />
  </main>
  <footer class="main_layout__footer">

  </footer>
</div>
</template>

<style>
.main_layout__wrapper {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: "head head head"
                       "left main right"
                       "foot foot foot";
  gap: var(--grid-gap);
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  grid-template-columns: var(--grid-columns);

  --header-height: 64px;
  --footer-height: 30px;
  --grid-columns: 1fr 900px 1fr;
  --grid-gap: 6px;
}
.main_layout__header {
  grid-area: head;
  position: sticky; 
  top: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: var(--grid-gap);
  align-content: center;
  height: var(--header-height);
  background-color: rgb(var(--v-theme-primary));
    /*background-color: rgb(48, 179, 68);*/
}
.main_layout__main {
  grid-area: main;
  background-color: var(--v-theme-background);
}
.main_layout__footer {
  grid-area: foot;
  position: sticky;
  bottom: 0;
  background-color: rgb(var(--v-theme-primary));
}
</style>
