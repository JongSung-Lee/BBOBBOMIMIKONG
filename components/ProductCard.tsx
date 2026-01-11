
import React from 'react';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const youtubeUrl = product.youtubeId ? `https://www.youtube.com/watch?v=${product.youtubeId}` : null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=60&w=400&auto=format&fit=crop';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-extrabold text-indigo-600 shadow-sm border border-indigo-50 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{product.title}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-3 leading-relaxed min-h-[60px]">
          {product.description}
        </p>

        <div className="mb-6">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
            <span className="w-4 h-px bg-slate-200 mr-2"></span>
            패키지 구성품
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {product.materials.map((material, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] rounded-md border border-slate-200 font-medium">
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
              className="flex items-center justify-center space-x-2 w-full py-2.5 mb-4 border border-rose-100 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              <span>만들기 가이드 영상</span>
            </a>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-slate-50">
            <span className="text-lg font-bold text-indigo-600">
              {product.price.toLocaleString()}원
            </span>
            <button className="flex items-center space-x-1 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-xs font-bold">장바구니</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
