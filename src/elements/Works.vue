<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// 프로젝트 데이터 (12개 현장 예시)
const projects = [
  {
    title: 'CHOI CHANG-HYEOK ORTHOPEDIC SURGERY',
    location: '2025_DAEGU',
    comment:
      '최창혁 정형외과는 우드와 화이트를 중심으로 따뜻하고 편안한 분위기를 강조한 공간입니다. 환자들의 심리적 안정을 최우선으로 설계되었습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872427/1_seltu6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872444/3_vfffsu.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872435/9_v1bryl.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872473/4_l2f3sx.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872472/8_cisdi6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872474/7_jpzh8l.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872473/11_pw7aru.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872513/DSC07385_fjxlcd.jpg',
    ],
  },
  // ... 추가 11개 현장
]
</script>

<template>
  <section class="w-full bg-white px-5 py-12 md:py-32">
    <div class="mx-auto max-w-7xl">
      <div
        v-for="(project, pIdx) in projects"
        :key="pIdx"
        class="mb-24 md:mb-40"
      >
        <div
          class="mb-8 flex flex-col gap-2 border-l-2 border-gray-900 pl-4 md:mb-12"
        >
          <h3
            class="font-sans text-[14px] font-bold tracking-[0.2em] text-gray-800 md:text-xl"
          >
            {{ project.title }}
          </h3>
          <div class="flex items-center gap-3">
            <span
              class="font-sans text-[10px] tracking-widest text-gray-400 md:text-xs"
            >
              {{ project.location }}
            </span>
          </div>
          <p
            class="mt-4 hidden max-w-2xl font-sans text-sm leading-relaxed font-light break-keep text-gray-500 md:block"
          >
            {{ project.comment }}
          </p>
        </div>

        <div class="hidden grid-cols-4 gap-3 md:grid">
          <div
            v-for="(img, iIdx) in project.images"
            :key="iIdx"
            class="aspect-[4/3] overflow-hidden bg-gray-50"
          >
            <img
              :src="img"
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
                  class="aspect-[4/3] overflow-hidden bg-gray-50"
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
  </section>
</template>

<style scoped>
.project-swiper {
  --swiper-theme-color: #943939;
}
/* 모바일에서 점 위치 조절 */
:deep(.swiper-pagination) {
  bottom: 0 !important;
}
</style>
