<script setup>
import { onMounted, ref } from 'vue'

const onjAppear = ref(null)

onMounted(() => {
  // 1. 브라우저가 화면을 그릴 시간을 0.1초 정도 준 뒤에 감시 시작
  setTimeout(() => {
    const observerOptions = {
      // 2. threshold를 0으로 낮춰서 아주 조금만 보여도 바로 작동하게 함
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    }, observerOptions)

    if (onjAppear.value) observer.observe(onjAppear.value)
  }, 300) // 지연 0.3초
})
</script>

<template>
  <section class="relative w-full bg-white px-5 py-4">
    <div class="relative mx-auto max-w-7xl">
      <div class="absolute top-5 left-0 md:top-8">
        <span
          class="font-kimm text-sm tracking-widest text-gray-300 md:text-base"
        >
          01 / 소개
        </span>
      </div>
    </div>

    <div
      ref="onjAppear"
      class="fade-container mx-auto flex h-auto min-h-[30vh] max-w-5xl flex-col items-center justify-center py-14 md:flex-row md:gap-20 md:py-0"
    >
      <div class="fade-item on flex flex-col items-center text-center">
        <div class="mb-3 flex items-center gap-2">
          <span
            class="font-sans text-base font-extrabold tracking-[0.4em] text-gray-400"
            >ON :</span
          >
          <span class="font-sans text-xl font-normal text-gray-400">溫</span>
        </div>
        <p
          class="font-sans text-[13px] font-light tracking-widest whitespace-nowrap text-gray-500 md:text-sm"
        >
          사람을 위한 시스템을 켜다.
        </p>
      </div>

      <div
        class="fade-item divider mx-auto my-4 h-1 w-1 self-center rounded-full bg-gray-200 md:mx-0 md:my-0 md:h-12 md:w-px"
      ></div>

      <div class="fade-item jae flex flex-col items-center text-center">
        <div class="mb-3 flex items-center gap-2">
          <span
            class="font-sans text-xl font-bold tracking-[0.4em] text-gray-400"
            >JAE :</span
          >
          <span class="font-sans text-xl font-normal text-gray-400">技</span>
        </div>
        <p
          class="font-sans text-[13px] font-light tracking-widest whitespace-nowrap text-gray-500 md:text-sm"
        >
          정교한 기술로 본질을 짓다.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 모든 아이템의 기본 상태: 숨김 */
.fade-item {
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.12, 0, 0.39, 0);
}

/* 부모(.fade-container)에 .show가 붙으면 자식들이 순차적으로 나타남 */
.fade-container.show .fade-item.on {
  opacity: 1;
  transition-delay: 0.1s; /* ON이 가장 먼저 */
}

.fade-container.show .fade-item.divider {
  opacity: 1;
  transition-delay: 0.3s; /* 구분선은 중간에 */
}

.fade-container.show .fade-item.jae {
  opacity: 1;
  transition-delay: 0.5s; /* JAE는 마지막에 */
}
</style>
