
import React from 'react';

interface NavbarProps {
  onNavClick: (view: 'home' | 'products' | 'tutorials' | 'contact') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, currentView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-indigo-600 cursor-pointer tracking-tighter"
          onClick={() => onNavClick('home')}
        >
          뽀뽀미미콩<span className="text-amber-500">.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { id: 'home', label: '소개' },
            { id: 'products', label: '키트 마켓' },
            { id: 'tutorials', label: '만들기 영상' },
            { id: 'contact', label: '문의하기' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id as any)}
              className={`text-sm font-semibold transition-colors ${
                currentView === item.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden text-indigo-600">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
