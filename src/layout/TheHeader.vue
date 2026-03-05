<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <div class="flex items-center gap-8">
        <h1
          @click="scrollToTop"
          class="font-kimm cursor-pointer text-xl font-bold tracking-tight text-gray-400 hover:text-black"
        >
          온재
        </h1>

        <nav class="hidden items-center gap-10 md:flex">
          <a
            v-for="menu in MENU_ITEMS"
            :key="menu.id"
            :href="menu.id"
            class="text-sm font-medium text-gray-600 transition-colors hover:text-black"
          >
            {{ menu.title }}</a
          >
        </nav>
      </div>

      <div class="flex items-center gap-2">
        <label for="my-drawer" class="btn btn-ghost btn-circle drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  </header>
</template>

<script setup>
import { MENU_ITEMS } from '@/constants.js'
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 스크롤 이동
  })
}
</script>
