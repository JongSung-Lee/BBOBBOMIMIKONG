
import { Product, Tutorial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p5',
    title: '주렁주렁 감사 나무 (시그니처)',
    description: '포근한 폼클레이의 질감과 나무 프레임이 만나 따뜻한 감동을 전합니다. 입체적인 나무 기둥 위에 아이들의 마음을 주렁주렁 매달아보세요.',
    price: 13500,
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    category: '베스트셀러',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['입체 나무 프레임', '브라운 폼클레이', '빨강/초록 클레이', '원형 카드(노랑/하늘)', '컬러 고리']
  },
  {
    id: 'p3',
    title: '성경 인물 젓가락 인형',
    description: '천연 나무 젓가락과 부드러운 클레이를 활용한 입체 조형 키트입니다. 단순한 재료가 아이들의 손끝에서 살아있는 이야기 속 주인공이 됩니다.',
    price: 9500,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=1000&auto=format&fit=crop',
    category: '교육용',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['나무 젓가락', '컬러 찰흙 세트', '무빙 아이 스티커', '접착제', '장식용 부직포']
  },
  {
    id: 'p2',
    title: '알록달록 세라믹 페인팅',
    description: '선명한 발색의 도자기 전용 물감과 매끄러운 세라믹의 만남. 아이들이 직접 디자인한 컵으로 일상에 예술적 감성을 더해보세요.',
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=1000&auto=format&fit=crop',
    category: '생활용품',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['화이트 세라믹 컵', '도자기 물감 6색', '디자인 붓 2종', '미니 팔레트']
  },
  {
    id: 'p1',
    title: '자작나무 우드 캘린더',
    description: '견고한 자작나무 합판의 나뭇결을 느끼며 조립하는 DIY 달력입니다. 사계절의 변화를 직접 기록하며 시간의 소중함을 배웁니다.',
    price: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop',
    category: '시즌 상품',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['자작나무 합판 세트', '수성 마커 세트', '부드러운 사포', '기념일 스티커']
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 't4',
    title: '[가이드] 감사 나무 폼클레이 기법',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=600&auto=format&fit=crop',
    difficulty: '보통'
  },
  {
    id: 't1',
    title: '성경 인물 인형 디테일 잡기',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1596495573175-959b999e93ec?q=80&w=600&auto=format&fit=crop',
    difficulty: '쉬움'
  }
];
