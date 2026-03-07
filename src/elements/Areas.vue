<script setup>
const businessItems = [
  { icon: 'flag', title: 'BRAND ON.', desc: '프랜차이즈, 요식업, 뷰티' },
  { icon: 'home', title: 'LIFE ON.', desc: '아파트, 단독/상가주택, 별장' },
  { icon: 'settings', title: 'SYSTEM ON.', desc: '병원, 수술실, 중앙공급실' },
  {
    icon: 'domain',
    title: 'STANDARD ON.',
    desc: '교육시설, 공공센터, 공항',
    sub: '여성기업인증',
  },
]
</script>

<template>
  <section class="w-full bg-white px-5 py-12 md:py-32">
    <div class="relative mx-auto max-w-7xl">
      <div class="absolute -top-10 left-0 md:-top-16">
        <span
          class="font-kimm text-sm tracking-widest text-gray-300 md:text-base"
        >
          02 / 사업영역
        </span>
      </div>

      <div
        class="mx-auto grid max-w-4xl grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-16"
      >
        <div
          v-for="item in businessItems"
          :key="item.title"
          class="flex items-start gap-3 md:gap-5"
        >
          <span
            class="material-symbols-outlined text-[19px] font-light text-gray-400 md:text-3xl"
          >
            {{ item.icon }}
          </span>

          <div class="flex flex-col gap-0.5 md:gap-1">
            <h3
              class="font-sans text-[13px] font-bold tracking-[0.15em] text-gray-600 md:text-lg"
            >
              {{ item.title }}
              <span
                v-if="item.sub"
                class="ml-1 text-[8px] font-medium text-gray-300 md:text-[11px]"
              >
                ({{ item.sub }})
              </span>
            </h3>

            <p
              class="font-sans text-[9px] font-light tracking-widest text-gray-400 md:text-sm"
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
.material-symbols-outlined {
  font-variation-settings:
    'wght' 300,
    'opsz' 24;
}
</style>
