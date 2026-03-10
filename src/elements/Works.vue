<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// 프로젝트 데이터 (12개 현장 예시)
const projects = [
  {
    title: 'CHOI CHANG-HYEOK ORTHOPEDIC SURGERY',
    location: '2025 반월당 정형외과 의원',
    comment:
      '최창혁 정형외과는 우드와 화이트를 중심으로 따뜻하고 편안한 분위기를 강조한 공간입니다. 환자들의 심리적 안정을 최우선으로 설계되었습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872427/1_seltu6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872444/3_vfffsu.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872435/9_v1bryl.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872473/4_l2f3sx.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872472/8_cisdi6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872474/7_jpzh8l.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872473/11_pw7aru.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1772872513/DSC07385_fjxlcd.jpg',
    ],
  },
  {
    title: 'YOUTH CENTER',
    location: '2025 동구청소년센터',
    comment:
      '대구동구청소년 상담센터는 해외 오피스를 연상시키는 무드로 완성되었습니다. 청소년들에게는 멋진 공간을, 이곳에서 근무하는 선생님들에게는 자부심을 느낄 수  있는 환경을 제공하고자 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126074/DSC01036_m3jmrh.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126097/DSC01062_zgml7p.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126107/DSC01100_ro413k.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126188/DSC00986_hfwker.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126226/DSC00955_eyqb6r.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126045/DSC01015_espxkr.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126120/DSC01054_dso7rt.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773126141/DSC01023_uvispu.jpg',
    ],
  },
  {
    title: 'URBAN LAYER 03',
    location: '2025 대구 혁신도시 상가주택',
    comment:
      '공원 코너에 자리한 대구 혁신도시 상가주택은 1층 상가가 탁월한 가시성과 접근성을 갖추었으며, 2층은 넓은 중정을 3층 주인세대는 나불지를 바라보는 탁월한 조망을 누릴 수 있도록 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773127843/DSC09848_ny6sbo.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773127999/DSC09832_rdhvrj.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773127906/DSC09901_wlnqhx.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773128040/DSC09911_veqw1w.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773127860/DSC09863-HDR_gyeaxq.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773128087/DSC09937_o8dwvy.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773128094/DSC09939_oblkab.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773128132/DSC09989_t6ircq.jpg',
    ],
  },
  {
    title: 'JOGAEHANJAN',
    location: '2024 조개한잔',
    comment:
      '밤바다를 모티브로 외관 및 내부 인테리어, 브랜드 디자인, 조경까지 한꺼번에 진행했으며, 시선을 사로잡는 외부와 입구를 비추는 달, 야외 컨셉의 내부까지 조개요리와 술 한잔으로 특별한 날 아늑하고 세련된 분위기를 만끽 할 수 있도록 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773129722/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EC%99%B8%EB%B6%80_-_DSC07578_el0q5p.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130160/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EC%99%B8%EB%B6%80_-_DSC07530_cywxi8.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130197/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07529_t7mon0.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130232/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07510_crqsib.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130296/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07549_xwb5gp.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130243/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07520_c2cy8p.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130210/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07546_djt1mj.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773130263/%EC%A1%B0%EA%B0%9C%ED%95%9C%EC%9E%94_%EB%82%B4%EB%B6%80_%EB%94%94%ED%85%8C%EC%9D%BC_-_DSC07521_lwxzng.jpg',
    ],
  },
  {
    title: 'MERIGGIARE',
    location: '2024 메리쟈레 카페',
    comment:
      '서대구 디센터에 위치한 메리쟈레는 유럽의 시골마을에서 뙤약볕아래 고단한 일을 끝내고 낮잠을 자는 것을 주  감성으로 지식산업센터내 직장인들이 점심시간 후 달콤한 휴식 취하는 공간입니다. 야외를 연상케하는 자연스러운 조경이 포인트',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131495/00047_DSC09944_wfdfhg.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131459/00021_DSC09838_dor64s.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131456/00020_DSC09836_vk4kr6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131565/00104_DSC00128_ycmbox.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131502/00050_DSC09971_hujlh3.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131667/00214_DSC00359_teifov.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131679/00222_DSC00383_q6uzdy.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773132263/00165_DSC00254_qjrlt8.jpg',
    ],
  },
  {
    title: 'BAEGSONG SAENG-GOGI',
    location: '2023 백송 생고기',
    comment:
      '어둠 속에 깃든 한국의 미학, 짙은 우드톤의 변주로 중장년층의 깊은 취향을 만족시키는 클래식하면서 모던한 공간. 정교하게 다듬어진 한국적인 선과 면의 조화는 객단가 높은 매장에 걸맞은 묵직한 격조 있는 환대를 전합니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139568/DSC06603-HDR_on7fvu.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139590/DSC06606-HDR_xexqro.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139596/DSC06618-HDR_rddrii.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139606/DSC06628_wknbyb.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139633/DSC06727_ndkyzx.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139601/DSC06621_zgcomf.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139652/DSC06713_gu5y4y.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773139628/DSC06757_we7yx7.jpg',
    ],
  },
  {
    title: 'CAFE BEOMEO',
    location: '2022 베오메오 황금점',
    comment:
      '초등학교 앞 한적한 주택가에 위치한 테이크아웃 카페인 베오메오는 우리집 한켠에 딱 요정도 공간이 있으면 좋겠다 싶은 편안함이 주 테마 입니다. 기존 오래된 구축에 전면과 매장안에 들창을 넣었으며 과감한 건축 조명과 고급스러운 타일이 포인트',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131495/00047_DSC09944_wfdfhg.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131459/00021_DSC09838_dor64s.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131456/00020_DSC09836_vk4kr6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131565/00104_DSC00128_ycmbox.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131502/00050_DSC09971_hujlh3.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131667/00214_DSC00359_teifov.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131679/00222_DSC00383_q6uzdy.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773132263/00165_DSC00254_qjrlt8.jpg',
    ],
  },
  {
    title: 'HOUSE CHEONGDO',
    location: '2021 청도 별장 신축',
    comment:
      '청소 산자락에 위치한 "HOUSE 청도"는 생활공간과 휴식공간을 서 측과 동 측 두군데로 나누고, 그 사이 볼도를 연결한 구조로 이루어 졌습니다. 거실은 탁 트인 전망을 가득 담을수 있도록 기획 하였으며, 복도를 지날 때마다 자연스럽게 즐길수 있도록 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141125/DJI_0201_y5cgkr.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141120/DJI_0254_nlxu8h.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141147/_E3A3476_cq7vj0.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141151/_E3A3458_lbzozy.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141156/_E3A3428-Pano_w7eqzh.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141129/_E3A3467_edcg6z.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141143/_E3A3731-Pano_rlypne.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773141117/E3A3794_ugkl1l.jpg',
    ],
  },
  {
    title: 'LAVILLE',
    location: '2017 혁신도시 상가주택 신축',
    comment:
      '북측 전면이 좁고, 남측 후면이 넓어서, 방 3개를 모두 남향으로 배치하고, 북향인 거실은 복층 채광창을 통해 자연광이 풍부하게 들어오도록 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131495/00047_DSC09944_wfdfhg.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131459/00021_DSC09838_dor64s.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131456/00020_DSC09836_vk4kr6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131565/00104_DSC00128_ycmbox.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131502/00050_DSC09971_hujlh3.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131667/00214_DSC00359_teifov.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773131679/00222_DSC00383_q6uzdy.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1773132263/00165_DSC00254_qjrlt8.jpg',
    ],
  },
]
</script>

<template>
  <section class="w-full bg-white px-5 py-12 md:py-32">
    <div class="mx-auto max-w-7xl">
      <div
        v-for="(project, pIdx) in projects"
        :key="pIdx"
        class="mb-24 md:mb-40"
      >
        <div
          class="mb-8 flex flex-col gap-2 border-l-2 border-gray-400 pl-4 md:mb-12"
        >
          <h3
            class="font-SUIT text-[14px] font-bold tracking-[0.2em] text-gray-400 md:text-xl"
          >
            {{ project.title }}
          </h3>
          <div class="flex items-center gap-3">
            <span
              class="font-SUIT text-[10px] tracking-widest text-gray-400 md:text-xs"
            >
              {{ project.location }}
            </span>
          </div>
          <p
            class="font-SUIT mt-4 hidden max-w-2xl text-sm leading-relaxed font-light break-keep text-gray-500 md:block"
          >
            {{ project.comment }}
          </p>
        </div>

        <div class="hidden grid-cols-4 gap-3 md:grid">
          <div
            v-for="(img, iIdx) in project.images"
            :key="iIdx"
            class="aspect-4/3 overflow-hidden rounded-xl bg-gray-50"
          >
            <img
              :src="img"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div class="md:hidden">
          <swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            class="project-swiper"
          >
            <swiper-slide v-for="groupIdx in [0, 4]" :key="groupIdx">
              <div class="grid grid-cols-2 gap-2 pb-10">
                <div
                  v-for="offset in [0, 1, 2, 3]"
                  :key="offset"
                  class="aspect-4/3 overflow-hidden rounded-xl bg-gray-50"
                >
                  <img
                    :src="project.images[groupIdx + offset]"
                    class="h-full w-full object-cover"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-swiper {
  --swiper-theme-color: #943939;
}
/* 모바일에서 점 위치 조절 */
:deep(.swiper-pagination) {
  bottom: 0 !important;
}
</style>
