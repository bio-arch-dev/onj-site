<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const modules = [Pagination, Autoplay, FreeMode]

// Cloudinary URL 데이터셋
const certs = [
  {
    title: '사업자등록증',
    alt: '실내건축 전문 대구 인테리어 업체 온재 사업자등록증',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867800/251216_%EC%98%A8%EC%9E%AC%EC%82%AC%EC%97%85%EC%9E%90%EB%93%B1%EB%A1%9D%EC%A6%9D_1_page-0001_aq15qy.jpg',
  },
  {
    title: '건설업등록증',
    alt: '대구동구 실내건축공사업 면허 보유 증명서 - 온재',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867796/251216_%EA%B1%B4%EC%84%A4%EC%97%85%EB%93%B1%EB%A1%9D%EC%A6%9D_%EC%98%A8%EC%9E%AC_page-0001_s3xpdb.jpg',
  },
  {
    title: '여성기업확인서',
    alt: '중소벤처기업부 인증 여성기업 확인서 - 대구동구인테리어 온재',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867789/2026_%EC%97%AC%EC%84%B1%EA%B8%B0%EC%97%85%ED%99%95%EC%9D%B8%EC%84%9C_%EC%98%A8%EC%9E%AC_page-0001_o0nb4i.jpg',
  },
  {
    title: '표창장',
    alt: '중소벤처기업청 대구지역본부장상 수상 내역 - 우수기업 온재',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867447/221129_%EC%A4%91%EA%B8%B0%EC%B2%AD%ED%8F%AC%EC%83%81_nclfnf.jpg',
  },
  {
    title: '표창장',
    alt: '대구테크노파크 대구지역본부장상 수상 내역 - 우수기업 온재',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772867856/241121_%EB%8C%80%EA%B5%AC%ED%85%8C%ED%81%AC%EB%85%B8%ED%8C%8C%ED%81%AC_%EB%8C%80%EA%B5%AC%EC%A7%80%EC%97%AD%EB%B3%B8%EB%B6%80%EC%9E%A5%EC%83%81_page-0001_bmylgo.jpg',
  },
  {
    title: '표창장',
    alt: '스타트업 기업인 협회 협회장상 수상 내역 - 우수기업 온재',
    url: 'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772868669/%ED%91%9C%EC%B0%BD%EC%9E%A5_phryuf.jpg',
  },
]

// ================= [라이트박스 모달 상태 관리] =================
const isModalOpen = ref(false)
const currentIndex = ref(0)

// 모달 열기
const openModal = (index) => {
  currentIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

// 모달 닫기
const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// 이전/다음 슬라이드 핸들러
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (currentIndex.value < certs.length - 1) {
    currentIndex.value++
  }
}

// 키보드 조작 이벤트 (좌/우 방향키, ESC)
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

// 모바일 터치 스와이프 핸들러
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  const diffX = touchStartX - touchEndX

  if (diffX > 50) {
    nextSlide()
  } else if (diffX < -50) {
    prevSlide()
  }
}
// ============================================================
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
          <div
            class="flex cursor-pointer flex-col items-center px-2 py-4"
            @click="openModal(idx)"
          >
            <div
              class="group mb-4 flex aspect-3/4 w-full items-center justify-center overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition hover:shadow-md"
            >
              <img
                :src="cert.url"
                :alt="cert.alt || cert.title"
                loading="lazy"
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

    <!-- 라이트박스 확대 모달 -->
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 select-none md:p-10"
        @click.self="closeModal"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- 상단 헤더: 제목/카운터 및 닫기 버튼 -->
        <div
          class="fixed top-6 right-6 left-6 z-110 flex items-center justify-between text-white"
        >
          <div class="flex items-center gap-2">
            <span
              class="rounded-full bg-black/50 px-3 py-1 font-sans text-xs tracking-wider md:text-sm"
            >
              {{ currentIndex + 1 }} / {{ certs.length }}
            </span>
            <span
              class="hidden font-sans text-sm font-medium text-gray-200 md:inline-block"
            >
              {{ certs[currentIndex].title }}
            </span>
          </div>
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

        <!-- 모달 메인 이미지 컨테이너 -->
        <div class="flex max-h-[85vh] max-w-[90vw] flex-col items-center">
          <img
            :src="certs[currentIndex].url"
            :alt="certs[currentIndex].alt || certs[currentIndex].title"
            class="max-h-[80vh] max-w-full rounded object-contain shadow-2xl transition-all duration-300"
          />
          <p
            class="mt-3 text-center text-sm font-light tracking-wider text-gray-300 md:hidden"
          >
            {{ certs[currentIndex].title }}
          </p>
        </div>

        <!-- 우측 다음 버튼 -->
        <button
          v-if="currentIndex < certs.length - 1"
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
.cert-swiper {
  --swiper-theme-color: #943939;
  padding-bottom: 60px !important;
}
:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
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
