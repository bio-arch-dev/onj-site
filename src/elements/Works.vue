<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { projects } from '@/data/projects'
import 'swiper/css'
import 'swiper/css/pagination'

// 모달은 클릭 시점에만 불러오도록 지연 로드
const ImageModal = defineAsyncComponent(
  () => import('@/components/ImageModal.vue'),
)

const modules = [Pagination]

// 모달 상태 관리
const isModalOpen = ref(false)
const currentImages = ref([])
const currentIndex = ref(0)

// Cloudinary 최적화 유틸 함수
// URL에 기존 변환 파라미터가 이미 있어도 정규식으로 안전하게 원하는 규격으로 교체
const getOptimizedImage = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url
  return url.replace(
    /\/upload\/(?:.*\/)?(v\d+\/)/,
    `/upload/f_auto,q_auto,w_${width},c_limit/$1`,
  )
}

// 모달 열 때 1600px 리사이즈 파라미터를 적용하여 원본 고용량 트래픽 누수 차단
const openModal = (images, index) => {
  currentImages.value = images.map((img) => getOptimizedImage(img, 1600))
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
</script>

<template>
  <section id="works" class="w-full bg-white px-5 py-12 md:py-32">
    <div class="mx-auto max-w-7xl">
      <div
        v-for="(project, pIdx) in projects"
        :key="pIdx"
        class="mb-24 md:mb-40"
      >
        <!-- 1. 현장 정보 타이틀 & 코멘트 -->
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

        <!-- 2. 데스크톱 그리드 (600px 최적화) -->
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

        <!-- 3. 모바일 스와이퍼 그리드 (400px 최적화) -->
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
                  v-show="project.images[groupIdx + offset]"
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
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- 4. 현장 외부 링크 -->
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
    </div>

    <!-- v-if로 실제 열릴 때만 마운트 및 최적화된 배열 전달 -->
    <ImageModal
      v-if="isModalOpen"
      :is-open="isModalOpen"
      :images="currentImages"
      v-model:initial-index="currentIndex"
      @close="closeModal"
    />
  </section>
</template>
