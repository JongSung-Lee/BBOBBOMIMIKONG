
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 전송되었습니다. 감사합니다!');
  };

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 py-12">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">함께 만들어가요</h2>
          <p className="text-slate-600">
            단체 주문, 제휴 문의, 혹은 키트 제작 아이디어가 있다면 
            언제든 편하게 연락주세요. 아이들의 웃음을 위해 노력합니다.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">이메일</p>
              <p className="font-semibold text-slate-800">hello@littlecreators.kr</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">위치</p>
              <p className="font-semibold text-slate-800">서울시 서초구 창의로 123, 4층</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">성함 / 단체명</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
            placeholder="홍길동"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">연락처 / 이메일</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
            placeholder="example@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
            placeholder="궁금하신 내용을 남겨주세요."
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <button 
          type="submit"
          className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
        >
          보내기
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
