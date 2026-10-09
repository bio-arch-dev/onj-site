<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { projects } from '@/data/projects'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// ================= [수정 & 추가된 상태 관리] =================
const isModalOpen = ref(false)
const currentImages = ref([]) // 현재 열린 현장의 전체 이미지 리스트
const currentIndex = ref(0) // 현재 보고 있는 이미지 순번

// 현재 인덱스에 해당하는 고해상도(w_1600) 이미지 URL 계산
const currentLargeImage = computed(() => {
  if (!currentImages.value.length) return ''
  const imgUrl = currentImages.value[currentIndex.value] || ''
  return imgUrl.replace('w_800', 'w_1600')
})

// 이미지 모달 열기 (배열과 시작 인덱스를 함께 받음)
const openModal = (images, index) => {
  currentImages.value = images
  currentIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

// 모달 닫기
const closeModal = () => {
  isModalOpen.value = false
  currentImages.value = []
  currentIndex.value = 0
  document.body.style.overflow = 'auto'
}

// 이전 사진 이동
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// 다음 사진 이동
const nextSlide = () => {
  if (currentIndex.value < currentImages.value.length - 1) {
    currentIndex.value++
  }
}

// 키보드 조작 지원 (좌/우 방향키, ESC)
const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// 모바일 터치 스와이프 감지
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  const diffX = touchStartX - touchEndX

  if (diffX > 50) {
    nextSlide() // 왼쪽으로 스와이프 -> 다음 사진
  } else if (diffX < -50) {
    prevSlide() // 오른쪽으로 스와이프 -> 이전 사진
  }
}
// ============================================================
</script>

<template>
  <section id="works" class="w-full bg-white px-5 py-12 md:py-32">
    <div class="mx-auto max-w-7xl">
      <div
        v-for="(project, pIdx) in projects"
        :key="pIdx"
        class="mb-24 md:mb-40"
      >
        <div
          class="mb-8 flex flex-col gap-2 border-l-2 border-gray-400 pl-4 md:mb-12"
        >
          <h3
            class="font-SUIT text-[14px] font-bold tracking-[0.2em] text-gray-400 md:text-xl"
          >
            {{ project.title }}
          </h3>
          <div class="flex items-center gap-3">
            <span
              class="font-SUIT text-[10px] tracking-widest text-gray-400 md:text-xs"
            >
              {{ project.location }}
            </span>
          </div>
          <p
            class="font-SUIT mt-4 hidden max-w-2xl text-sm leading-relaxed font-light break-keep text-gray-500 md:block"
          >
            {{ project.comment }}
          </p>
        </div>

        <!-- 데스크톱 그리드 (openModal 인자 수정) -->
        <div class="hidden grid-cols-4 gap-3 md:grid">
          <div
            v-for="(img, iIdx) in project.images"
            :key="iIdx"
            class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
            @click="openModal(project.images, iIdx)"
          >
            <img
              :src="img"
              :alt="project.altTexts?.[iIdx] || project.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <!-- 모바일 스와이퍼 그리드 (openModal 인자 수정) -->
        <div class="md:hidden">
          <swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            class="project-swiper"
          >
            <swiper-slide v-for="groupIdx in [0, 4]" :key="groupIdx">
              <div class="grid grid-cols-2 gap-2 pb-10">
                <div
                  v-for="offset in [0, 1, 2, 3]"
                  :key="offset"
                  class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
                  @click="openModal(project.images, groupIdx + offset)"
                >
                  <img
                    :src="project.images[groupIdx + offset]"
                    class="h-full w-full object-cover"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <!-- 인스타그램 스타일 라이트박스 모달 -->
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 select-none md:p-10"
        @click.self="closeModal"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- 상단 헤더: 사진 카운터 & 닫기 버튼 -->
        <div
          class="fixed top-6 right-6 left-6 z-110 flex items-center justify-between text-white"
        >
          <span
            class="font-SUIT rounded-full bg-black/40 px-3 py-1 text-xs tracking-wider md:text-sm"
          >
            {{ currentIndex + 1 }} / {{ currentImages.length }}
          </span>
          <button
            @click="closeModal"
            class="text-white/70 transition-colors hover:text-white"
            aria-label="닫기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- 좌측 이전 버튼 (첫 번째 사진이 아닐 때만 노출) -->
        <button
          v-if="currentIndex > 0"
          @click.stop="prevSlide"
          class="fixed left-4 z-110 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 md:left-8 md:h-12 md:w-12"
          aria-label="이전 사진"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- 메인 확대 이미지 -->
        <img
          :src="currentLargeImage"
          class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl transition-all duration-300"
          alt="확대 이미지"
        />

        <!-- 우측 다음 버튼 (마지막 사진이 아닐 때만 노출) -->
        <button
          v-if="currentIndex < currentImages.length - 1"
          @click.stop="nextSlide"
          class="fixed right-4 z-110 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 md:right-8 md:h-12 md:w-12"
          aria-label="다음 사진"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.project-swiper {
  --swiper-theme-color: #943939;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}

/* 모달 페이드 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
