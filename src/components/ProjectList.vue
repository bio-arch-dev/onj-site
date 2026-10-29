<template>
  <div class="w-full">
    <!-- 현장별 리스트 루프 -->
    <div v-for="(project, pIdx) in projects" :key="pIdx" class="mb-24 md:mb-40">
      <!-- 현장 정보 타이틀 -->
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
          v-if="project.comment"
          class="font-SUIT mt-3 block max-w-2xl text-xs leading-relaxed font-light break-keep text-gray-500 sm:mt-4 sm:text-sm"
        >
          {{ project.comment }}
        </p>
      </div>

      <!-- 데스크톱 그리드 (600px 최적화) -->
      <div class="hidden grid-cols-4 gap-3 md:grid">
        <div
          v-for="(img, iIdx) in project.images"
          :key="iIdx"
          class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
          @click="openModal(project.images, iIdx)"
        >
          <img
            :src="getOptimizedImage(img, 600)"
            :alt="project.altTexts?.[iIdx] || project.title"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <!-- 모바일 스와이퍼 그리드 (400px 최적화 및 lazy 추가) -->
      <div class="md:hidden">
        <swiper
          :modules="modules"
          :pagination="{ clickable: true }"
          class="project-swiper"
        >
          <swiper-slide v-for="groupIdx in [0, 4]" :key="groupIdx">
            <div class="grid grid-cols-2 gap-2 pb-10">
              <template v-for="offset in [0, 1, 2, 3]" :key="offset">
                <div
                  v-if="project.images[groupIdx + offset]"
                  class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
                  @click="openModal(project.images, groupIdx + offset)"
                >
                  <img
                    :src="
                      getOptimizedImage(project.images[groupIdx + offset], 400)
                    "
                    :alt="
                      project.altTexts?.[groupIdx + offset] || project.title
                    "
                    loading="lazy"
                    decoding="async"
                    class="h-full w-full object-cover"
                  />
                </div>
              </template>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 현장 외부 링크 (네이버 블로그 / 유튜브) -->
      <div
        v-if="project.blogUrl || project.youtubeUrl"
        class="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-6"
      >
        <a
          v-if="project.blogUrl"
          :href="project.blogUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 font-mono text-[11px] text-stone-600 transition-all hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 sm:text-xs"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-[#03C75A]"></span>
          <span>현장 리뷰(블로그)</span>
          <span class="material-symbols-outlined text-[13px]"
            >arrow_outward</span
          >
        </a>

        <a
          v-if="project.youtubeUrl"
          :href="project.youtubeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 font-mono text-[11px] text-stone-600 transition-all hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 sm:text-xs"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-[#FF0000]"></span>
          <span>영상 리뷰(유튜브)</span>
          <span class="material-symbols-outlined text-[13px]"
            >arrow_outward</span
          >
        </a>
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

        <!-- 모달 확대 이미지 (1600px 안전 변환 적용) -->
        <img
          :src="currentLargeImage"
          class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl transition-all duration-300"
          alt="확대 이미지"
        />

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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const modules = [Pagination]

const isModalOpen = ref(false)
const currentImages = ref([])
const currentIndex = ref(0)

// Cloudinary 최적화 공통 유틸 함수
const getOptimizedImage = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url
  return url.replace(
    /\/upload\/(?:.*\/)?(v\d+\/)/,
    `/upload/f_auto,q_auto,w_${width},c_limit/$1`,
  )
}

// 모달 확대 이미지: 기존의 불안정한 문자열 치환 대신 유틸 함수로 1600px 고정 변환
const currentLargeImage = computed(() => {
  if (!currentImages.value.length) return ''
  const imgUrl = currentImages.value[currentIndex.value] || ''
  return getOptimizedImage(imgUrl, 1600)
})

const openModal = (images, index) => {
  currentImages.value = images
  currentIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  currentImages.value = []
  currentIndex.value = 0
  document.body.style.overflow = 'auto'
}

const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const nextSlide = () => {
  if (currentIndex.value < currentImages.value.length - 1) currentIndex.value++
}

const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'Escape') closeModal()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  const diffX = touchStartX - touchEndX
  if (diffX > 50) nextSlide()
  else if (diffX < -50) prevSlide()
}
</script>

<style scoped>
.project-swiper {
  --swiper-theme-color: #943939;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
