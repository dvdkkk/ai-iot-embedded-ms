
import React from 'react';
import { Star, Calendar, Clock, MapPin, Home, UserCheck, Flame, Cpu } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  // Icon mapping for stats (Recruitment Summary)
  const statIcons = [
    <Flame size={16} className="text-red-500 animate-pulse" />,
    <Clock size={16} className="text-purple-400" />,
    <Calendar size={16} className="text-purple-400" />,
    <MapPin size={16} className="text-purple-400" />,
    <Home size={16} className="text-purple-400" />,
    <UserCheck size={16} className="text-purple-400" />,
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-28 pb-16">
      
      {/* Background Image with opacity and brightness adjustment + multi-layer gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://postfiles.pstatic.net/MjAyNjA5MTVfNjkg/MDAxNzg5NDUzNzgwMzc3.pTnYakJdg9ORqrFyJA2NldeMvytmwI8Jh3dBu2dHLHEg.ZG44_0USliLs-SdmPNyYPp3r-QIg6Ewdzglo-ZwfkyYg.PNG/2654.png?type=w966"
          alt="Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-100 brightness-105 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
      </div>

      {/* Content (z-10) - Left-aligned */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800/20 border border-purple-800/40 text-purple-300 mb-6 backdrop-blur-md shadow-lg">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold tracking-wide">{hero.badge}</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            미래를 여는 인공지능 기술 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white whitespace-pre-line drop-shadow-[0_2px_8px_rgba(107,33,168,0.5)]">
              {hero.highlight}
            </span> <br />
            거듭나세요
          </h1>
          
          <p className="text-base md:text-xl text-gray-200 mb-10 font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {hero.description}
          </p>

          {/* Course Title Plate */}
          <div className="mb-10 max-w-3xl">
            <div className="relative p-6 md:p-8 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-transparent"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-900/40 rounded-2xl border border-purple-500/30 text-purple-300 hidden md:flex">
                  <Cpu size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Official Course Name</span>
                  </div>
                  <h2 className="text-lg md:text-2xl font-black text-white tracking-tight leading-snug">
                    AI사물인터넷 MCU기반 (STM32, ESP32) <span className="text-purple-400">임베디드 펌웨어 전문가 양성</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Info Summary (6 Items) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full bg-zinc-950/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start justify-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/30 transition-colors group">
                <div className="flex items-center gap-2 mb-1.5">
                  {statIcons[idx]}
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
                <p className="text-xs md:text-base font-black text-white break-keep drop-shadow-sm">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

