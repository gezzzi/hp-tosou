'use client';

import { useState, useEffect, useRef } from 'react';
import { HelpCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const TROUBLES = [
  '外壁の汚れやひび割れが目立ってきた',
  '屋根のサビや色あせをなんとかしたい',
  '家中の不用品、自分で処分するには多すぎる',
  'お庭や外壁を草刈機・高圧洗浄機できれいにしたい',
  '大手業者の見積もりが高すぎて驚いた',
  '地元の信頼できる業者に直接頼みたい'
];

export default function HomeTroubles() {

  // 2列表示（384px 〜 767px）かどうかを判定する
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 384px) and (max-width: 767px)');
    setIsTwoColumn(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsTwoColumn(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // IntersectionObserverでビューポート内に入ったらアニメーション開始
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 色の決定ロジック
  const getCircleColor = (index: number) => {
    if (isTwoColumn) {
      // 2列表示の場合：1行目(0,1)は(P,S)、2行目(2,3)は(S,P)、3行目(4,5)は(P,S)
      // 行番号 (index / 2 の切り捨て) が奇数なら反転させる
      const row = Math.floor(index / 2);
      const isEvenRow = row % 2 === 0;
      if (isEvenRow) {
        return index % 2 === 0 ? 'var(--primary-green)' : 'var(--secondary-green)';
      } else {
        return index % 2 === 0 ? 'var(--secondary-green)' : 'var(--primary-green)';
      }
    }
    // 1列または3列表示の場合：単純に交互
    return index % 2 === 0 ? 'var(--primary-green)' : 'var(--secondary-green)';
  };

  return (
    <section className="py-16 bg-transparent overflow-visible relative">
      <div className="max-w-4xl mx-auto px-2 md:px-4 relative z-10">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <HelpCircle className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-2xl md:text-3xl lg:text-5xl">こんなお困りごとはありませんか？</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-60 -z-10 leading-none select-none pr-4">
                problems
              </span>
            </h2>
          </div>
        </FadeIn>

        <div ref={containerRef}>
          <style>{`
            @keyframes dropIn {
              0% {
                opacity: 0;
                transform: translateY(-300px) rotate(-10deg);
              }
              60% {
                transform: translateY(15px) rotate(5deg);
              }
              80% {
                transform: translateY(-8px) rotate(-2deg);
              }
              100% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
              }
            }
            .circle-drop {
              opacity: 0;
              transform: translateY(-300px);
            }
            .circle-drop.animate {
              animation: dropIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-[340px] sm:max-w-[500px] md:max-w-none mx-auto">
            {TROUBLES.map((trouble, index) => (
              <div
                key={index}
                className={`circle-drop${isVisible ? ' animate' : ''} trouble-item relative group w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 flex items-center justify-center transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 画像のデザインを忠実に再現したSVG */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full drop-shadow-lg">
                  {/* 外側の塗りつぶし円 */}
                  <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill={getCircleColor(index)}
                  />
                  {/* 外側の白線 */}
                  <circle cx="100" cy="100" r="92" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>

                {/* テキスト部分：画像のように複数行で中央配置 */}
                <div className="relative z-10 text-white font-bold text-center px-6 leading-relaxed text-base md:text-xl">
                  {trouble.match(/.{1,7}/g)?.map((line, i) => (
                    <p key={i} className="whitespace-nowrap">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
            <p className="font-bold text-lg md:text-2xl text-(--primary-green) mb-2">
              そのお悩み、塗装と不用品回収・清掃のプロが解決します！
            </p>
            <p className="text-(--text-medium) text-base sm:text-lg">
              お気軽にご相談ください
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
