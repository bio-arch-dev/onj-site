<template>
  <header
    :class="[
      'fixed top-0 z-50 w-full px-3 transition-all duration-300 sm:px-4 md:px-6',
      isScrolled || route.path !== '/'
        ? 'bg-white shadow-md'
        : 'bg-white/90 backdrop-blur-sm md:bg-transparent md:shadow-none',
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center py-2 sm:py-2.5 md:py-4">
      <!-- 좌측: 0.8배 축소 로고 + 밀착된 온재 텍스트 -->
      <div
        class="group flex shrink-0 cursor-pointer items-center gap-0.5 pl-1 whitespace-nowrap"
        @click="handleLogoClick"
      >
        <!-- 심볼 그래픽 (기존 대비 0.8배 추가 축소) -->
        <div
          :class="[
            'origin-left scale-[0.65] transition-colors duration-300 sm:scale-[0.72] md:scale-[0.75]',
            isScrolled || route.path !== '/'
              ? 'text-gray-400 group-hover:text-[#943939]'
              : 'text-[#943939]',
          ]"
        >
          <OnjLogo />
        </div>

        <!-- 한글 온재 (연그레이) -->
        <span
          class="font-kimm text-xs font-bold tracking-tight text-gray-400 transition-colors group-hover:text-[#943939] sm:text-sm"
        >
          온재
        </span>
      </div>

      <!-- 중앙: 네비게이션 (센터 쪽으로 이동하여 우측 여백 확보) -->
      <nav
        class="flex flex-1 items-center justify-center gap-4 whitespace-nowrap sm:gap-6 md:gap-8"
      >
        <!-- 1. 포트폴리오 드롭다운 -->
        <div
          ref="dropdownRef"
          class="relative py-1"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <button
            type="button"
            @click="toggleDropdown"
            class="font-kimm flex items-center gap-0.5 text-xs font-medium text-gray-400 transition-colors hover:text-[#943939] sm:gap-1 sm:text-sm"
          >
            포트폴리오
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 transition-transform duration-200 sm:h-3.5 sm:w-3.5"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- 드롭다운 패널 (버튼 기준 중앙 정렬) -->
          <Transition name="dropdown-fade">
            <div
              v-if="isDropdownOpen"
              class="absolute top-full left-1/2 z-50 mt-1 w-36 -translate-x-1/2 rounded-2xl border border-stone-100 bg-white/98 p-1.5 shadow-xl backdrop-blur-md sm:w-40 sm:p-2"
            >
              <RouterLink
                v-for="sub in PORTFOLIO_MENUS"
                :key="sub.path"
                :to="sub.path"
                @click="isDropdownOpen = false"
                class="block rounded-xl px-3.5 py-2 text-center text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50 hover:text-[#943939] active:bg-stone-100 active:text-[#943939]"
              >
                {{ sub.title }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <!-- 2. 소통 (연그레이) -->
        <a
          :href="commId"
          @click="scrollToSection($event, commId)"
          class="font-kimm text-xs font-medium text-gray-400 transition-colors hover:text-[#943939] sm:text-sm"
        >
          소통
        </a>

        <!-- 3. 문의 (연그레이) -->
        <a
          :href="contactId"
          @click="scrollToSection($event, contactId)"
          class="font-kimm text-xs font-medium text-gray-400 transition-colors hover:text-[#943939] sm:text-sm"
        >
          문의
        </a>
      </nav>

      <!-- 우측: 좌측 로고 너비만큼 더미 스페이서를 두어 메뉴가 정확히 중앙에 오도록 균형 유지 -->
      <div class="hidden w-15 shrink-0 sm:block"></div>
    </div>
  </header>
</template>

<script setup>
import OnjLogo from '@/components/OnjLogo.vue'
import { MENU_ITEMS } from '@/constants.js'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// constants.js의 실제 ID 자동 추출 (소통, 문의)
const commMenu = MENU_ITEMS?.find((m) => m.title.includes('소통'))
const contactMenu = MENU_ITEMS?.find((m) => m.title.includes('문의'))

const commId = commMenu ? commMenu.id : '#story'
const contactId = contactMenu ? contactMenu.id : '#contact'

// 포트폴리오 4대 영역
const PORTFOLIO_MENUS = [
  { title: '상업공간', path: '/commercial' },
  { title: '주거공간', path: '/residential' },
  { title: '의료공간', path: '/medical' },
  { title: '관공사', path: '/public' },
]

const isScrolled = ref(false)
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const onMouseEnter = () => {
  if (window.innerWidth >= 768) {
    isDropdownOpen.value = true
  }
}

const onMouseLeave = () => {
  if (window.innerWidth >= 768) {
    isDropdownOpen.value = false
  }
}

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
})

const handleLogoClick = () => {
  isDropdownOpen.value = false
  if (route.path === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    router.push('/')
  }
}

const scrollToSection = async (e, id) => {
  e.preventDefault()
  isDropdownOpen.value = false

  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
    setTimeout(() => {
      moveToElement(id)
    }, 150)
  } else {
    moveToElement(id)
  }
}

const moveToElement = (id) => {
  const target = document.querySelector(id)
  if (target) {
    const headerOffset = 70
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease-out;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -6px);
}
</style>
