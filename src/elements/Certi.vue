<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const modules = [Pagination, Autoplay, FreeMode]

// Cloudinary URL을 여기에 순서대로 넣어줘
const certs = [
  {
    title: '사업자등록증',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867800/251216_%EC%98%A8%EC%9E%AC%EC%82%AC%EC%97%85%EC%9E%90%EB%93%B1%EB%A1%9D%EC%A6%9D_1_page-0001_aq15qy.jpg',
  },
  {
    title: '건설업등록증',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867796/251216_%EA%B1%B4%EC%84%A4%EC%97%85%EB%93%B1%EB%A1%9D%EC%A6%9D_%EC%98%A8%EC%9E%AC_page-0001_s3xpdb.jpg',
  },
  {
    title: '여성기업확인서',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867789/2026_%EC%97%AC%EC%84%B1%EA%B8%B0%EC%97%85%ED%99%95%EC%9D%B8%EC%84%9C_%EC%98%A8%EC%9E%AC_page-0001_o0nb4i.jpg',
  },
  {
    title: '표창장',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867447/221129_%EC%A4%91%EA%B8%B0%EC%B2%AD%ED%8F%AC%EC%83%81_nclfnf.jpg',
  },
  {
    title: '표창장',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867856/241121_%EB%8C%80%EA%B5%AC%ED%85%8C%ED%81%AC%EB%85%B8%ED%8C%8C%ED%81%AC_%EB%8C%80%EA%B5%AC%EC%A7%80%EC%97%AD%EB%B3%B8%EB%B6%80%EC%9E%A5%EC%83%81_page-0001_bmylgo.jpg',
  },
  {
    title: '표창장',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772868669/%ED%91%9C%EC%B0%BD%EC%9E%A5_phryuf.jpg',
  },
]
</script>

<template>
  <section class="w-full bg-white px-5 pb-20">
    <div class="mx-auto max-w-7xl">
      <swiper
        :modules="modules"
        :loop="true"
        :speed="6000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :slidesPerView="2"
        :spaceBetween="15"
        :breakpoints="{
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }"
        class="cert-swiper"
      >
        <swiper-slide v-for="(cert, idx) in certs" :key="idx">
          <div class="flex flex-col items-center px-2 py-4">
            <div
              class="group mb-4 flex aspect-3/4 w-full items-center justify-center overflow-hidden border border-gray-100 bg-gray-50 shadow-sm"
            >
              <img
                :src="cert.url"
                :alt="cert.title"
                class="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p
              class="text-center font-sans text-[11px] font-light tracking-widest text-gray-500 md:text-xs"
            >
              {{ cert.title }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.cert-swiper {
  --swiper-theme-color: #943939;
  padding-bottom: 60px !important;
}
:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
}
</style>
