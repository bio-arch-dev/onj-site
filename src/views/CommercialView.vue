<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <CategoryHero
      meta-tag="ONJ Commercial Architecture"
      sub-tag="Technical Interior & Construction"
      title-light="매출을 만드는 기획,"
      title-dark="기준을 지키는 기술시공."
      badge-title="Beyond Vision, Into Space"
      brand-logo-text="BRAND ON."
      brand-desc="브랜드의 시작과 성장을 위한 상업공간 솔루션. 프랜차이즈 노하우로 설계하고 기준에 맞게 시공합니다."
    >
      <template #description>
        1호점 본점 기획부터 시방서 준수와 까다로운 감리, 공무까지 완벽하게
        대응합니다. 실내건축공사업 면허업체로서 브랜드 가치를 지속 가능한
        공간으로 실현합니다.
      </template>
    </CategoryHero>

    <!-- 포트폴리오 섹션 -->
    <section
      class="w-full border-t border-stone-100 bg-white px-5 py-12 md:py-20"
    >
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span
              class="font-mono text-[10px] tracking-[0.2em] text-[#943939] uppercase"
            >
              Selected Works
            </span>
            <h2
              class="font-kimm mt-1 text-2xl font-normal text-stone-400 sm:text-3xl"
            >
              상업공간 현장
            </h2>
          </div>

          <!-- 카테고리 필터 유지 -->
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

        <ProjectList :projects="filteredProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { commercialProjects } from '@/data/commercial'
import ProjectList from '@/components/ProjectList.vue'
import CategoryHero from '@/components/CategoryHero.vue'

const categories = ['전체', '프랜차이즈 F&B', '미용실', '기타']
const activeCategory = ref('전체')

const filteredProjects = computed(() => {
  if (activeCategory.value === '전체') return commercialProjects
  return commercialProjects.filter((p) => p.category === activeCategory.value)
})
</script>
