<template>
  <footer class="bg-gray-800 px-5 py-6 text-gray-100">
    <div class="mx-auto max-w-7xl">
      <div
        class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-5"
      >
        <div
          class="flex w-full flex-row justify-between md:w-auto md:gap-2 lg:gap-32"
        >
          <div class="flex min-w-30 flex-col gap-4">
            <div class="opacity-90">
              <OnjLogo style="width: 60px; height: auto" />
            </div>
            <div class="space-y-1">
              <p class="text-[10px] leading-none text-gray-600">SPACE, ON.</p>
              <p class="font-kimm text-sm text-gray-400">온재</p>
              <p class="text-[10px] leading-none text-gray-400">
                실내건축공사업
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-bold tracking-wider text-gray-400">
              CONTACT
            </h4>
            <div class="space-y-1.5 font-sans text-[11px] text-gray-400">
              <p>Tel: 053 963 6189</p>
              <p>Phone: 010-3819-6189</p>
              <p class="cursor-pointer transition-colors hover:text-[#943939]">
                www.onj.kr
              </p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col gap-3 border-t border-gray-800 pt-8 md:border-none md:pt-0"
        >
          <h4 class="text-xs font-bold tracking-wider text-gray-400">
            COMPANY INFO
          </h4>
          <div
            class="flex flex-col gap-y-1.5 font-sans text-[11px] tracking-tight text-gray-400 md:whitespace-nowrap"
          >
            <p>
              <span class="text-gray-400">주소:</span> 대구광역시 동구 과학로4길
              16-3, 1층 <span class="mx-2 text-gray-700">|</span
              ><br class="md:hidden" />
              <span class="text-gray-400">상호:</span> (주)온재
              <span class="mx-2 text-gray-700">|</span>
              <span class="text-gray-400">사업자 등록번호:</span> 861-87-02404
            </p>
            <p>
              <span class="text-gray-400">대표번호:</span> 010-3819-6189
              <span class="mx-2 text-gray-700">|</span>
              <span class="text-gray-400">팩스:</span> 053) 963 6189
              <span class="mx-2 text-gray-700">|</span><br class="md:hidden" />
              <span class="text-gray-400">이메일:</span> ylee.onj@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row"
      >
        <p class="font-sans text-[10px] text-gray-600">
          COPYRIGHT © 2026 <span class="text-gray-400">ONJAE INC.</span> ALL
          RIGHTS RESERVED.
        </p>
        <div class="flex items-center gap-4 text-xs text-gray-600 opacity-50">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import OnjLogo from '@/components/OnjLogo.vue'
</script>
