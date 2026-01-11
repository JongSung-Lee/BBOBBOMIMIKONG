
import React from 'react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            뽀뽀미미콩 Art & Faith
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
            손끝으로 만나는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">
              따뜻한 신앙 이야기
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            교회와 유치원에서 간편하게 활용할 수 있는 프리미엄 미술 키트. 
            엄선된 안전한 재료와 직관적인 영상 가이드로 
            아이들의 창의력이 빛나는 특별한 교육 시간을 만들어보세요.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200"
            >
              키트 마켓 구경하기
            </button>
            <button className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-200 transition-all">
              브랜드 스토리
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
             <img 
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop" 
              alt="Creative art supplies" 
              className="rounded-[2rem] object-cover w-full h-[450px]"
            />
            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-50">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-sm font-bold text-slate-800">뽀뽀미미콩 아트 랩</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
