import chanel from '@/assets/img/logo_w/Chanel_logo.png';
import tomford from '@/assets/img/logo_w/TOMFORD_logo.png';
import dior from '@/assets/img/logo_w/dior_logo.png';
import diptyque from '@/assets/img/logo_w/Diptyque_logo.png';
import jomalone from '@/assets/img/logo_w/Jomalone_logo.png';
import clive from '@/assets/img/logo_w/clivechristian_logo.png';
import santaMaria from '@/assets/img/logo_w/SantaMariaNovella_logo.png';
import francis from '@/assets/img/logo_w/FrancisKurkdjian_logo.png';
import chanel_b from '@/assets/img/logo_b/Chanel_logo_b.png';
import tomford_b from '@/assets/img/logo_b/TOMFORD_logo_b.png';
import dior_b from '@/assets/img/logo_b/dior_logo_b.png';
import diptyque_b from '@/assets/img/logo_b/Diptyque_logo_b.png';
import jomalone_b from '@/assets/img/logo_b/Jomalone_logo_b.png';
import clive_b from '@/assets/img/logo_b/clivechristian_logo_b.png';
import santaMaria_b from '@/assets/img/logo_b/SantaMariaNovella_logo_b.png';
import francis_b from '@/assets/img/logo_b/FrancisKurkdjian_logo_b.png';

export const BRANDS = [
  { id: 1, name: '메종 프란시스 커정' },
  { id: 2, name: '디올' },
  { id: 3, name: '딥디크 파리' },
  { id: 4, name: '산타마리아노벨라' },
  { id: 5, name: '샤넬' },
  { id: 6, name: '조말론 런던' },
  { id: 7, name: '클라이브 크리스찬' },
  { id: 8, name: '톰포드' },
];

export const NOTES = [
  { id: 1, name: '그린' },
  { id: 2, name: '머스크' },
  { id: 3, name: '시트러스' },
  { id: 4, name: '스모키 / 레더' },
  { id: 5, name: '아쿠아틱' },
  { id: 6, name: '오리엔탈' },
  { id: 7, name: '우디' },
  { id: 8, name: '파우더리' },
  { id: 9, name: '프루티' },
  { id: 10, name: '플로럴' },
];

export const MOODS = [
  { id: 1, name: '고급스러운' },
  { id: 2, name: '관능적인' },
  { id: 3, name: '개성 있는' },
  { id: 4, name: '로맨틱한' },
  { id: 5, name: '산뜻한' },
  { id: 6, name: '신비로운' },
  { id: 7, name: '자유로운' },
  { id: 8, name: '포근한' },
];

export const BRAND_LOGO = [
  { white: chanel, black: chanel_b, name: '샤넬' },
  { white: tomford, black: tomford_b, name: '톰포드' },
  { white: dior, black: dior_b, name: '디올' },
  { white: diptyque, black: diptyque_b, name: '딥디크 파리' },
  { white: jomalone, black: jomalone_b, name: '조말론 런던' },
  { white: francis, black: francis_b, name: '메종 프란시스 커정' },
  { white: santaMaria, black: santaMaria_b, name: '산타마리아노벨라' },
  { white: clive, black: clive_b, name: '클라이브 크리스찬' },
];

export const MYPAGETABS = [
  { label: '회원정보', path: '/mypage/profile' },
  { label: '최근 본 상품', path: '/mypage/view_history' },
  { label: '주문내역', path: '/mypage/orders' },
];

export const NOTEMOODTABS = [
  { label: '노트', path: '/product/note_mood/note' },
  { label: '무드', path: '/product/note_mood/mood' },
];
