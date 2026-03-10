<template>
  <section
    class="relative flex h-[40vh] w-full items-center justify-center overflow-hidden text-white md:h-screen"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img
        src="https://res.cloudinary.com/dc50dnaqy/image/upload/f_auto,q_auto/v1772792717/DSC07162_iehvqt.jpg"
        alt="병원 클린룸 공사 현장"
        class="animate-ken-burns h-full w-full origin-center object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <div class="z-10 mx-auto max-w-4xl px-5 text-center">
      <h1
        class="mb-4 text-xl font-bold tracking-[0.2em] text-white drop-shadow-lg md:text-5xl lg:text-6xl"
      >
        SYSTEM, ON.
      </h1>

      <p
        class="hide-br-mobile mx-auto max-w-sm font-sans text-[10px] leading-relaxed font-extralight text-white/80 md:max-w-2xl md:text-base"
      >
        수술실과 중앙공급실을 포함한 클린룸 설계에 특화된 전문성을 바탕으로,<br
          class="hidden md:block"
        />
        안전하고 효율적인 의료 환경을 창출합니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* 3. 몰입형(Ken Burns) 애니메이션 정의 */
@keyframes ken-burns {
  0% {
    transform: scale(1); /* 시작: 원래 크기 */
  }
  100% {
    transform: scale(1.5); /* 끝: 15% 확대 (속으로 몰입하는 효과) */
  }
}

.animate-ken-burns {
  /* 애니메이션 이름, 지속 시간(20초로 천천히), 타이밍 함수, 무한 반복, 부드럽게 왕복 */
  animation: ken-burns 20s ease-out infinite alternate;
}
</style>
