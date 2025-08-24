import { Category, Result, Quiz } from '../types/fragranceFinder';

export const QUIZ = [
  {
    id: 1,
    question: 'Q1. 가장 끌리는 분위기는?',
    text: '향은 곧 분위기, 원하는 무드를 고르세요.',
    options: [
      { category: 'A', label: '포근하고 안정적인' },
      { category: 'C', label: '세련되고 중성적인' },
      { category: 'B', label: '상쾌하고 맑은' },
      { category: 'E', label: '달콤하고 로맨틱' },
      { category: 'D', label: '깊고 우아한' },
    ],
  },
  {
    id: 2,
    question: 'Q2. 향수를 주로 사용하는 상황은?',
    text: '향을 주로 쓰는 순간을 고르면 추천이 더 정확해져요.',
    options: [
      { category: 'C', label: '출근이나 일상용' },
      { category: 'D', label: '특별한 자리' },
      { category: 'A', label: '자기 전' },
      { category: 'E', label: '기분전환용' },
      { category: 'B', label: '외출 전에' },
    ],
  },
  {
    id: 3,
    question: 'Q3. 좋아하는 패션 스타일은?',
    text: '평소 스타일을 선택해 주세요.',
    options: [
      { category: 'A', label: '니트 · 가디건 룩' },
      { category: 'C', label: '셔츠 · 슬랙스 룩' },
      { category: 'B', label: '티셔츠 · 데님 룩' },
      { category: 'D', label: '블라우스 · 자켓 룩' },
      { category: 'E', label: '원피스 · 롱스커트 룩' },
    ],
  },
  {
    id: 4,
    question: 'Q4. 선호하는 감성은?',
    text: '공기에 따라 어울리는 향이 달라져요.',
    options: [
      { category: 'A', label: '따뜻한 겨울 햇살' },
      { category: 'B', label: '청량한 초여름 바람' },
      { category: 'C', label: '선선한 가을 저녁' },
      { category: 'E', label: '안개 낀 새벽' },
      { category: 'D', label: '촉촉한 우기의 공기' },
    ],
  },
  {
    id: 5,
    question: 'Q5. 향에서 가장 중요한 요소는?',
    text: '향을 고를 때 가장 중요하게 보는 기준을 알려주세요.',
    options: [
      { category: 'D', label: '잔향의 지속성' },
      { category: 'E', label: '첫 인상의 강렬함' },
      { category: 'A', label: '은은한 자연미' },
      { category: 'B', label: '유니크하고 독특함' },
      { category: 'C', label: '향조의 조화로움' },
    ],
  },
] satisfies Quiz[];

export const RESULT = {
  A: {
    path: 'A',
    code: 'COZY',
    title: '포근하고 안정적인',
    detail: '따뜻하고 은은한 잔향이 오래 머무는',
    notes: ['White Musk', 'Clean Musk', 'Powdery', 'Aldehyde'],
  },
  B: {
    path: 'B',
    code: 'FRESH',
    title: '상쾌하고 산뜻한',
    detail: '바람처럼 맑고 시원한 첫 인상',
    notes: ['Citrus', 'Aquatic', 'Fruity', 'Green'],
  },
  C: {
    path: 'C',
    code: 'NEUTRAL',
    title: '중성적이고 세련된',
    detail: '깔끔하고 모던한 무드, 절제된 향기의 정제미',
    notes: ['Vetiver', 'Suede', 'Neroli', 'Woody'],
  },
  D: {
    path: 'D',
    code: 'ELEGANT',
    title: '깊고 우아한',
    detail: '품격 있는 잔향으로 존재감을 남기는',
    notes: ['Amber', 'Woody', 'Spicy', 'Oud'],
  },
  E: {
    path: 'E',
    code: 'LOVELY',
    title: '달콤하고 로맨틱한',
    detail: '부드럽고 로지한 향이 감성적으로 퍼지는',
    notes: ['Rose', 'Vanilla', 'Tonka Bean', 'Floral'],
  },
} satisfies Record<Category, Result>;

export const RECOMMEND = {
  A: [
    {
      brand: 'Maison Francis Kurkdjian',
      name: '724',
      notes: ['Aldehydes', 'Jasmine', 'White Musk'],
      description:
        '알데하이드의 깨끗한 이불 향에 재스민과 화이트 머스크, 샌달우드로 맑고 포근한 스킨-클린 감.',
      image: 'FrancisKurkdjian_724_35.png',
    },
    {
      brand: 'Tom Ford',
      name: 'White Suede',
      notes: ['Musk', 'Suede', 'Saffron', 'white leather'],
      description:
        '머스크-스웨이드의 부드러운 가죽감, 은근한 로즈와 앰버 터치.',
      image: 'Tomford_WhiteSuedeEauDeParfum_50.png',
    },
    {
      brand: 'Santa Maria Novella',
      name: 'Fresia',
      notes: ['Freesia', 'Centifolia Rose', 'Musk'],
      description:
        '맑은 프리지아와 센티폴리아 로즈에 깨끗한 머스크가 더해진 산뜻하고 부드러운 향',
      image: 'SantaMariaNovella_Fresia_50.png',
    },
  ],
  B: [
    {
      brand: 'Maison Francis Kurkdjian',
      name: 'Aqua Universalis',
      notes: ['Bergamot', 'Citron', 'White Musk'],
      description:
        '베르가못·시트론의 맑은 시트러스와 가벼운 화이트 플라워, 머스키 우드.',
      image: 'FrancisKurkdjian_AquaUniversalis_35.png',
    },
    {
      brand: 'Jo Malone',
      name: 'Wood Sage & Sea Salt',
      notes: ['Ambrette', 'Sea Salt', 'Sage'],
      description: '앰브레트-씨솔트-세이지의 짭짤한 해풍과 미네랄 우디.',
      image: 'Jomalone_WoodSage&SeaSaltCologne_50.png',
    },
    {
      brand: 'Chanel',
      name: 'Chance Eau Fraîche',
      notes: ['Citron', 'Jasmine', 'Teakwood'],
      description:
        '시트론의 스파클링과 자스민의 부드러움, 티크우드 드라이 다운.',
      image: 'Chanel_ChanceEau_50.png',
    },
  ],
  C: [
    {
      brand: 'Jo Malone',
      name: 'Silver Birch & Lavender Cologne',
      notes: ['Subtle silver birchwood', 'soft herbal aroma of lavender'],
      description:
        '깔끔하고 담백한 우디-아로마틱 조합으로, 청아하면서도 절제된 세련미를 느끼게 해주는 중성적인 향.',
      image: 'Jomalone_SilverBirchLavenderCologne_50.png',
    },
    {
      brand: 'Diptyque',
      name: 'Tam Dao',
      notes: ['Sandalwood', 'Cedar', 'Cypress'],
      description:
        '마이소르 샌달우드의 크리미함을 시프러스·시더가 정갈하게 받쳐줌.',
      image: 'Diptyque_TamDaoeauDeToilette_50.png',
    },
    {
      brand: 'Maison Francis Kurkdjian',
      name: 'Gentle Fluidity Silver',
      notes: ['Juniper', 'Nutmeg', 'Amber Woods'],
      description: '주니퍼의 드라이한 상쾌함과 넛맥·앰버우드의 모던 우디.',
      image: 'FrancisKurkdjian_GentleFluidity_35.png',
    },
  ],
  D: [
    {
      brand: 'Dior',
      name: 'Ambre Nuit',
      notes: ['Amber', 'Rose', 'Pink Pepper'],
      description:
        '따뜻한 앰버와 다마스크 로즈의 대비, 핑크 페퍼로 윤곽을 세움.',
      image: 'Dior_AmbreNuit_50.png',
    },
    {
      brand: 'Tom Ford',
      name: 'Oud Wood',
      notes: ['Wood', 'Cardamom', 'Amber'],
      description:
        '카다멈 스파이스와 우드·샌달우드가 만드는 세련된 스모키-우디.',
      image: 'Tomford_OudWoodEauDeParfum_50.png',
    },
    {
      brand: 'Clive Christian',
      name: 'No. 1',
      notes: ['Jasmine', 'Sandalwood', 'Amber'],
      description:
        '오리엔탈-우디 DNA: 재스민 플로럴에 샌달우드·앰버의 럭셔리 베이스.',
      image: 'clivechristian_No1Masculine_50.png',
    },
  ],
  E: [
    {
      brand: 'Dior',
      name: 'Miss Dior Eau de Parfum',
      notes: ['Floral bouquet', 'Centifolia rose', 'Soft woods'],
      description:
        '센티폴리아 로즈 중심의 플로럴 부케가 부드러운 우드와 어우러져 산뜻하면서도 우아한 잔향을 남기는 향.',
      image: 'Dior_MissDiorBloomingBouquet_50.png',
    },
    {
      brand: 'Diptyque',
      name: 'Eau Rose',
      notes: ['Damascena Rose', 'Centifolia Rose', 'Lychee'],
      description:
        '장미 듀오 중심, EDP는 리치·카모마일 뉘앙스가 화사함을 더함.',
      image: 'Diptyque_EauRoseeauDeToilette_50.png',
    },
    {
      brand: 'Jo Malone',
      name: 'Peony & Blush Suede',
      notes: ['Red Apple', 'Jasmine', 'Rose'],
      description:
        '레드 애플의 상큼함 뒤로 피오니와 블러시 스웨이드의 소프트한 잔향.',
      image: 'Jomalone_Peony&BlushSuedeCologne_50.png',
    },
  ],
};
