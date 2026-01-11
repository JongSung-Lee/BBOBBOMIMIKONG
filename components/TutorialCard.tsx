
import React from 'react';
import { Tutorial } from '../types';

const TutorialCard: React.FC<{ tutorial: Tutorial }> = ({ tutorial }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${tutorial.youtubeId}`;

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden group relative h-64 shadow-lg shadow-slate-200">
      <img 
        src={tutorial.thumbnail} 
        alt={tutorial.title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-transparent">
        <div className="mb-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
            tutorial.difficulty === '쉬움' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
          }`}>
            {tutorial.difficulty}
          </span>
        </div>
        <h3 className="text-white text-xl font-bold mb-4">{tutorial.title}</h3>
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform"
        >
          영상 보러가기
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
