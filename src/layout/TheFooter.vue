<template>
  <footer class="bg-gray-800 px-5 py-6 text-gray-100">
    <div class="mx-auto max-w-7xl">
      <div
        class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-5"
      >
        <div
          class="flex w-full flex-row justify-between md:w-auto md:gap-2 lg:gap-32"
        >
          <!-- 로고 및 슬로건 -->
          <div class="flex min-w-30 flex-col gap-4">
            <div class="opacity-90">
              <OnjLogo class="h-auto w-15" />
            </div>
            <div class="space-y-1">
              <p class="text-[10px] leading-none text-gray-500">SPACE, ON.</p>
              <p class="font-kimm text-sm text-gray-400">온재</p>
              <p class="text-[10px] leading-none text-gray-400">
                실내건축공사업
              </p>
            </div>
          </div>

          <!-- 연락처 (클릭 시 통화 및 홈 이동) -->
          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-bold tracking-wider text-gray-400">
              CONTACT
            </h4>
            <div class="space-y-1.5 font-sans text-[11px] text-gray-400">
              <p>
                Tel:
                <a
                  href="tel:053-963-6189"
                  class="transition-colors hover:text-white"
                >
                  053 963 6189
                </a>
              </p>
              <p>
                Phone:
                <a
                  href="tel:010-3819-6189"
                  class="transition-colors hover:text-white"
                >
                  010-3819-6189
                </a>
              </p>
              <p>
                <RouterLink
                  to="/"
                  class="transition-colors hover:text-[#943939]"
                >
                  onj.kr
                </RouterLink>
              </p>
            </div>
          </div>
        </div>

        <!-- 사업자 정보 (이메일 및 대표번호 링크화, 보더 색상 수정) -->
        <div
          class="flex flex-col gap-3 border-t border-gray-700 pt-8 md:border-none md:pt-0"
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
              <span class="text-gray-400">대표자:</span> 이유정
              <span class="mx-2 text-gray-700">|</span><br class="md:hidden" />
              <span class="text-gray-400">사업자 등록번호:</span> 861-87-02404
            </p>
            <p>
              <span class="text-gray-400">대표번호:</span>
              <a href="tel:053-963-6189" class="hover:text-white"
                >053-963-6189</a
              >
              <span class="mx-2 text-gray-700">|</span>
              <span class="text-gray-400">팩스:</span> 053) 962 6189
              <span class="mx-2 text-gray-700">|</span><br class="md:hidden" />
              <span class="text-gray-400">이메일:</span>
              <a href="mailto:ylee.onj@gmail.com" class="hover:text-white">
                ylee.onj@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- 하단 저작권 및 SNS 링크 (인라인 SVG 적용) -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 md:flex-row"
      >
        <p class="font-sans text-[10px] text-gray-500">
          COPYRIGHT © {{ currentYear }}
          <span class="text-gray-400">ONJAE INC.</span> ALL RIGHTS RESERVED.
        </p>

        <div class="flex items-center gap-4 text-gray-400">
          <!-- 인스타그램 -->
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="transition-colors hover:text-white"
          >
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>

          <!-- 유튜브 -->
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            class="transition-colors hover:text-white"
          >
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import OnjLogo from '@/components/OnjLogo.vue'

const currentYear = new Date().getFullYear()
</script>
