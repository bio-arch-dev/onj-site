<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <!-- 1. 미니멀 에디토리얼 인트로 (HERO SECTION) -->
    <section class="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
      <!-- 최상단 메타 라벨 -->
      <div
        class="mb-14 flex items-center justify-between border-b border-stone-200 pb-4 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <div class="flex items-center gap-3">
          <span class="h-1.5 w-1.5 rounded-full bg-[#943939]"></span>
          <span>ONJ Commercial Architecture</span>
        </div>
        <span class="hidden sm:inline"
          >Technical Interior &amp; Construction</span
        >
      </div>

      <!-- 메인 카피 & 브랜드 아이덴티티 그리드 -->
      <div
        class="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8"
      >
        <!-- 좌측 헤드라인 & 소개글 (8 cols) -->
        <div class="lg:col-span-8">
          <h1
            class="font-kimm text-3xl leading-[1.25] tracking-tight sm:text-5xl lg:text-[54px]"
          >
            <span class="block font-normal text-stone-400"
              >매출을 만드는 기획,</span
            >
            <span class="mt-1 block font-bold text-stone-800"
              >기준을 지키는 기술시공.</span
            >
          </h1>

          <p
            class="mt-8 max-w-xl text-sm leading-relaxed font-light text-stone-500 sm:text-base"
          >
            1호점 본점 기획부터 시방서 준수와 까다로운 감리, 공무까지 완벽하게
            대응합니다. 실내건축공사업 면허업체로서 브랜드 가치를 지속 가능한
            공간으로 실현합니다.
          </p>
        </div>

        <!-- 우측 슬로건 (4 cols) -->
        <div
          class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
        >
          <div>
            <p
              class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
            >
              Beyond Vision, Into Space
            </p>
            <p
              class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
            >
              BRAND ON.
            </p>
          </div>

          <p class="mt-6 text-xs leading-relaxed font-light text-stone-400">
            브랜드의 시작과 성장을 위한 상업공간 솔루션. 프랜차이즈 노하우로
            설계하고 기준에 맞게 시공합니다.
          </p>
        </div>
      </div>

      <!-- 3대 핵심 지표 라인 -->
      <div class="border-t border-stone-200/80 pt-8">
        <div class="grid max-w-2xl grid-cols-3 gap-8">
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Since
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
            >
              2007
            </p>
          </div>
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Based In
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
            >
              Daegu
            </p>
          </div>
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Delivery
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-bold text-[#943939] sm:text-3xl"
            >
              100%
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Works 시스템 기반 상업공간 포트폴리오 섹션 -->
    <section
      class="w-full border-t border-stone-100 bg-white px-5 py-12 md:py-20"
    >
      <div class="mx-auto max-w-7xl">
        <!-- 포트폴리오 상단 헤더 & 카테고리 필터 버튼 -->
        <div
          class="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span
              class="font-mono text-[10px] tracking-[0.2em] text-[#943939] uppercase"
            >
              Selected Works
            </span>
            <h2
              class="font-kimm mt-1 text-2xl font-normal text-stone-400 sm:text-3xl"
            >
              상업공간 현장
            </h2>
          </div>

          <!-- 연그레이 칩 버튼 -->
          <div
            class="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs sm:pb-0"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'rounded-full px-3.5 py-1.5 text-xs whitespace-nowrap transition-all duration-200',
                activeCategory === cat
                  ? 'bg-stone-300 font-semibold text-stone-900'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800',
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- 현장별 리스트 루프 (Works.vue 디자인 100% 동일) -->
        <div
          v-for="(project, pIdx) in filteredProjects"
          :key="pIdx"
          class="mb-24 md:mb-40"
        >
          <!-- 현장 정보 (뱃지 없이 순수 타이틀) -->
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
              class="font-SUIT mt-4 hidden max-w-2xl text-sm leading-relaxed font-light break-keep text-gray-500 md:block"
            >
              {{ project.comment }}
            </p>
          </div>

          <!-- 데스크톱 그리드 -->
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

          <!-- 모바일 스와이퍼 그리드 -->
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
                        :src="project.images[groupIdx + offset]"
                        :alt="
                          project.altTexts?.[groupIdx + offset] || project.title
                        "
                        class="h-full w-full object-cover"
                      />
                    </div>
                  </template>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

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

        <!-- 좌측 이전 버튼 -->
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

        <!-- 우측 다음 버튼 -->
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
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { commercialProjects } from '@/data/commercial'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// 카테고리 필터
const categories = ['전체', '프랜차이즈 F&B', '미용실', '관공사', '병원 한의원']
const activeCategory = ref('전체')

const filteredProjects = computed(() => {
  if (activeCategory.value === '전체') return commercialProjects
  return commercialProjects.filter((p) => p.category === activeCategory.value)
})

// ================= [라이트박스 모달 상태 관리] =================
const isModalOpen = ref(false)
const currentImages = ref([])
const currentIndex = ref(0)

const currentLargeImage = computed(() => {
  if (!currentImages.value.length) return ''
  const imgUrl = currentImages.value[currentIndex.value] || ''
  return imgUrl.replace('w_800', 'w_1600')
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
