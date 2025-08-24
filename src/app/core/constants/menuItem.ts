import {
  faFacebookSquare,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const FOOTERMENU = [
  { menu: '입점 문의', path: '/' },
  { menu: '기업 광고문의', path: '/' },
  { menu: '자주 묻는 질문', path: '/' },
];

export const FOOTERSNS = [
  { href: '#', label: '인스타그램', icon: faInstagram },
  { href: '#', label: '페이스북', icon: faFacebookSquare },
  {
    href: 'https://github.com/yuhyeon9808/scentrie.git',
    label: '깃 허브',
    icon: faGithub,
  },
];

export const MENUS = [
  { href: '/product/detail/41', label: '향수 정기 구독' },
  { href: '/fragrance_finder', label: '향수 취향 테스트' },
  { href: '/magazine/1', label: '센트리에 매거진' },
  { href: '/mypage/profile', label: '마이페이지' },
];
