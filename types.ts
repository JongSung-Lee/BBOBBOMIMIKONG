
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  youtubeId?: string;
  materials: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  difficulty: '쉬움' | '보통' | '어려움';
}
