
import React, { useState } from 'react';

interface NavbarProps {
  onNavClick: (view: 'home' | 'products' | 'tutorials' | 'contact') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '소개' },
    { id: 'products', label: '키트 마켓' },
    { id: 'tutorials', label: '만들기 영상' },
    { id: 'contact', label: '문의하기' }
  ];

  const handleLinkClick = (id: any) => {
    onNavClick(id);
    setIsMenuOpen(false); // 메뉴 클릭 시 닫기
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 로고 */}
        <div 
          className="text-2xl font-bold text-indigo-600 cursor-pointer tracking-tighter"
          onClick={() => handleLinkClick('home')}
        >
          뽀뽀미미콩<span className="text-amber-500">.</span>
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-sm font-semibold transition-colors ${
                currentView === item.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 모바일 토글 버튼 */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-indigo-600 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div className={`md:hidden absolute left-0 right-0 bg-white border-b border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-xl text-base font-bold transition-colors ${
                currentView === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
