
import React from 'react';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const youtubeUrl = product.youtubeId ? `https://www.youtube.com/watch?v=${product.youtubeId}` : null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.title}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-6">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">구성 재료</h4>
          <div className="flex flex-wrap gap-1.5">
            {product.materials.map((material, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-md border border-slate-200">
                {material}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          {youtubeUrl && (
            <a 
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 mb-4 border border-rose-100 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              <span>만들기 영상 보기</span>
            </a>
          )}

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600">
              {product.price.toLocaleString()}원
            </span>
            <button className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
