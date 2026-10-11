<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <!-- 1. HERO SECTION -->
    <section class="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
      <div
        class="mb-14 flex items-center justify-between border-b border-stone-200 pb-4 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <div class="flex items-center gap-3">
          <span class="h-1.5 w-1.5 rounded-full bg-[#943939]"></span>
          <span>ONJ Commercial Architecture</span>
        </div>
        <span class="hidden sm:inline"
          >Technical Interior &amp; Construction</span
        >
      </div>

      <div
        class="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8"
      >
        <div class="lg:col-span-8">
          <h1
            class="font-kimm text-3xl leading-tight tracking-tight sm:text-5xl lg:text-[54px]"
          >
            <span class="block font-normal text-stone-400"
              >매출을 만드는 기획,</span
            >
            <span class="mt-1 block font-bold text-stone-800"
              >기준을 지키는 기술시공.</span
            >
          </h1>
          <p
            class="mt-8 max-w-xl text-sm leading-relaxed font-light text-stone-500 sm:text-base"
          >
            1호점 본점 기획부터 시방서 준수와 까다로운 감리, 공무까지 완벽하게
            대응합니다. 실내건축공사업 면허업체로서 브랜드 가치를 지속 가능한
            공간으로 실현합니다.
          </p>
        </div>

        <div
          class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
        >
          <div>
            <p
              class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
            >
              Beyond Vision, Into Space
            </p>
            <p
              class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
            >
              BRAND ON.
            </p>
          </div>
          <p class="mt-6 text-xs leading-relaxed font-light text-stone-400">
            브랜드의 시작과 성장을 위한 상업공간 솔루션. 프랜차이즈 노하우로
            설계하고 기준에 맞게 시공합니다.
          </p>
        </div>
      </div>

      <!-- 3대 핵심 지표 -->
      <div class="border-t border-stone-200/80 pt-8">
        <div class="grid max-w-2xl grid-cols-3 gap-8">
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Since
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
            >
              2007
            </p>
          </div>
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Based In
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
            >
              Daegu
            </p>
          </div>
          <div>
            <p
              class="font-mono text-[10px] tracking-widest text-stone-400 uppercase"
            >
              Delivery
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-bold text-[#943939] sm:text-3xl"
            >
              100%
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. 포트폴리오 섹션 -->
    <section
      class="w-full border-t border-stone-100 bg-white px-5 py-12 md:py-20"
    >
      <div class="mx-auto max-w-7xl">
        <!-- 상단 헤더 & 필터 -->
        <div
          class="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span
              class="font-mono text-[10px] tracking-[0.2em] text-[#943939] uppercase"
              >Selected Works</span
            >
            <h2
              class="font-kimm mt-1 text-2xl font-normal text-stone-400 sm:text-3xl"
            >
              상업공간 현장
            </h2>
          </div>

          <div
            class="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs sm:pb-0"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'rounded-full px-3.5 py-1.5 text-xs whitespace-nowrap transition-all duration-200',
                activeCategory === cat
                  ? 'bg-stone-300 font-semibold text-stone-900'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800',
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- 분리된 공통 컴포넌트 호출 -->
        <ProjectList :projects="filteredProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { commercialProjects } from '@/data/commercial'
import ProjectList from '@/components/ProjectList.vue'

const categories = ['전체', '프랜차이즈 F&B', '미용실']
const activeCategory = ref('전체')

const filteredProjects = computed(() => {
  if (activeCategory.value === '전체') return commercialProjects
  return commercialProjects.filter((p) => p.category === activeCategory.value)
})
</script>
