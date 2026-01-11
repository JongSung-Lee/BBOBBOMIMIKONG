
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import TutorialCard from './components/TutorialCard';
import ContactForm from './components/ContactForm';
import { PRODUCTS, TUTORIALS } from './constants';
import { getCreativeIdea } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'products' | 'tutorials' | 'contact'>('home');
  const [aiIdea, setAiIdea] = useState<string>('반짝이는 아이디어를 불러오는 중...');

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const idea = await getCreativeIdea("어린이 주일학교 미술");
        setAiIdea(idea);
      } catch (err) {
        setAiIdea("창의적인 미술 활동을 준비해보세요!");
      }
    };
    fetchIdea();
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'products':
        return (
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">아트 키트 마켓</h2>
                <p className="text-slate-500">정성껏 패키징한 미술 재료들을 만나보세요.</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50">전체보기</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50">시즌 한정</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      case 'tutorials':
        return (
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">함께 만들어요</h2>
            <p className="text-slate-500 mb-12">유튜브 공식 채널에서 제공하는 단계별 영상 가이드입니다.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TUTORIALS.map(tutorial => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
            <div className="mt-16 p-8 bg-amber-50 rounded-3xl border border-amber-100 text-center">
              <h4 className="text-amber-800 font-bold mb-2">오늘의 AI 활동 추천</h4>
              <p className="text-amber-700 italic">"{aiIdea}"</p>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <ContactForm />
          </section>
        );
      default:
        return (
          <>
            <Hero onExplore={() => setView('products')} />
            <section className="py-24 bg-slate-50 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">우리의 서비스</h2>
                  <div className="w-12 h-1 bg-indigo-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-xl">01</div>
                    <h3 className="text-xl font-bold mb-4">엄선된 미술 재료</h3>
                    <p className="text-slate-500 leading-relaxed">KC 인증을 받은 안전하고 고품질의 재료만을 사용하여 아이들이 안심하고 즐길 수 있도록 준비했습니다.</p>
                  </div>
                  <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 font-bold text-xl">02</div>
                    <h3 className="text-xl font-bold mb-4">직관적인 튜토리얼</h3>
                    <p className="text-slate-500 leading-relaxed">복잡한 설명서 대신 아이들이 보고 쉽게 따라 할 수 있는 재미있는 유튜브 영상 가이드를 제공합니다.</p>
                  </div>
                  <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6 font-bold text-xl">03</div>
                    <h3 className="text-xl font-bold mb-4">교회/유치원 맞춤</h3>
                    <p className="text-slate-500 leading-relaxed">시즌별, 절기별 테마에 맞춘 패키지 구성으로 선생님들의 준비 시간을 획기적으로 줄여드립니다.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={view} onNavClick={(v) => setView(v)} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-white text-xl font-bold mb-2 tracking-tighter">뽀뽀미미콩<span className="text-amber-500">.</span></div>
            <p className="text-xs">© 2024 뽀뽀미미콩 (Popo Mimi Kong). All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">환불정책</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
