import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { BookOpen, Database, Smartphone, Brain, Rocket, Code2, Terminal, Server, Camera, Cpu, Layers, CheckCircle } from 'lucide-react';

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
      { threshold: 0.1, rootMargin: '0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CourseSection: React.FC = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "프로그래밍 실습",
      category: "기초 프로그래밍",
      icon: Terminal,
      content: "프로그래밍 기초 요소 학습 / 파일 조작과 문서 탐색 / 오픈소스 활용 및 실습",
      stacks: ["프로그래밍 언어", "HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 2",
      title: "서버 프로그래밍과 데이터베이스 구현",
      category: "백엔드 & DB",
      icon: Database,
      content: "서버프로그래밍 기초 요소 / 데이터베이스 구현과 관리 / 서버와 데이터베이스 실습",
      stacks: ["서버와 데이터베이스 실습", "SQL", "jQuery"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 3",
      title: "임베디드 시스템과 펌웨어 프로그래밍",
      category: "임베디드 펌웨어",
      icon: Cpu,
      content: "펌웨어 프로그래밍 기초 / 마이크로컨트롤러 기반 프로그래밍 / 센서와 액추에이터 활용",
      stacks: ["아두이노", "센서 IF 신호처리", "MCU 프로그래밍 실습", "Server / Client / Serial 통신 터미널 GUI 프로그램"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 4",
      title: "애플리케이션개발언어",
      category: "알고리즘 & 자료구조",
      icon: Code2,
      content: "자료구조 파악 / 알고리즘 파악 및 실습",
      stacks: ["자료구조 파악", "알고리즘 파악 및 실습", "HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 5",
      title: "임베디드시스템과 라즈베리파이 활용",
      category: "SBC & MCU 응용",
      icon: Server,
      content: "라즈베리파이로 프로그래밍 / 센서 및 데이터 활용 / MCU(STM32, ESP32) 활용",
      stacks: ["라즈베리파이", "USB Web 카메라 영상처리 제어 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 6",
      title: "리눅스 기초와 활용",
      category: "임베디드 리눅스",
      icon: Layers,
      content: "리눅스 환경구축 / 리눅스 운영체제 소개와 기본 명령어 / 파일 시스템 관리 및 권한 설정",
      stacks: ["ESP32 펌웨어 제어 프로그램 실습", "UART / USART 시리얼 통신 제어 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 7",
      title: "컴퓨터 비전 활용",
      category: "AI & 영상인식",
      icon: Camera,
      content: "컴퓨터 비전 기초 / OpenCV 활용 프로그래밍 / 응용 프로젝트 / 딥러닝을 통한 이미지 분류 / 확장된 이미지 처리 기술",
      stacks: ["OpenCV활용 프로그래밍 실습", "영상처리 및 인식 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 8",
      title: "웹 대시보드 디자인과 활용",
      category: "IoT 관제 & 대시보드",
      icon: Smartphone,
      content: "웹 프론트엔드 기초 / 데이터 시각화와 대시보드 구현",
      stacks: ["데이터 시각화와 대시보드 구현 실습", "Network 소켓 통신 프로그램 실습"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 9",
      title: "SmartFarm 통합 IOT관리 시스템 개발프로젝트",
      category: "최종 캡스톤 프로젝트",
      icon: Rocket,
      content: "SmartFarm제작 / 컴퓨터비전 SmartFarm제작 / 화재감지 모니터링시스템 SmartFarm제작",
      stacks: ["스마트팜 제작", "컴퓨터비전 스마트팜 제작", "화재감지 모니터링 시스템 스마트팜 제작"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2940&auto=format&fit=crop",
      isHighlight: true
    }
  ];

  return (
    <section id="courses" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800/20 border border-purple-800/40 text-purple-300 mb-4 backdrop-blur-md">
            <Code2 size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">CURRICULUM ROADMAP</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            체계적인 <span className="text-purple-400">9단계 실무 완성 커리큘럼</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            기초 프로그래밍부터 최종 스마트팜 IoT 캡스톤 프로젝트까지 완벽하게 연계된 실무 중심 로드맵입니다.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal 
                key={idx} 
                delay={idx * 80}
                className={`${item.isHighlight ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className={`relative h-full rounded-3xl overflow-hidden border transition-all duration-300 group flex flex-col ${
                  item.isHighlight 
                    ? 'bg-gradient-to-br from-purple-950/60 via-zinc-900/90 to-black border-purple-500/50 shadow-[0_0_40px_rgba(107,33,168,0.2)] p-8 md:p-10' 
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-purple-500/40 p-6 md:p-8 backdrop-blur-md'
                }`}>
                  
                  {/* Background Image / Glow for highlight card */}
                  {item.isHighlight && (
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl flex items-center justify-center ${item.isHighlight ? 'bg-purple-600 text-white shadow-lg' : 'bg-zinc-800 text-purple-400 group-hover:bg-purple-800 group-hover:text-white transition-colors'}`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-purple-400 font-black tracking-wider text-sm md:text-base">{item.step}</span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-800 text-gray-300 border border-zinc-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className={`font-black text-white mb-3 tracking-tight ${item.isHighlight ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    {item.content}
                  </p>

                  <div className="mt-auto pt-4 border-t border-zinc-800/80">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-purple-400" />
                      실습 및 기술 스택
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.stacks.map((stack, sIdx) => (
                        <span key={sIdx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-800/80 text-gray-200 border border-zinc-700/60">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Consultation CTA */}
        <Reveal className="w-full mt-20 flex justify-center">
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-black text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(107,33,168,0.4)] hover:shadow-[0_0_50px_rgba(107,33,168,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }}></span>
            교육 과정 상담 신청하기
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
};
