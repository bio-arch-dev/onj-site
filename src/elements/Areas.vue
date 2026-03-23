<script setup>
const businessItems = [
  {
    icon: 'medical_services',
    title: 'SYSTEM ON.',
    desc: '병원, 수술실, 클린룸',
    pointColor: 'text-[#1A434E]', // 의관/의녀의 심옥색
  },
  {
    icon: 'corporate_fare',
    title: 'STANDARD ON.',
    desc: '교육, 공공, 공항',
    sub: '여성기업',
    pointColor: 'text-[#943939]', // 온재레드
  },
  {
    icon: 'storefront',
    title: 'BRAND ON.',
    desc: '프랜차이즈, 요식업, 뷰티',
    pointColor: 'text-[#926A2D]', // 전통 유기의 황동색
  },
  {
    icon: 'night_shelter',
    title: 'LIFE ON.',
    desc: '아파트, 주택, 별장',
    pointColor: 'text-[#A3A3A3]', // 연그레이
  },
]
</script>

<template>
  <section id="company" class="w-full bg-white px-4 py-8 md:py-32">
    <div class="mx-auto max-w-6xl">
      <div class="mb-8 flex flex-col items-center text-center md:mb-24">
        <span
          class="font-suit mb-1 text-xl font-bold tracking-[0.4em] text-gray-300 md:text-4xl"
        >
          SPACE ON
        </span>

        <div class="mt-2 h-[1.5px] w-9 bg-[#943939] md:w-12"></div>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-10">
        <div
          v-for="item in businessItems"
          :key="item.title"
          class="flex flex-col items-center rounded-3xl bg-[#F9F9F9] p-5 text-center shadow-[3px_4px_10px_rgb(0,0,0,0.13)] md:flex-row md:items-center md:rounded-[3rem] md:p-16 md:text-left"
        >
          <div class="shrink-0 md:mr-10">
            <span
              class="material-symbols-outlined text-3xl md:text-7xl"
              :class="item.pointColor"
            >
              {{ item.icon }}
            </span>
          </div>

          <div class="flex flex-col gap-1 md:gap-4">
            <h3
              class="font-sans text-[11px] font-black tracking-[0.15em] md:text-4xl"
              :class="item.pointColor"
            >
              {{ item.title }}
              <span
                v-if="item.sub"
                class="block text-[7px] font-bold opacity-50 md:ml-3 md:inline md:text-base"
              >
                ({{ item.sub }})
              </span>
            </h3>

            <p
              class="font-sans text-[9px] leading-tight font-bold tracking-tight text-gray-400 md:text-xl md:leading-relaxed"
            >
              {{ item.desc }}
            </p>
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
.material-symbols-outlined {
  /* 아이콘의 굵기를 강조하여 고급스러운 인장 느낌 부여 */
  font-variation-settings:
    'wght' 600,
    'opsz' 48;
}
</style>
