
import { Product, Tutorial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: '나만의 우드 캘린더 세트',
    description: '1년 365일 매일이 특별해지는 따뜻한 나무 질감의 달력 만들기 키트입니다.',
    price: 15000,
    imageUrl: 'https://picsum.photos/seed/calendar/600/400',
    category: '시즌 상품',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['자작나무 합판', '수성 마커 세트', '사포', '넘버 스티커']
  },
  {
    id: 'p2',
    title: '반짝반짝 세라믹 컵 페인팅',
    description: '아이들의 상상력을 컵에 담아보세요. 안전한 도자기 전용 물감이 포함되어 있습니다.',
    price: 12000,
    imageUrl: 'https://picsum.photos/seed/cup/600/400',
    category: '생활용품',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['화이트 세라믹 머그', '도자기 전용 물감', '붓 2종', '팔레트']
  },
  {
    id: 'p3',
    title: '성경 인물 입체 인형 만들기',
    description: '교회 주일학교 아이들을 위한 성경 이야기 입체 교구 패키지입니다.',
    price: 9000,
    imageUrl: 'https://picsum.photos/seed/doll/600/400',
    category: '교육용',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['컬러 찰흙', '나무 젓가락', '무빙 아이 스티커', '접착제']
  },
  {
    id: 'p4',
    title: '자연물 리스 만들기',
    description: '솔방울과 나뭇가지를 활용해 만드는 사계절 인테리어 리스 키트입니다.',
    price: 18000,
    imageUrl: 'https://picsum.photos/seed/wreath/600/400',
    category: '인테리어',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['등나무 리스틀', '천연 솔방울', '목공풀', '리본끈', '아크릴 물감']
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 't1',
    title: '우드 달력 조립과 꾸미기 기초',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/t1/400/225',
    difficulty: '쉬움'
  },
  {
    id: 't2',
    title: '도자기 컵에 그림 그리는 꿀팁',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/t2/400/225',
    difficulty: '보통'
  },
  {
    id: 't3',
    title: '색종이로 만드는 입체 성경 캐릭터',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/t3/400/225',
    difficulty: '쉬움'
  }
];
