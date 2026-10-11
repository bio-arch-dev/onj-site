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
          <span>ONJ Public Architecture</span>
        </div>
        <span class="hidden sm:inline">Public &amp; Corporate Projects</span>
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
              >시방서와 감리기준을 준수하는,</span
            >
            <span class="mt-1 block font-bold text-stone-800"
              >원칙 중심의 공무 기술시공.</span
            >
          </h1>
          <p
            class="mt-8 max-w-xl text-sm leading-relaxed font-light text-stone-500 sm:text-base"
          >
            실내건축공사업 정식 면허업체로서 공공기관, 청소년시설,
            복합문화공간을 정밀 시공합니다.<br class="hidden sm:inline" />
            정확한 내역 산출과 투명한 공무 서류 대응, 설계 도면 그대로의 품질
            시공을 보장합니다.
          </p>
        </div>

        <div
          class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
        >
          <div>
            <p
              class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
            >
              CERTIFIED LICENSE, TRANSPARENT WORK
            </p>
            <p
              class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
            >
              PUBLIC ON.
            </p>
          </div>
          <p class="mt-6 text-xs leading-relaxed font-light text-stone-400">
            관공서 입찰 및 계약 규정에 맞춘 체계적인 공정 관리와 하자 보증
            시스템을 약속합니다.
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
              License
            </p>
            <p
              class="font-kimm mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
            >
              실내건축
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
              관공사·공공 현장
            </h2>
          </div>
          <span class="font-mono text-xs text-stone-400">
            Total {{ publicProjects.length }} Projects
          </span>
        </div>

        <!-- 분리된 공통 컴포넌트 호출 -->
        <ProjectList :projects="publicProjects" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { publicProjects } from '@/data/public'
import ProjectList from '@/components/ProjectList.vue'
</script>
