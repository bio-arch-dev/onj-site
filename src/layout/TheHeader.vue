<template>
  <header
    :class="[
      'z-50 w-full px-2 transition-all duration-300 sm:px-4 md:px-6',
      'sticky top-0 bg-white shadow-sm',
      'md:fixed md:top-0',
      isScrolled || route.path !== '/'
        ? 'md:bg-white md:shadow-md'
        : 'md:bg-transparent md:shadow-none',
    ]"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between py-2.5 md:py-4"
    >
      <!-- 좌측: 로고 + 데스크톱 네비게이션 -->
      <div class="flex items-center gap-6 lg:gap-10">
        <!-- 로고 영역: 클릭 시 홈 이동 처리 -->
        <div
          class="group flex cursor-pointer items-center gap-2 pl-1 whitespace-nowrap md:gap-3"
          @click="handleLogoClick"
        >
          <div
            class="text-gray-400 transition-colors duration-300 group-hover:text-[#943939]"
          >
            <OnjLogo />
          </div>
          <span
            class="font-kimm hidden text-[10px] tracking-tighter text-gray-400 opacity-80 md:block"
          >
            실내건축 공사업
          </span>
        </div>

        <!-- 데스크톱 전용 메뉴 -->
        <nav
          class="hidden items-center gap-6 whitespace-nowrap md:flex lg:gap-8"
        >
          <a
            v-for="menu in MENU_ITEMS"
            :key="menu.id"
            :href="menu.id"
            @click="scrollToSection($event, menu.id)"
            class="font-kimm text-sm font-medium text-gray-400 transition-colors hover:text-[#943939]"
          >
            {{ menu.title }}
          </a>
        </nav>
      </div>

      <!-- 우측: 캡슐 버튼 + 햄버거 메뉴 -->
      <div class="flex items-center gap-1.5 sm:gap-3">
        <!-- 상업공간 | 주거공간 캡슐 세그먼트 스위치 -->
        <div
          :class="[
            'flex items-center rounded-full p-0.5 text-[11px] font-medium transition-all duration-300 sm:p-1 sm:text-xs',
            isScrolled || route.path !== '/'
              ? 'border border-gray-200 bg-gray-100 text-gray-700'
              : 'border border-gray-100 bg-white text-gray-800 shadow-md',
          ]"
        >
          <RouterLink
            :to="SPACE_CATEGORIES[0].path"
            :class="[
              'rounded-full px-2.5 py-1 whitespace-nowrap transition-colors sm:px-3 sm:py-1',
              route.path === '/commercial'
                ? 'bg-white font-bold text-[#943939] shadow-sm'
                : 'hover:bg-black/5 hover:text-[#943939]',
            ]"
          >
            {{ SPACE_CATEGORIES[0].title }}
          </RouterLink>

          <span
            :class="[
              'mx-0.5 h-2.5 w-px sm:h-3',
              isScrolled || route.path !== '/' ? 'bg-gray-300' : 'bg-gray-200',
            ]"
          ></span>

          <RouterLink
            :to="SPACE_CATEGORIES[1].path"
            :class="[
              'rounded-full px-2.5 py-1 whitespace-nowrap transition-colors sm:px-3 sm:py-1',
              route.path === '/residential'
                ? 'bg-white font-bold text-[#943939] shadow-sm'
                : 'hover:bg-black/5 hover:text-[#943939]',
            ]"
          >
            {{ SPACE_CATEGORIES[1].title }}
          </RouterLink>
        </div>

        <!-- 우측 햄버거 메뉴 -->
        <label
          for="my-drawer"
          class="btn btn-ghost btn-circle btn-sm sm:btn-md drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-5 w-5 stroke-current sm:h-6 sm:w-6"
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
import OnjLogo from '@/components/OnjLogo.vue'
import { MENU_ITEMS, SPACE_CATEGORIES } from '@/constants.js'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// 로고 클릭 처리: 메인이면 맨 위로 스크롤, 서브 페이지면 메인('/')으로 이동
const handleLogoClick = () => {
  if (route.path === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    router.push('/')
  }
}

// 메뉴 스크롤 처리: 서브 페이지에서 누르면 메인으로 이동 후 해당 위치로 이동
const scrollToSection = async (e, id) => {
  e.preventDefault()

  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
    setTimeout(() => {
      moveToElement(id)
    }, 100)
  } else {
    moveToElement(id)
  }
}

const moveToElement = (id) => {
  const target = document.querySelector(id)
  if (target) {
    const headerOffset = 80
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>
