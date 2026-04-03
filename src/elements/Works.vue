<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { projects } from '@/data/projects'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// 라이트박스 상태관리
const isModalOpen = ref(false)
const selectedImage = ref('')

// 이미지 열기
const openModal = (imgUrl) => {
  selectedImage.value = imgUrl.replace('w_800', 'w_1600')
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

// 이미지 닫기 함수
const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto' // 스크롤 복구
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

        <div class="hidden grid-cols-4 gap-3 md:grid">
          <div
            v-for="(img, iIdx) in project.images"
            :key="iIdx"
            class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
            @click="openModal(img)"
          >
            <img
              :src="img"
              :alt="project.altTexts?.[iIdx] || project.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

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
                  @click="openModal(project.images[groupIdx + offset])"
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

    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-10"
        @click.self="closeModal"
      >
        <button
          @click="closeModal"
          class="fixed top-6 right-6 z-110 text-white/70 transition-colors hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
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

        <img
          :src="selectedImage"
          class="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          alt="확대 이미지"
        />
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
