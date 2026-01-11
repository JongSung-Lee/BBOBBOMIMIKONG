
import React from 'react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Art & Faith for Kids
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
            아이들의 손끝에서<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">
              작은 기적이 피어납니다
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            유치원부터 주일학교까지, 아이들의 상상력을 실현해주는 
            프리미엄 미술 키트와 친절한 가이드 영상을 만나보세요. 
            준비물 고민 없이 바로 시작하는 창의적인 시간!
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200"
            >
              제품 보러가기
            </button>
            <button className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-200 transition-all">
              회사 소개
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" 
            alt="Child Painting" 
            className="rounded-3xl shadow-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
