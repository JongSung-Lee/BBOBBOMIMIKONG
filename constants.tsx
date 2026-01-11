
import { Product, Tutorial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p5',
    title: '주렁주렁 감사 나무 (시그니처)',
    description: '폭신한 브라운 폼클레이와 알록달록한 카드로 만드는 감성 트리입니다. 재료의 질감을 느끼며 나만의 감사 나무를 빚어보세요.',
    price: 13500,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=1000&auto=format&fit=crop',
    category: '베스트셀러',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['입체 나무 프레임', '브라운 폼클레이', '빨강/초록 클레이', '원형 카드(노랑/하늘)', '컬러 고리']
  },
  {
    id: 'p3',
    title: '성경 인물 젓가락 인형',
    description: '나무 젓가락의 자연스러운 질감과 컬러 클레이가 만났습니다. 단순한 도구가 아이들의 손에서 살아있는 성경 인물로 탄생합니다.',
    price: 9500,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    category: '교육용',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['나무 젓가락', '컬러 찰흙 세트', '무빙 아이 스티커', '접착제', '장식용 부직포']
  },
  {
    id: 'p2',
    title: '알록달록 세라믹 페인팅',
    description: '순백의 세라믹 위에 펼쳐지는 아이들의 상상력. 전용 물감의 선명한 발색으로 실용적인 나만의 식기를 완성합니다.',
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop',
    category: '생활용품',
    youtubeId: 'dQw4w9WgXcQ',
    materials: ['화이트 세라믹 컵', '도자기 물감 6색', '디자인 붓 2종', '미니 팔레트']
  },
  {
    id: 'p1',
    title: '자작나무 우드 캘린더',
    description: '나뭇결이 살아있는 자작나무 합판을 조립하며 시간의 소중함을 배웁니다. 내추럴한 감성이 돋보이는 인테리어 소품 겸 교구입니다.',
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
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop',
    difficulty: '쉬움'
  }
];
