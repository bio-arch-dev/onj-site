<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  images: { type: Array, required: true },
  initialIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['close', 'update:initialIndex'])

// 현재 보고 있는 고해상도(w_1600) 이미지 URL
const currentLargeImage = computed(() => {
  if (!props.images.length) return ''
  const imgUrl = props.images[props.initialIndex] || ''
  return imgUrl.replace('w_800', 'w_1600')
})

const prevSlide = () => {
  if (props.initialIndex > 0) {
    emit('update:initialIndex', props.initialIndex - 1)
  }
}

const nextSlide = () => {
  if (props.initialIndex < props.images.length - 1) {
    emit('update:initialIndex', props.initialIndex + 1)
  }
}

// 키보드 조작 지원 (좌/우 방향키, ESC)
const handleKeydown = (e) => {
  if (!props.isOpen) return
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// 모바일 터치 스와이프 감지
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

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 select-none md:p-10"
      @click.self="emit('close')"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- 상단 헤더: 카운터 & 닫기 버튼 -->
      <div
        class="fixed top-6 right-6 left-6 z-110 flex items-center justify-between text-white"
      >
        <span
          class="font-SUIT rounded-full bg-black/40 px-3 py-1 text-xs tracking-wider md:text-sm"
        >
          {{ initialIndex + 1 }} / {{ images.length }}
        </span>
        <button
          @click="emit('close')"
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

      <!-- 이전 버튼 -->
      <button
        v-if="initialIndex > 0"
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

      <!-- 다음 버튼 -->
      <button
        v-if="initialIndex < images.length - 1"
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
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
