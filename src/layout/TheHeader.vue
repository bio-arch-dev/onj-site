<template>
  <header
    :class="[
      'z-50 w-full px-5 transition-all duration-300',
      // 모바일: 흰색 배경 고정, 공간을 차지해서 사진을 아래로 밀어냄
      'sticky top-0 bg-white shadow-sm',
      // 웹: 사진 위에 겹치도록 설정, 스크롤 전에는 투명하게
      'md:fixed md:top-0',
      isScrolled
        ? 'md:bg-white md:shadow-md'
        : 'md:bg-transparent md:shadow-none',
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <div class="flex items-center gap-8">
        <div
          class="group flex cursor-pointer items-center gap-3 whitespace-nowrap"
          @click="scrollToTop"
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

        <nav
          class="mg:ml-20 hidden items-center gap-20 whitespace-nowrap md:flex"
        >
          <a
            v-for="menu in MENU_ITEMS"
            :key="menu.id"
            :href="menu.id"
            @click="scrollToSection($event, menu.id)"
            class="font-kimm text-sm font-medium text-gray-400 transition-colors hover:text-[#943939]"
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
import OnjLogo from '@/components/OnjLogo.vue'
import { MENU_ITEMS } from '@/constants.js'
import { ref, onMounted, onUnmounted } from 'vue'
// 1. 스크롤 여부를 저장할 변수
const isScrolled = ref(false)

// 2. 스크롤 감지 함수
const handleScroll = () => {
  // 스크롤이 50px 이상 내려가면 true, 아니면 false
  isScrolled.value = window.scrollY > 50
}

// 3. 컴포넌트가 나타날 때 이벤트 등록, 사라질 때 제거
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 스크롤 이동
  })
}

// 메뉴 스크롤 이동 함수
const scrollToSection = (e, id) => {
  e.preventDefault() // <a> 태그의 기본 이동 막기
  const target = document.querySelector(id)
  if (target) {
    // 헤더 높이(약 80px)를 고려해 위치 계산
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
