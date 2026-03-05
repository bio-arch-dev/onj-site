<template>
  <div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <TheHeader />

      <main>
        <RouterView />
      </main>

      <!-- <TheFooter /> -->
    </div>

    <div class="drawer-side z-60">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <TheDrawer />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/layout/TheHeader.vue'
import TheDrawer from '@/layout/TheDrawer.vue'
// import TheFooter from '@/layout/TheFooter.vue'
</script>

<style>
@import 'tailwindcss';
/* 전체 웹사이트의 미니멀한 톤을 위해 기본 배경색 설정 */
body {
  @apply bg-white text-gray-900;
}
.drawer-overlay {
  /* 기본 배경색을 흰색으로 강제 지정 */
  background-color: rgba(255, 255, 255, 0.4) !important;
}
/* 부드러운 스크롤 적용 */
html {
  scroll-behavior: smooth;
}
</style>
