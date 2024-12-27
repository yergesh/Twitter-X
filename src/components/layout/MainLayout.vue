<script setup lang="ts">
import { Component, ref, watch, onMounted } from 'vue'
import AppFooter from "@/components/layout/AppFooter.vue"
import ButtonCheckbox from "@/components/ButtonCheckbox.vue"
import LeftMenu from "@/components/layout/LeftMenu.vue"
import { usePreferences } from "@/stores/preferences";

const preferences = usePreferences();
const currentTime = ref(new Date().toLocaleString());
setInterval(() => {
  currentTime.value = new Date().toLocaleString();
}, 1000);
const videoElement = ref<HTMLVideoElement | null>(null);
const stream = ref<MediaStream | null>(null);

// Включение камеры
const startCamera = async () => {
  try {
    if (!videoElement.value) return;

    stream.value = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false, // Выключаем микрофон
    });

    videoElement.value.srcObject = stream.value;
  } catch (error) {
    console.error("Ошибка при доступе к камере:", error);
  }
};

onMounted(() => {
  startCamera();
});
</script>

<template>
<div class="main_layout__wrapper">
  <header class="main_layout__header elevation-2">
    <v-app-bar app color="primary" dark>
      <!-- Логотип слева -->
      <v-app-bar-nav-icon>
        <img src="src\assets\X-Logo.png" alt="Logo" width="160" style="margin-left: 200px;"/>
      </v-app-bar-nav-icon>
      
      <!-- Тема в середине -->
      <v-toolbar-title class="text-center flex-grow-1">
        OOP Final
      </v-toolbar-title>
      
      <!-- Время справа -->
      <div class="ml-auto mr-10">
        {{ currentTime }}
      </div>
    </v-app-bar>
  </header>
  <main class="main_layout__main">
    <router-view  />
    <notifications class="mb-8" position="bottom right" />
  </main>
  <!-- <div>
    <h2>Прокторинг</h2>
    <video ref="videoElement" autoplay muted></video>
  </div> -->
  <footer class="main_layout__footer">

  </footer>
</div>
</template>

<style>
.main_layout__wrapper {
  height: 100vh;
  width: 100vw;
  display: grid;
  --grid-columns: 2fr 1fr;

  grid-template-areas: "head head head"
                       "main right left"
                       "foot foot foot";
  gap: var(--grid-gap);
 
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  grid-template-columns: var(--grid-columns);

  --header-height: 64px;
  --footer-height: 30px;
  --grid-gap: 6px;
  z-index: 1000;
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
