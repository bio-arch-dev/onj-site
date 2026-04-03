<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

// 라이트박스 상태관리
const isModalOpen = ref(false)
const selectedImage = ref('')

// 이미지 열기
const openModal = (imgUrl) => {
  selectedImage.value = imgUrl // 주소 저장
  isModalOpen.value = true // 모달 열기
  document.body.style.overflow = 'hidden' // 뒷배경 스크롤 방지
}

// 이미지 닫기 함수
const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto' // 스크롤 복구
}

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
    altTexts: [
      '따뜻한 우드 톤의 병원 대기 공간 디자인 및 가구 배치',
      '대구 반월당 최창혁 정형외과 인테리어 메인 로비 전경',
      '화이트 우드 컨셉의 정형외과 접수 데스크 조명 설계',
      '프라이빗한 진료 상담실 내부 우드 인테리어 상세',
      '환자 동선을 고려한 병원 복도 및 간접 조명 인테리어',
      '정교한 마감 처리가 돋보이는 병원 내부 벽면 디테일',
      '청결하고 전문적인 느낌의 정형외과 물리치료실 공간 설계',
      '정형외과 수술실 - 의료진의 집중력을 극대화하는 동선 최적화',
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
    altTexts: [
      '대구 동구청소년 상담센터 인테리어 완공 - 해외 오피스 감성의 세련된 대기실',
      '창의적인 영감을 주는 컬러 포인트와 가구 스타일링이 돋보이는 공간',
      '대구 실내건축 면허 업체 온재가 시공한 청소년 센터 내부 전경',
      '대구 관공서 인테리어 전문 온재의 청소년 센터 리모델링 사례',
      '모던한 가구 배치와 감도 높은 색감으로 완성된 오피스 라운지 설계',
      '정교한 마감 처리가 돋보이는 병원 내부 벽면 디테일',
      '집중력과 자부심을 높여주는 선생님들을 위한 사무 공간 오피스 디자인',
      '신뢰와 소통을 강조한 프라이빗 상담실 디자인',
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
    altTexts: [
      '대구 혁신도시 나불지 조망을 품은 모던한 상가주택 외관 전경',
      '대구 상가주택 건축 설계 전문 온재의 혁신도시 완공 프로젝트',
      '대구 단독주택 및 상가주택 리모델링 전문 온재 시공 사례',
      '세련된 매스감과 고급 외장재가 돋보이는 혁신도시 코너 상가주택',
      '공원 코너 부지의 가시성을 극대화한 외관 디자인',
      '채광과 통풍을 고려한 중정형 주택 구조와 모던한 실내 인테리어',
      '탁 트인 조망과 개방감을 주는 고층 주인세대 테라스 및 거실 디자인',
      '나불지 호수 뷰를 누리는 3층 주인세대 거실 인테리어 및 창호 설계',
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
    altTexts: [
      '상업 공간의 가치를 높이는 온재의 원스톱(인테리어+브랜딩) 솔루션',
      '입구를 비추는 대형 달 조형물로 신비로운 분위기를 연출한 입구 인테리어',
      '밤바다의 정취를 담은 포토존과 시그니처 달 조명의 완벽한 조화',
      '프라이빗한 분위기를 선사하는 낮은 조도의 감성 술집 조명 설계',
      '브랜드 로고부터 내부 소품까지 온재가 총괄한 통합 브랜딩 사례',
      '야외 테라스 감성을 실내로 들여온 밤바다 컨셉의 인테리어',
      '야외 밤바다를 모티브로 밧줄, 호미를 활용한 감각적인 실내 인테리어',
      '조개요리와 술 한잔이 어울리는 아늑하고 세련된 내부 홀 공간 설계',
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
    altTexts: [
      '지식산업센터 디센터 내 직장인들을 위한 감성적인 카페 인테리어',
      '유럽 시골 마을의 여유를 담은 서대구 디센터 메리쟈레 카페 인테리어',
      '뙤약볕 아래 낮잠을 모티브로 한 아늑하고 편안한 공간',
      '프라이빗한 분위기를 선사하는 낮은 조도의 감성 술집 조명 설계',
      '직장인들의 점심시간을 특별하게 만드는 감도 높은 카페 가구 스타일링',
      '브랜드 스토리부터 공간 기획까지 온재의 감성이 녹아든 카페 브랜딩',
      '자연물을 활용한 플랜테리어로 완성된 도심 속 작은 숲 카페 인테리어',
      '서대구 산업단지 인근 분위기 좋은 카페 - 온재의 상업공간 시공 사례',
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
    altTexts: [
      '한국적인 미학을 현대적으로 재해석한 백송 생고기 프리미엄 인테리어',
      '짙은 우드 톤의 변주로 완성된 격조 있는 한식 다이닝 공간 설계',
      '중장년층의 취향을 사로잡는 클래식하고 묵직한 분위기의 생고기 전문점',
      '객단가 높은 매장에 어울리는 고급스러운 마감재와 은은한 조명 연출',
      '프리미엄 외식 브랜드의 가치를 높이는 온재의 감도 높은 공간 기획',
      '정교한 선과 면의 조화가 돋보이는 모던 한옥 감성의 상업공간 디자인',
      '시간이 흐를수록 깊이를 더하는 클래식한 무드의 생고깃집 인테리어',
      '전통적인 창살 문양을 현대적인 패턴으로 풀어낸 벽면 인테리어 디테일',
    ],
  },
  {
    title: 'CAFE BEOMEO',
    location: '2022 베오메오 황금점',
    comment:
      '초등학교 앞 한적한 주택가에 위치한 테이크아웃 카페인 베오메오는 우리집 한켠에 딱 요정도 공간이 있으면 좋겠다 싶은 편안함이 주 테마 입니다. 기존 오래된 구축에 전면과 매장안에 들창을 넣었으며 과감한 건축 조명과 고급스러운 타일이 포인트',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340071/DSC04296_htwhdl.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340072/DSC04311_d16qlg.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340072/DSC04383_fgbkql.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340071/DSC04366_s6qbx6.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340071/DSC04361_sojha2.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340071/DSC04356_telglt.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340072/DSC04409_mbqguu.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774340071/DSC04416_ad8xiq.jpg',
    ],
    altTexts: [
      '대구 수성구 황금동 주택가에 녹아든 아늑한 베오메오 카페 인테리어',
      '초등학교 앞 골목의 활기를 더하는 세련된 베오메오 카페 완공 사례',
      '우리 집 한 켠에 두고 싶은 편안하고 따뜻한 무드의 홈카페 스타일링',
      '고급스러운 타일 마감으로 디테일을 살린 카페 카운터 및 내부 인테리어',
      '공간의 온기를 담은 베오메오만의 시그니처 컬러와 소재 큐레이션',
      '구축 건물의 변신 - 들창을 활용해 개방감을 준 카페 외부 리모델링',
      '테이크아웃 전문 카페의 효율적인 동선과 감각적인 파사드 디자인',
      '계절감을 느낄 수 있는 들창 설계와 세련된 스테인리스 소재의 조화',
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
    altTexts: [
      '청도 산자락의 수려한 자연 경관을 품은 HOUSE 청도 별장 신축 전경',
      '자연 속 쉼표가 되는 힐링 공간 - 온재가 제안하는 단독주택 라이프',
      '모던한 건축미와 따뜻한 우드 소재가 어우러진 고품격 별장 내부',
      '탁 트인 산 조망을 거실 가득 담아낸 개방감 넘치는 공간 기획',
      '건축물 자체가 풍경이 되는 세련된 파사드와 조경이 돋보이는 별장',
      '생활과 휴식을 분리한 동·서 대칭 구조의 감각적인 전원주택 설계',
      '자연을 감상하며 걷는 갤러리 같은 복도 인테리어와 통창 설계',
      '청도 전원주택 및 별장 신축 전문 온재의 청도 프로젝트 완공',
    ],
  },
  {
    title: 'LAVILLE',
    location: '2017 혁신도시 상가주택 신축',
    comment:
      '북측 전면이 좁고, 남측 후면이 넓어서, 방 3개를 모두 남향으로 배치하고, 북향인 거실은 복층 채광창을 통해 자연광이 풍부하게 들어오도록 했습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-1_jym3gk.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-3_y4jdnq.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-13_dnahbh.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226979/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-18_ssgy5l.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-15_q9xppm.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226979/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-61_bvwcsl.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-33_ton4rj.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774226978/%EB%9D%BC%EB%B9%8C3%EC%B8%B5_%EC%8B%A4%EB%82%B4%EC%82%AC%EC%A7%84-77_fpidai.jpg',
    ],
    altTexts: [
      '대구 혁신도시 상가주택 신축 - 채광을 극대화한 모던한 인테리어',
      '북향 거실의 한계를 극복한 복층 채광창 설계와 풍부한 자연광 연출',
      '간접 조명을 충분히 활용해 은은하고 고급스러운 무드의 실내 조명',
      '올화이트 컨셉으로 개방감을 극대화한 프리미엄 주거 공간 인테리어',
      '모든 방을 남향으로 배치한 스마트한 상가주택 평면 구성 및 설계',
      '건축주의 라이프스타일을 반영한 맞춤형 상가주택 인테리어 솔루션',
      '층고를 높여 웅장함을 더한 복층형 거실과 세련된 계단 디자인',
      '상업 공간과 주거 공간이 조화를 이루는 혁신도시 상가주택',
    ],
  },
  {
    title: 'PLAYMOM WATERROOM',
    location: '2022 플레이맘 워터룸',
    comment:
      '전국단위 수영장 파티룸 프랜차이즈로 프라이빗하게 공간을 대여하여 지인들과 오붓하게 모임을 할수 있는 공간입니다. 휴양지에 놀러온 듯 한 컨셉과 방수설계, 아이들의 안전을 최우선으로 계획되었습니다.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313881/18_%EA%B4%91%EB%AA%85%EC%86%8C%ED%95%98_xp32rd.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314265/IMG_9177_1_ea5itt.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313917/26_%EC%88%98%EC%9B%90%EB%A7%9D%ED%8F%AC_cr8zkz.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313848/8_%EC%B2%AD%EC%A3%BC%EC%9C%A8%EB%9F%89_tbb8k5.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314310/IMG_9207_1_rtq6x2.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313872/13_%EA%B5%AC%EB%AF%B8%EC%82%B0%EB%8F%99_hep94k.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313855/2_%EC%A7%84%ED%95%B4_bdegje.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774313923/17_%EC%9D%B8%EC%B2%9C%EA%B3%84%EC%96%91_ylyrzc.jpg',
    ],
    altTexts: [
      '도심 속 휴양지 컨셉의 프라이빗 수영장 파티룸 플레이맘 인테리어',
      '아이들의 안전을 최우선으로 고려한 키즈 전용 워터룸 공간 설계',
      '프라이빗한 모임을 위한 아늑한 다이닝 공간과 키즈풀의 조화',
      '전국구 프랜차이즈 플레이맘의 정체성을 담은 세련된 내부 인테리어',
      '세련된 데크 설계와 수영장이 어우러진 감성적인 파티 공간 디자인',
      '지인들과 오붓한 시간을 보낼 수 있는 프리미엄 공간 대여 인테리어',
      '파티룸 및 키즈카페 인테리어 전문 온재의 완공 프로젝트',
      '아이들의 시선을 사로잡는 파스텔 톤 컬러와 귀여운 포인트 조명',
    ],
  },
  {
    title: 'BAO HEAR ATELIER',
    location: '2021 바오 미용실',
    comment:
      '골드스텐의 정교한 선과 자작나무의 따스한 결이 공존하는 공간, 화이트 우드 컨셉 위에 소재의 변주로 완성한 감각적인 헤어 아틀리에',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314175/b03_ycavv2.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314175/b08_uy7pbu.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314176/b06_ylpque.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314181/b05_g4z0ra.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314175/b19_oeaxda.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314176/b04_yaehsg.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314177/b09_cnkfni.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774314173/b17_j8crl2.jpg',
    ],
    altTexts: [
      '대구·경산 미용실 인테리어 전문 온재의 세련된 헤어샵 완공 프로젝트',
      '골드 스텐의 정교한 선과 자작나무의 따스함이 공존하는 바오 헤어 인테리어',
      '골드 스텐 포인트로 고급스러움을 더한 미용실 경대 디자인',
      '채광과 조명이 조화를 이루는 밝고 화사한 화이트 우드 톤의 뷰티샵 디자인',
      '영남대 앞 미용실 - 오랫동안 머물고 싶은 편안한 카페 같은 무드의 헤어샵 내부 인테리어',
      '화이트 우드 컨셉을 현대적으로 재해석한 감각적인 헤어 아틀리에 공간 설계',
      '미니멀한 감성과 실용적인 동선이 돋보이는 소형 미용실 인테리어 사례',
      '공간의 온기를 담은 온재만의 감도 높은 미용실 조명 설계 및 소재 큐레이션',
    ],
  },
  {
    title: 'HEAR ATELIER',
    location: '2020 버르장머리 미용실',
    comment:
      '대담한 골드 스텐과 샹들리에로 완성한 영남대 앞 화이트·골드 헤어 아틀리에. 클라이언트의 명확한 취향을 담은 핑크 파우더룸과 감각적인 조도 설계가 돋보이는 공간.',
    images: [
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316592/b12_fnquy3.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316628/b01_wlrzxz.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316639/b18_okg7fs.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316649/b31_sgvm7j.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316654/b30_pvejtm.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316612/b19_nqaefn.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316684/b22_gzs8kd.jpg',
      'https://res.cloudinary.com/dc50dnaqy/image/upload/v1774316699/b05_nknimp.jpg',
    ],
    altTexts: [
      '영남대 인근 버르장머리 미용실 - 온재의 감도 높은 뷰티샵 인테리어',
      '대담한 골드 스텐 포인트와 샹들리에로 완성한 럭셔리 미용실 인테리어',
      '공간의 품격을 높이는 골드 소재의 변주와 세련된 화이트 톤 마감',
      '여심을 사로잡는 핑크 포인트 인테리어',
      '섬세한 조도 설계로 완성된 안락한 샴푸실과 밝은 시술 공간의 대비',
      '영남대 앞 화이트·골드 컨셉의 화려한 버르장머리 헤어 아틀리에 완공',
      '고급스러운 샹들리에가 조화를 이루는 프리미엄 헤어 아틀리에 공간',
      '공간의 온기를 더하는 간접 조명과 골드 프레임 거울의 우아한 조화',
    ],
  },
]
</script>

<template>
  <section id="works" class="w-full bg-white px-5 py-12 md:py-32">
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
            class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
            @click="openModal(img)"
          >
            <img
              :src="img"
              :alt="
                project.altTexts && project.altTexts[iIdx]
                  ? project.altTexts[iIdx]
                  : project.title
              "
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
                  class="aspect-4/3 cursor-pointer overflow-hidden rounded-xl bg-gray-50"
                  @click="openModal(project.images[groupIdx + offset])"
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

    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-10"
        @click.self="closeModal"
      >
        <button
          @click="closeModal"
          class="fixed top-6 right-6 z-110 text-white/70 transition-colors hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img
          :src="selectedImage"
          class="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          alt="확대 이미지"
        />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.project-swiper {
  --swiper-theme-color: #943939;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}

/* 모달 페이드 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
