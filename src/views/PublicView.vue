<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <CategoryHero
      meta-tag="ONJ Public Architecture"
      sub-tag="Public & Corporate Projects"
      title-light="기획부터 서류까지,"
      title-dark="틀을 깨는 관공사 디자인."
      badge-title="CERTIFIED LICENSE, TRANSPARENT WORK"
      brand-logo-text="STANDARD ON."
      brand-desc="관공서 입찰 및 계약 규정에 맞춘 체계적인 공정 관리와 하자 보증 시스템을 약속합니다."
    >
      <template #description>
        도면 없는 기획 단계부터 디자인 제안서와 적정 예산을 먼저 제시합니다.<br
          class="hidden sm:inline"
        />
        여성기업 수의계약과 빈틈없는 공무 서류로, 한정된 예산 안에서 관공서답지
        않은 감각적인 공간을 완성합니다.
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
            관공사·공공 현장
          </h2>
        </div>

        <ProjectList :projects="publicProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { publicProjects } from '@/data/public'
import ProjectList from '@/components/ProjectList.vue'
import CategoryHero from '@/components/CategoryHero.vue'
</script>
