<template>
  <main class="min-h-screen bg-white pt-24 text-stone-900 md:pt-32">
    <!-- 1. 미니멀 에디토리얼 인트로 (HERO SECTION) -->
    <section class="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
      <!-- 최상단 메타 라벨 -->
      <div
        class="mb-14 flex items-center justify-between border-b border-stone-200 pb-4 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <div class="flex items-center gap-3">
          <span class="h-1.5 w-1.5 rounded-full bg-[#943939]"></span>
          <span>ONJ Residential Architecture</span>
        </div>
        <span class="hidden sm:inline">Living &amp; Technical Interior</span>
      </div>

      <!-- 메인 카피 & 브랜드 아이덴티티 그리드 -->
      <div
        class="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8"
      >
        <!-- 좌측 메인 영역 (8 cols) -->
        <div class="lg:col-span-8">
          <h1
            class="font-kimm text-3xl leading-tight tracking-tight sm:text-5xl lg:text-[54px]"
          >
            <span class="block font-bold text-stone-400"
              >오래 머물수록 편안한 집,</span
            >
            <span class="mt-1 block font-bold text-stone-800"
              >원칙을 지키는 정밀 시공.</span
            >
          </h1>

          <p
            class="mt-8 max-w-xl text-sm leading-relaxed font-light text-stone-500 sm:text-base"
          >
            정밀한 자재 스펙서와 거품 없는 정직한 단가로 불필요한 분쟁을
            줄입니다.<br class="hidden sm:inline" />
            실내건축공사업 면허업체로서 유행을 넘어 오래도록 변함없는 보금자리를
            완성합니다.
          </p>
        </div>

        <!-- 우측 브랜드 영역 (4 cols) -->
        <div
          class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
        >
          <div>
            <p
              class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
            >
              BETTER LIVING, SOLID STANDARDS
            </p>
            <p
              class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
            >
              LIFE ON.
            </p>
          </div>

          <p class="mt-6 text-xs leading-relaxed font-light text-stone-400">
            삶에 맞춘 일상 설계와 검증된 기술팀의 정밀 시공 솔루션.<br />
            우리 가족이 오래 머물 공간의 기본을 만듭니다.
          </p>
        </div>
      </div>

      <!-- 3대 핵심 지표 라인 -->
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

    <!-- 2. 주거공간 포트폴리오 섹션 -->
    <section
      class="w-full border-t border-stone-100 bg-white px-5 py-12 md:py-20"
    >
      <div class="mx-auto max-w-7xl">
        <!-- 포트폴리오 상단 헤더 -->
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
              주거공간 현장
            </h2>
          </div>
          <span class="font-mono text-xs text-stone-400">
            Total {{ residentialProjects.length }} Projects
          </span>
        </div>

        <!-- 분리된 공통 컴포넌트 호출 -->
        <ProjectList :projects="residentialProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { residentialProjects } from '@/data/residential'
import ProjectList from '@/components/ProjectList.vue'
</script>
