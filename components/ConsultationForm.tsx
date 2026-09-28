import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-300 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (!mobile) {
      e.preventDefault();
      window.open('https://naver.me/FG794pnA', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-purple-900 via-purple-850 to-purple-950 text-white scroll-mt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white mb-4 backdrop-blur-md">
                <Sparkles size={14} className="text-yellow-300" />
                <span className="text-xs font-bold tracking-wide">1:1 맞춤 교육 상담</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                망설이지 마세요.<br />
                교육 전문가가<br />
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">친절하게 안내해드립니다.</span>
              </h2>

              <p className="text-base md:text-xl font-medium text-white/85 mb-8 leading-relaxed">
                국비지원 자격 여부부터 취업·교육과정까지<br />
                <span className="border-b-2 border-white pb-0.5 font-bold">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white text-purple-900 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">
                      {isMobile ? "전화문의 (터치 시 통화 연결)" : "전화문의 (클릭 시 온라인 상담신청 이동)"}
                    </p>
                    <a 
                      href={isMobile ? "tel:01046312547" : "https://naver.me/FG794pnA"}
                      target={isMobile ? undefined : "_blank"}
                      rel={isMobile ? undefined : "noopener noreferrer"}
                      onClick={handlePhoneClick}
                      className="text-2xl md:text-3xl font-black block hover:text-white/80 transition-colors"
                      title={isMobile ? "전화 걸기" : "상담신청 페이지로 이동"}
                    >
                      010-4631-2547
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white text-purple-900 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">교육장소</p>
                    <p className="text-xl md:text-2xl font-bold">한국직업능력교육원 안산</p>
                  </div>
                </div>
              </div>

              <p className="font-bold text-base md:text-lg mt-6 text-white/90">
                여러분의 새로운 도약과 꿈을 힘차게 응원합니다!
              </p>
            </Reveal>
          </div>

          {/* Right Action Button Column (Replacing Form) */}
          <Reveal delay={150} className="w-full">
            <div className="bg-zinc-950/90 border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden flex flex-col items-center text-center group">
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-800/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 mb-6 backdrop-blur-md shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold tracking-wide">실시간 온라인 접수 중</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-snug">
                빠르고 간편한 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">온라인 상담신청</span>
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium">
                비전공자도 가능한 1:1 맞춤 커리큘럼 설계부터 국비지원 혜택까지, 간편 신청서를 작성해주시면 전문 상담원이 친절히 상담을 도와드립니다.
              </p>

              <a 
                href="https://naver.me/FG794pnA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-white via-gray-100 to-white text-purple-950 font-black text-lg md:text-xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10 tracking-tight">상담신청하기</span>
                <ArrowUpRight className="relative z-10 w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>

              <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                  수강료  95~100% 국비지원
                </span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30"></span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                  1:1 맞춤 취업 컨설팅
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
