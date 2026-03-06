<template>
  <ul
    class="menu text-base-content m-4 mt-24 w-fit space-y-2 rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-md"
  >
    <li v-for="menu in MENU_ITEMS" :key="menu.id">
      <a
        :href="menu.id"
        class="font-kimm text-sm text-gray-400 transition-colors duration-300 hover:bg-transparent hover:text-[#943939]"
      >
        <span class="text-xs opacity-50">{{ menu.num }}</span>
        {{ menu.title }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { MENU_ITEMS } from '@/constants.js'
</script>
