<template>
  <section class="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
    <!-- 1. 최상단 메타 라벨 -->
    <div
      class="mb-14 flex items-center justify-between border-b border-stone-200 pb-4 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
    >
      <div class="flex items-center gap-3">
        <span class="h-1.5 w-1.5 rounded-full bg-[#943939]"></span>
        <span>{{ metaTag }}</span>
      </div>
      <span class="hidden sm:inline">{{ subTag }}</span>
    </div>

    <!-- 2. 메인 카피 & 우측 브랜드 박스 그리드 -->
    <div
      class="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8"
    >
      <!-- 좌측 메인 카피 영역 (8 cols) -->
      <div class="lg:col-span-8">
        <h1
          class="font-kimm text-[21px] leading-snug tracking-tight sm:text-4xl md:text-5xl lg:text-[54px]"
        >
          <span class="block font-bold whitespace-nowrap text-stone-400">{{
            titleLight
          }}</span>
          <span
            class="mt-1.5 block font-bold whitespace-nowrap text-stone-800"
            >{{ titleDark }}</span
          >
        </h1>
        <p
          class="mt-8 max-w-xl text-sm leading-relaxed font-light break-keep text-stone-500 sm:text-base"
        >
          <slot name="description">{{ description }}</slot>
        </p>
      </div>

      <!-- 우측 브랜드 아이덴티티 영역 (4 cols) -->
      <div
        class="flex h-full flex-col justify-between lg:col-span-4 lg:border-l lg:border-stone-200/80 lg:pt-3 lg:pl-10"
      >
        <div>
          <p
            class="font-mono text-[11px] tracking-[0.25em] text-stone-400 uppercase"
          >
            {{ badgeTitle }}
          </p>
          <p
            class="font-kimm mt-2 text-2xl font-bold tracking-tight text-[#943939] sm:text-3xl"
          >
            {{ brandLogoText }}
          </p>
        </div>
        <p
          class="mt-6 text-xs leading-relaxed font-light break-keep text-stone-400"
        >
          {{ brandDesc }}
        </p>
      </div>
    </div>

    <!-- 3. 핵심 3대 지표 라인 (모바일 0.8배 축소: text-lg sm:text-2xl md:text-3xl) -->
    <div class="border-t border-stone-200/80 pt-6 sm:pt-8">
      <div class="grid max-w-2xl grid-cols-3 gap-4 sm:gap-8">
        <div>
          <p
            class="font-mono text-[9px] tracking-widest text-stone-400 uppercase sm:text-[10px]"
          >
            {{ stat1Label }}
          </p>
          <p
            class="font-kimm mt-0.5 text-lg font-semibold text-stone-800 sm:mt-1 sm:text-2xl md:text-3xl"
          >
            {{ stat1Value }}
          </p>
        </div>
        <div>
          <p
            class="font-mono text-[9px] tracking-widest text-stone-400 uppercase sm:text-[10px]"
          >
            {{ stat2Label }}
          </p>
          <p
            class="font-kimm mt-0.5 text-lg font-semibold text-stone-800 sm:mt-1 sm:text-2xl md:text-3xl"
          >
            {{ stat2Value }}
          </p>
        </div>
        <div>
          <p
            class="font-mono text-[9px] tracking-widest text-stone-400 uppercase sm:text-[10px]"
          >
            {{ stat3Label }}
          </p>
          <p
            class="font-kimm mt-0.5 text-lg font-bold text-[#943939] sm:mt-1 sm:text-2xl md:text-3xl"
          >
            {{ stat3Value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  metaTag: { type: String, required: true },
  subTag: { type: String, required: true },
  titleLight: { type: String, required: true },
  titleDark: { type: String, required: true },
  description: { type: String, default: '' },
  badgeTitle: { type: String, required: true },
  brandLogoText: { type: String, required: true },
  brandDesc: { type: String, required: true },
  stat1Label: { type: String, default: 'Since' },
  stat1Value: { type: String, default: '2007' },
  stat2Label: { type: String, default: 'Based In' },
  stat2Value: { type: String, default: 'Daegu' },
  stat3Label: { type: String, default: 'Delivery' },
  stat3Value: { type: String, default: '100%' },
})
</script>
