<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <CategoryHero
      meta-tag="ONJ Medical Architecture"
      sub-tag="Clinic & Healthcare Space"
      title-light="환자와 의료진을 위한,"
      title-dark="정밀 의료공간 기술시공."
      badge-title="SAFE CLINIC, PRECISE STANDARD"
      brand-logo-text="CLINIC ON."
      brand-desc="의원 개원 및 병원 용도변경 행정 지원부터 직영 책임 준공까지 원스톱 솔루션을 제공합니다."
      stat3-label="Permit Pass"
    >
      <template #description>
        의료기관 개설 허가 기준과 소방법, 장애인 편의시설 규정을 완벽하게
        충족합니다.<br class="hidden sm:inline" />
        수술실 클린룸 공조, X-ray 차폐, 차음 설계 노하우로 안전하고 신뢰도 높은
        진료 환경을 완성합니다.
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
            병원·한의원 현장
          </h2>
        </div>

        <ProjectList :projects="medicalProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { medicalProjects } from '@/data/medical'
import ProjectList from '@/components/ProjectList.vue'
import CategoryHero from '@/components/CategoryHero.vue'
</script>
