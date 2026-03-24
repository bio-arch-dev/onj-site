<script setup>
const processes = [
  { en: 'CONSULTING', ko: '전화 상담 및 일정 확인' },
  { en: 'VISIT', ko: '현장 방문 미팅' },
  { en: 'DESIGN', ko: '맞춤 설계 및 견적 제안' },
  { en: 'CONSTRUCTION', ko: '계약서 작성 및 시공' },
]
</script>

<template>
  <section id="contact" class="w-full bg-white px-5 py-20 md:py-40">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative mb-10 flex flex-col items-center text-center md:mb-20"
      >
        <span
          class="font-kimm absolute top-0 left-0 mb-4 text-[8px] tracking-[0.4em] text-gray-300 md:text-sm"
        >
          04 / 문의
        </span>
        <h2
          class="font-SUIT mt-6 mb-3 text-2xl font-bold tracking-[0.4em] text-gray-400 md:mt-10 md:text-5xl"
        >
          SPACE ON.
        </h2>
        <div class="mt-6 h-[1.5px] w-8 bg-red-800 md:w-20"></div>
      </div>

      <div class="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-32">
        <div class="flex flex-col gap-4 md:gap-12">
          <h3
            class="font-kimm text-lg tracking-widest text-gray-400 md:text-xl"
          >
            순서
          </h3>
          <div class="grid grid-cols-1 gap-5 md:gap-10">
            <div
              v-for="(step, index) in processes"
              :key="index"
              class="group flex items-center"
            >
              <span
                class="font-SUIT text-3xl font-black text-gray-200 transition-colors group-hover:text-red-100 md:text-5xl"
              >
                0{{ index + 1 }}
              </span>
              <div class="flex flex-col">
                <span
                  class="font-SUIT text-[12px] font-black tracking-widest text-[#943939] md:text-xs"
                  >{{ step.en }}</span
                >
                <span
                  class="font-SUIT text-base font-bold text-gray-400 md:text-2xl"
                  >{{ step.ko }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col gap-12 border-t border-gray-100 pt-16 md:border-t-0 md:border-l md:pt-0 md:pl-24"
        >
          <div class="flex flex-col gap-6">
            <h3
              class="font-kimm text-lg tracking-widest text-[#943939] md:text-xl"
            >
              연락
            </h3>
            <div
              class="flex flex-col gap-3 font-sans text-2xl font-black text-gray-700 md:text-4xl"
            >
              <a
                href="tel:053-963-6189"
                class="transition-colors hover:text-[#943939]"
                >053. 963. 6189</a
              >
              <a
                href="tel:010-3819-6189"
                class="transition-colors hover:text-[#943939]"
                >010. 3819. 6189</a
              >
              <p
                class="mt-2 text-sm font-light tracking-wide text-gray-400 md:text-lg"
              >
                ylee.onj@gmail.com
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <h4
              class="font-sans text-[12px] font-black tracking-widest text-gray-300 uppercase md:text-sm"
            >
              Working Hours
            </h4>
            <p class="font-sans text-sm font-bold text-gray-700 md:text-lg">
              평일 09:00 — 20:00 <br class="md:hidden" />
              <span class="ml-2 font-light text-gray-400 md:ml-4"
                >(주말/공휴일 휴무)</span
              >
            </p>
          </div>

          <div class="mt-4 flex gap-4 opacity-30 grayscale md:mt-10">
            <div class="h-8 w-8 rounded-full bg-gray-200"></div>
            <div class="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-kimm {
  font-family: 'KIMM_Bold', SUIT;
}
</style>
