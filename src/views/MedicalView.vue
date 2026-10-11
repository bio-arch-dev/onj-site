<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <!-- 1. HERO SECTION -->
    <section class="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
      <!-- 최상단 메타 라벨 -->
      <div
        class="mb-14 flex items-center justify-between border-b border-stone-200 pb-4 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <div class="flex items-center gap-3">
          <span class="h-1.5 w-1.5 rounded-full bg-[#943939]"></span>
          <span>ONJ Medical Architecture</span>
        </div>
        <span class="hidden sm:inline">Clinic &amp; Healthcare Space</span>
      </div>

      <!-- 메인 카피 & 브랜드 아이덴티티 그리드 -->
      <div
        class="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8"
      >
        <div class="lg:col-span-8">
          <h1
            class="font-kimm text-3xl leading-tight tracking-tight sm:text-5xl lg:text-[54px]"
          >
            <span class="block font-bold text-stone-400"
              >의료법과 기준을 준수하는,</span
            >
            <span class="mt-1 block font-bold text-stone-800"
              >정밀 의료공간 기술시공.</span
            >
          </h1>
          <p
            class="mt-8 max-w-xl text-sm leading-relaxed font-light text-stone-500 sm:text-base"
          >
            의료기관 개설 허가 기준과 소방법, 장애인 편의시설 규정을 완벽하게
            충족합니다.<br class="hidden sm:inline" />
            수술실 클린룸 공조, X-ray 차폐, 차음 설계 노하우로 안전하고 신뢰도
            높은 진료 환경을 완성합니다.
          </p>
        </div>

        <div
          class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
        >
          <div>
            <p
              class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
            >
              SAFE CLINIC, PRECISE STANDARD
            </p>
            <p
              class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
            >
              CLINIC ON.
            </p>
          </div>
          <p class="mt-6 text-xs leading-relaxed font-light text-stone-400">
            의원 개원 및 병원 용도변경 행정 지원부터 직영 책임 준공까지 원스톱
            솔루션을 제공합니다.
          </p>
        </div>
      </div>

      <!-- 핵심 지표 -->
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
              Permit Pass
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
        <div class="mb-14 flex items-end justify-between">
          <div>
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
          <span class="font-mono text-xs text-stone-400">
            Total {{ medicalProjects.length }} Projects
          </span>
        </div>

        <!-- 분리된 공통 컴포넌트 호출 -->
        <ProjectList :projects="medicalProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { medicalProjects } from '@/data/medical'
import ProjectList from '@/components/ProjectList.vue'
</script>
