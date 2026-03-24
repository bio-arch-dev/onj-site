<script setup>
const snsArchive = {
  youtube: {
    label: 'YouTube',
    icon: 'play_circle',
    title: '@onjspace',
    desc: '동구청소년센터 철거부터 마감까지 현장스케치',
    link: 'https://www.youtube.com/shorts/HYLfN-65x14',
    thumb: 'https://img.youtube.com/vi/HYLfN-65x14/maxresdefault.jpg',
  },
  instagram: {
    label: 'Instagram',
    icon: 'center_focus_strong',
    title: '@onj.kr',
    desc: '트랜디한 감각과 영감을 공유하는 온재 인스타그램',
    link: 'https://www.instagram.com/onj.kr',
    thumb:
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774236247/1_sm5ckc.png',
  },
  blog: {
    label: 'Naver Blog',
    icon: 'forum',
    title: 'thedesign_ena',
    desc: '현장의 진솔한 기록과 공간을 향한 사유',
    link: 'https://blog.naver.com/thedesign_ena/223847085637',
    thumb:
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774311914/2_nt5ph2.png',
  },
}
</script>

<template>
  <section id="sns" class="w-full bg-white px-5 md:py-10">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative mb-10 flex flex-col items-center text-center md:mb-20"
      >
        <span
          class="font-kimm absolute top-0 left-0 mb-4 text-[8px] tracking-[0.4em] text-gray-300 md:text-sm"
        >
          03 / 소통
        </span>
        <h2
          class="font-SUIT mt-6 mb-3 text-2xl font-bold tracking-[0.4em] text-gray-400 md:mt-10 md:text-5xl"
        >
          INSIDE ONJ
        </h2>
        <div class="mt-2S h-px w-12 bg-[#943939] md:w-75"></div>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4">
        <a
          :href="snsArchive.youtube.link"
          target="_blank"
          class="group relative col-span-2 overflow-hidden rounded-3xl bg-gray-100 md:col-span-1 md:row-span-2"
        >
          <div
            class="aspect-square h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            :style="{ backgroundImage: `url(${snsArchive.youtube.thumb})` }"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/35 p-6 text-white md:p-12"
          >
            <span
              class="font-SUIT md:text-md rop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] absolute top-6 left-6 text-[14px] font-black tracking-widest text-[#FF0000] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] md:top-12 md:left-12 md:text-4xl"
            >
              {{ snsArchive.youtube.label }}
            </span>
            <div>
              <span
                class="material-symbols-outlined font-light"
                style="font-size: 10rem"
              >
                {{ snsArchive.youtube.icon }}
              </span>

              <div
                class="absolute bottom-6 left-6 text-left md:bottom-12 md:left-12"
              >
                <h3 class="font-SUIT text-xl font-bold md:text-2xl">
                  {{ snsArchive.youtube.title }}
                </h3>
                <p
                  class="font-SUIT mt-2 hidden text-xl font-light opacity-80 md:block"
                >
                  {{ snsArchive.youtube.desc }}
                </p>
              </div>
            </div>
          </div>
        </a>

        <a
          :href="snsArchive.instagram.link"
          target="_blank"
          class="group relative col-span-1 overflow-hidden rounded-3xl bg-gray-50 md:aspect-auto"
        >
          <div
            class="aspect-square h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${snsArchive.instagram.thumb})` }"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-white md:p-8"
          >
            <span
              class="font-SUIT text: absolute top-4 left-6 bg-linear-to-r from-[#FCAF45] via-[#E1306C] to-[#833AB4] bg-clip-text text-sm font-black tracking-widest text-transparent md:top-10 md:left-10 md:text-4xl"
            >
              {{ snsArchive.instagram.label }}
            </span>
            <div class="hidden md:block">
              <span
                class="material-symbols-outlined font-light"
                style="font-size: 10rem"
              >
                {{ snsArchive.instagram.icon }}
              </span>
            </div>
            <div
              class="absolute bottom-4 left-6 text-left md:bottom-10 md:left-10"
            >
              <h3 class="font-SUIT text-sm font-bold md:text-2xl">
                {{ snsArchive.instagram.title }}
              </h3>
              <p
                class="font-SUIT mt-2 hidden text-xl font-light opacity-80 md:block"
              >
                {{ snsArchive.instagram.desc }}
              </p>
            </div>
          </div>
        </a>

        <a
          :href="snsArchive.blog.link"
          target="_blank"
          class="group relative col-span-1 overflow-hidden rounded-3xl bg-gray-50 md:aspect-auto"
        >
          <div
            class="aspect-square h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${snsArchive.blog.thumb})` }"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-white md:p-8"
          >
            <span
              class="font-SUIT text: absolute top-4 left-6 text-sm font-black tracking-widest text-[#03C75A] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] md:top-10 md:left-10 md:text-4xl"
            >
              {{ snsArchive.blog.label }}
            </span>
            <div class="hidden md:block">
              <span
                class="material-symbols-outlined font-light"
                style="font-size: 10rem"
              >
                {{ snsArchive.blog.icon }}
              </span>
            </div>
            <div
              class="absolute bottom-4 left-6 text-left md:bottom-10 md:left-10"
            >
              <h3 class="font-SUIT text-sm font-bold md:text-2xl">
                {{ snsArchive.blog.title }}
              </h3>
              <p
                class="font-SUIT mt-2 hidden text-xl font-light opacity-80 md:block"
              >
                {{ snsArchive.blog.desc }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-kimm {
  font-family: 'KIMM_Bold', 'SUIT';
}
.material-symbols-outlined {
  font-variation-settings:
    'wght' 200,
    'opsz' 48;
}
</style>
