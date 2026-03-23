<script setup>
const processes = [
  { en: 'CONSULTING', ko: '상담 및 견적 제안' },
  { en: 'VISIT & SURVEY', ko: '현장 방문 및 정밀 실측' },
  { en: 'DESIGN & MATERIAL', ko: '맞춤 설계 및 자재 선정' },
  { en: 'CONSTRUCTION', ko: '정직하고 세밀한 시공' },
]
</script>

<template>
  <section id="contact" class="w-full bg-white px-5 py-20 md:py-40">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 flex flex-col items-center text-center md:mb-32">
        <span
          class="font-kimm mb-2 text-[8px] tracking-[0.4em] text-gray-300 md:text-sm"
        >
          04 / CONTACT
        </span>
        <h2
          class="font-kimm text-3xl font-bold tracking-tight text-gray-900 md:text-6xl"
        >
          공간을 온(On)하다
        </h2>
        <div class="mt-6 h-[1.5px] w-8 bg-red-800 md:w-20"></div>
      </div>

      <div class="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-32">
        <div class="flex flex-col gap-8 md:gap-12">
          <h3
            class="font-kimm text-lg tracking-widest text-gray-900 md:text-xl"
          >
            PROCESS
          </h3>
          <div class="grid grid-cols-1 gap-8 md:gap-10">
            <div
              v-for="(step, index) in processes"
              :key="index"
              class="group flex items-center gap-6"
            >
              <span
                class="font-sans text-3xl font-black text-gray-100 transition-colors group-hover:text-red-100 md:text-5xl"
              >
                0{{ index + 1 }}
              </span>
              <div class="flex flex-col">
                <span
                  class="font-sans text-[10px] font-black tracking-widest text-red-800 md:text-xs"
                  >{{ step.en }}</span
                >
                <span
                  class="font-sans text-base font-bold text-gray-800 md:text-2xl"
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
              class="font-kimm text-lg tracking-widest text-red-800 md:text-xl"
            >
              INQUIRY
            </h3>
            <div
              class="flex flex-col gap-3 font-sans text-2xl font-black text-gray-900 md:text-4xl"
            >
              <a
                href="tel:02-xxx-xxxx"
                class="transition-colors hover:text-red-800"
                >02. XXX. XXXX</a
              >
              <a
                href="tel:010-xxxx-xxxx"
                class="transition-colors hover:text-red-800"
                >010. XXXX. XXXX</a
              >
              <p
                class="mt-2 text-sm font-light tracking-wide text-gray-400 md:text-lg"
              >
                contact@onj.kr
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <h4
              class="font-sans text-[10px] font-black tracking-widest text-gray-300 uppercase md:text-xs"
            >
              Working Hours
            </h4>
            <p class="font-sans text-sm font-bold text-gray-600 md:text-lg">
              평일 09:00 — 18:00 <br class="md:hidden" />
              <span class="ml-2 font-light text-gray-300 md:ml-4"
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
  font-family: 'KIMM_Bold', sans-serif;
}
</style>
