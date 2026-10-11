<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <CategoryHero
      meta-tag="ONJ Residential Architecture"
      sub-tag="Living & Technical Interior"
      title-light="오래 머물수록 편안한 집,"
      title-dark="원칙을 지키는 정밀 시공."
      badge-title="BETTER LIVING, SOLID STANDARDS"
      brand-logo-text="LIFE ON."
      brand-desc="삶에 맞춘 일상 설계와 검증된 기술팀의 정밀 시공 솔루션. 우리 가족이 오래 머물 공간의 기본을 만듭니다."
    >
      <template #description>
        정밀한 자재 스펙서와 거품 없는 정직한 단가로 불필요한 분쟁을
        줄입니다.<br class="hidden sm:inline" />
        실내건축공사업 면허업체로서 유행을 넘어 오래도록 변함없는 보금자리를
        완성합니다.
      </template>
    </CategoryHero>

    <!-- 포트폴리오 섹션 -->
    <section
      class="w-full border-t border-stone-100 bg-white px-5 py-12 md:py-20"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mb-14">
          <span
            class="font-mono text-[10px] tracking-[0.2em] text-[#943939] uppercase"
          >
            Selected Works
          </span>
          <h2
            class="font-kimm mt-1 text-2xl font-normal text-stone-400 sm:text-3xl"
          >
            주거공간 현장
          </h2>
        </div>

        <ProjectList :projects="residentialProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { residentialProjects } from '@/data/residential'
import ProjectList from '@/components/ProjectList.vue'
import CategoryHero from '@/components/CategoryHero.vue'
</script>
