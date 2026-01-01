
import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Settings, 
  Wrench, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Zap,
  Star,
  Youtube, 
  Globe, 
  Send, 
  Loader2
} from 'lucide-react';

// --- Subcomponents ---

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 rounded-xl shadow-lg shadow-violet-900/20">
            <Printer className="text-white" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">DSIT</span>
            <span className="text-[10px] font-bold text-violet-400 tracking-[0.2em] -mt-1 uppercase">Premium Office</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-10 font-bold text-sm text-slate-400">
          <a 
            href="#calculator" 
            onClick={(e) => scrollToSection(e, 'calculator')}
            className="hover:text-violet-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            비용 계산기
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="hover:text-violet-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            제공 서비스
          </a>
          <a 
            href="#trust" 
            onClick={(e) => scrollToSection(e, 'trust')}
            className="hover:text-violet-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            신뢰의 이유
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-violet-500 hover:text-violet-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            견적 문의
          </a>
        </nav>
        <button 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter hover:bg-violet-500 hover:text-white transition-all shadow-xl shadow-white/5 inline-block cursor-pointer"
        >
          상담 시작하기
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden pt-24 pb-20 md:pt-40 md:pb-40">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-violet-600/10 to-transparent blur-3xl opacity-50 -z-10" />
    <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
            경남 No.1 사무환경 최적화 솔루션
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-8">
            성공을 부르는<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 animate-gradient-x">복합기 렌탈서비스</span> 
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            비즈니스의 품격은 사무환경에서 시작됩니다.<br/>
            DSIT는 2시간 내 대응과 99% 업타임을 통해<br/>
            고객의 완벽한 업무 몰입을 디자인합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-violet-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-violet-700 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-violet-900/40"
            >
              비용 절감 시뮬레이션 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://thirsty-amaranthus-86f.notion.site/DS-1ad557af30aa808e96e1c07526e7b9df?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
            >
              복합기 셀프 솔루션 <Globe size={20} className="text-violet-400" />
            </a>
          </div>
          <div className="mt-16 flex justify-center lg:justify-start items-center gap-12 text-slate-500">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white tracking-tighter">2시간</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500/80">당일 응대</span>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white tracking-tighter">98.8%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500/80">고객 유지율</span>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white tracking-tighter">300+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500/80">파트너사</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-10 bg-violet-600/20 rounded-full blur-[100px] group-hover:bg-violet-600/30 transition-all" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium High-end Office Interior" 
              className="w-full h-[500px] md:h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-5">
                <div className="bg-violet-600 p-3 rounded-2xl shadow-xl shadow-violet-900/20">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-white text-lg">프리미엄 신뢰 보장 정책</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">설치비, 보증금 0원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, features }: any) => (
  <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.08] transition-all relative overflow-hidden">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl group-hover:bg-violet-600/10 transition-all" />
    <div className="w-16 h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500">
      <Icon className="text-violet-400 group-hover:text-white" size={32} />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{title}</h3>
    <p className="text-slate-400 mb-8 leading-relaxed font-medium">{desc}</p>
    <ul className="space-y-4">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
          <div className="w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-violet-400" size={12} />
          </div>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const ROICalculator = () => {
  const [monoVol, setMonoVol] = useState(2000);
  const [colorVol, setColorVol] = useState(200);
  const [machines, setMachines] = useState(1);

  const buyCostPerYear = (machines * 4000000 / 3) + (monoVol * 12 * 15) + (colorVol * 12 * 150) + (machines * 300000);
  const calculateRentCost = () => {
    let monthlyBase = machines * 100000;
    const usageScore = (monoVol / 1000) + (colorVol / 100);
    if (usageScore > 4) monthlyBase += (usageScore - 4) * 8000;
    return monthlyBase * 12;
  };

  const rentCostPerYear = calculateRentCost();
  const savings = buyCostPerYear - rentCostPerYear;

  return (
    <section id="calculator" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-indigo-950 to-slate-950 rounded-[4rem] p-10 md:p-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#4c1d9522_0%,transparent_50%)]" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
                비즈니스 가치의<br />
                <span className="text-violet-400">극대화</span>
              </h2>
              <p className="text-slate-400 mb-14 text-lg font-medium">
                단순한 비용 절감을 넘어, 사무 환경의 품격을 높입니다.<br/>
                실제 출력 패턴을 분석하여 최적의 임대 시뮬레이션을 제공합니다.
              </p>
              
              <div className="space-y-12">
                {[
                  { label: "월 흑백 출력량", val: monoVol, setter: setMonoVol, min: 500, max: 50000, step: 500, color: "accent-violet-500" },
                  { label: "월 컬러 출력량", val: colorVol, setter: setColorVol, min: 100, max: 5000, step: 100, color: "accent-fuchsia-500" }
                ].map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-end mb-5">
                      <label className="text-slate-300 text-sm font-black uppercase tracking-widest">{s.label}</label>
                      <span className="text-white font-black text-2xl tracking-tighter">{s.val.toLocaleString()} <span className="text-sm text-slate-500 font-bold uppercase">페이지</span></span>
                    </div>
                    <input 
                      type="range" min={s.min} max={s.max} step={s.step} 
                      value={s.val} onChange={(e) => s.setter(parseInt(e.target.value))}
                      className={`w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer ${s.color}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="text-slate-300 text-sm font-black uppercase tracking-widest mb-5 block">기기 수량</label>
                  <div className="flex gap-4">
                    {[1, 2, 3, 5].map(n => (
                      <button 
                        key={n}
                        onClick={() => setMachines(n)}
                        className={`flex-1 py-4 rounded-2xl font-black transition-all border ${machines === n ? 'bg-violet-600 border-violet-600 text-white shadow-xl shadow-violet-900/40' : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'}`}
                      >
                        {n}대
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 shadow-3xl">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="text-violet-500" size={24} />
                  <span className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">연간 예상 절감액</span>
                </div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">
                   {Math.floor(savings/10000).toLocaleString()}<span className="text-3xl text-violet-400">만원</span>
                </div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">DSIT 복합기 솔루션 도입 시</p>
              </div>
              
              <div className="space-y-6 pt-10 border-t border-white/5">
                <div className="flex justify-between items-center text-slate-400 font-bold">
                  <span>자체 구매 시 총 비용</span>
                  <span className="line-through">{Math.floor(buyCostPerYear/10000).toLocaleString()}만원/연간</span>
                </div>
                <div className="bg-violet-600/10 p-6 rounded-3xl border border-violet-500/20 flex justify-between items-center">
                  <span className="text-violet-300 font-black uppercase text-sm">DSIT 임대 서비스</span>
                  <div className="text-right">
                    <p className="font-black text-white text-3xl tracking-tighter">{Math.floor(rentCostPerYear/10000).toLocaleString()}만원/연간</p>
                    <p className="text-[10px] text-violet-400 font-bold uppercase tracking-widest mt-1">맞춤형 솔루션 제안 가능</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-12 bg-white text-slate-950 py-6 rounded-2xl font-black text-xl hover:bg-violet-500 hover:text-white transition-all flex items-center justify-center gap-4 group text-center"
              >
                맞춤 제안서 받기 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xjgkkrjz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-white/10 p-10 md:p-16 rounded-[4rem] shadow-4xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-violet-600" />
        
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">최적화 견적 요청</h3>
          <p className="text-slate-400 font-medium">이름, 연락처, 이메일을 남겨주시면 2시간 내로 최적의 견적을 안내해 드립니다.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-2">이름 (Name)</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="성함을 입력하세요"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-2">연락처 (Phone)</label>
              <input 
                required
                name="phone"
                type="tel" 
                placeholder="010-0000-0000"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-2">이메일 (Email)</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="example@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-2">문의 내용 (Requirement)</label>
            <textarea 
              name="message"
              placeholder="필요하신 기종이나 사용 환경 등 상세한 요청사항을 입력해 주세요."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 h-32 text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-700"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-white text-slate-950 py-6 rounded-3xl font-black text-2xl hover:bg-violet-600 hover:text-white transition-all shadow-3xl flex items-center justify-center gap-4 group disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin" size={28} />
                전송 중...
              </>
            ) : (
              <>
                <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                지금 견적 받기
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="text-center text-emerald-400 font-bold animate-in fade-in slide-in-from-top-2">
              감사합니다! 견적 문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-rose-400 font-bold animate-in fade-in slide-in-from-top-2">
              오류가 발생했습니다. 다시 시도하거나 고객센터(055-920-5551)로 전화 주시기 바랍니다.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "김태형", company: "스타트업 A사", comment: "기기 고장나서 멘붕이었는데 1시간 만에 오셔서 수리해주셨어요. 서비스 속도가 미쳤습니다.", rating: 5, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&hairColor=2c1b18&skinColor=ffdbb4&backgroundColor=b6e3f4" },
    { name: "이지민", company: "법률사무소 B", comment: "토너 떨어지기도 전에 알아서 배송해주시니 신경 쓸 일이 하나도 없네요. 임대가 답입니다.", rating: 5, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka&hairColor=2c1b18&skinColor=ffdbb4&backgroundColor=ffd5dc" },
    { name: "김소라", company: "디자인 에이전시", comment: "컬러 퀄리티가 정말 중요했는데, 최신형으로 제안해주셔서 고객들이 결과물 보고 놀랍니다.", rating: 5, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aria&hairColor=2c1b18&skinColor=ffdbb4&backgroundColor=c0aede" },
  ];

  return (
    <section className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">파트너사의 <span className="text-violet-500">생생한 목소리</span></h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm">신뢰로 검증된 프리미엄 리뷰</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/[0.03] p-10 rounded-[3rem] border border-white/5 relative group hover:bg-white/[0.08] transition-all">
              <div className="flex gap-1.5 text-violet-500 mb-8">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-10 leading-relaxed font-medium text-lg">"{r.comment}"</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-xl bg-slate-900 group-hover:scale-110 transition-transform">
                  <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-white text-lg tracking-tight uppercase">{r.name}</p>
                  <p className="text-[10px] text-violet-400 font-black uppercase tracking-widest">{r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main Page ---

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main>
        <Hero />
        
        {/* ROI 계산기 섹션 (상단 배치 유지) */}
        <ROICalculator />

        {/* Brand Logos */}
        <section className="py-20 border-y border-white/5 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 grayscale hover:opacity-50 transition-opacity duration-1000 items-center">
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Fujifilm</span>
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Canon</span>
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Brother</span>
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Xerox</span>
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Epson</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-32 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1] uppercase">
                서비스의 기준을<br />
                <span className="text-violet-500">재정의하다</span>
              </h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                합리적인 가격 정책과 신속함 그 너머의 완벽함을 추구합니다.<br/>
                귀사의 성공적인 비즈니스 성공을 위한 최고의 파트너십을 제공합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <ServiceCard 
                icon={Printer}
                title="프리미엄 임대"
                desc="초기 비용 0원으로 최신 복합기를 도입하세요. 정기 스마트 모니터링/유지보수가 포함됩니다."
                features={["초기 설치 비용 0원", "정품 소모품 공급", "유지보수 및 원격 지원"]}
              />
              <ServiceCard 
                icon={Settings}
                title="복합기 판매"
                desc="합리적인 투자. 최고의 브랜드 기기를 가장 정직한 가격으로 구매하세요. 관리 케어 패키지 제공."
                features={["동일 조건 최저가 보장", "빠른 설치", "1년 무상 보증"]}
              />
              <ServiceCard 
                icon={Wrench}
                title="신속한 수리"
                desc="타사 기기라도 상관없습니다. 30년 경력의 마스터 엔지니어가 귀사의 비즈니스 효율을 복구합니다."
                features={["2시간 내 현장 도착", "본사 기술교육 이수", "무상 백업 기기 제공"]}
              />
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section id="trust" className="py-40 bg-indigo-950 text-white overflow-hidden relative scroll-mt-24">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#7c3aed33_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] uppercase tracking-tighter">
                  단순한 임대를 넘어,<br />
                  <span className="text-violet-400">Business Partnership</span>
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                      <Zap className="text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 uppercase tracking-tight">액티브 인텔리전스 지원</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">실시간 모니터링을 통해 오류 및 고장률을 최소화 합니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                      <ShieldCheck className="text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 uppercase tracking-tight">체계적인 시스템 운영</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">데이터 기반 운영과 효율적 운영으로 고객 업무 연속성 보장</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "고객 유지율", val: "98.8%" },
                  { label: "평균 응대 시간", val: "10분" },
                  { label: "파트너사", val: "300+", sub: `${currentDate} 기준` },
                  { label: "초기 비용", val: "0원" }
                ].map((stat, idx) => (stat.sub ? (
                  <div key={idx} className="bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
                    <p className="text-5xl font-black mb-4 text-white tracking-tighter">{stat.val}</p>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">{stat.label}</p>
                      <p className="text-[9px] text-slate-500 font-bold mt-1 uppercase">{stat.sub}</p>
                    </div>
                  </div>
                ) : (
                  <div key={idx} className={`bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between ${idx % 2 !== 0 ? 'mt-12' : ''}`}>
                    <p className="text-5xl font-black mb-4 text-white tracking-tighter">{stat.val}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">{stat.label}</p>
                  </div>
                )))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Contact */}
        <section id="contact" className="py-40 bg-slate-950 relative scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-12 italic text-white leading-tight uppercase tracking-tighter">"효율성은 새로운 최저가입니다"</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
              <a href="tel:055-920-5551" className="w-full md:w-auto bg-white text-slate-950 px-16 py-8 rounded-3xl font-black text-3xl hover:bg-violet-600 hover:text-white transition-all shadow-3xl flex items-center justify-center gap-5">
                <PhoneCall size={36} /> 055-920-5551
              </a>
              <a 
                href="https://open.kakao.com/o/si2VSj9h" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto bg-slate-800 text-white px-16 py-8 rounded-3xl font-black text-2xl hover:bg-slate-700 transition-all flex items-center justify-center gap-5 shadow-3xl border border-white/5 uppercase tracking-tighter"
              >
                카카오톡 상담
              </a>
            </div>

            {/* Quote Request Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-20 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
              <Printer className="text-violet-500" size={32} />
              <span className="text-3xl font-black text-white tracking-tighter uppercase">DSIT</span>
            </div>
            <p className="max-w-md mx-auto md:mx-0 mb-10 leading-relaxed font-medium text-lg">
              디에스아이티는 지난 15년 간 경남권 1,000여 개 기업의 비즈니스 효율을 극대화해 왔습니다. 
              우리의 목표는 단순한 기기 대여가 아닌, 고객님의 지속 가능한 성공입니다.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href="https://www.youtube.com/@jinjuprinter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all border border-white/5 group"
                aria-label="YouTube"
              >
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://thirsty-amaranthus-86f.notion.site/DS-1ad557af30aa808e96e1c07526e7b9df?source=copy_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all border border-white/5 group"
                aria-label="Solution Site"
              >
                <Globe size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10">솔루션</h5>
            <ul className="space-y-5 text-sm font-bold">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-400 transition-colors uppercase tracking-widest">프리미엄 임대</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-400 transition-colors uppercase tracking-widest">기업용 판매</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-400 transition-colors uppercase tracking-widest">전문 수리 서비스</button></li>
              <li><button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-400 transition-colors uppercase tracking-widest">보상 판매</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10">쇼룸 / 오시는 길</h5>
            <div className="space-y-6 text-sm font-bold leading-relaxed">
              <p>경남 진주시 동부로169번길 12<br/>B동 1410호 (윙스타워)</p>
              <p className="text-violet-400">T. 055-920-5551</p>
              <p>E. dsit2024@naver.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-32 pt-10 border-t border-white/5 text-[10px] text-center font-black uppercase tracking-[0.5em] text-slate-700">
          © 2026 DSIT PREMIUM OFFICE SOLUTIONS. ALL RIGHTS RESERVED. 
        </div>
      </footer>
    </div>
  );
};

export default App;
