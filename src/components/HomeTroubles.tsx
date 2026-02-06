'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeTroubles() {
  const troubles = [
    '外壁の汚れやひび割れが目立ってきた',
    '屋根のサビや色あせをなんとかしたい',
    '家中の不用品、自分で処分するには多すぎる',
    'お庭や外壁を草刈機・高圧洗浄機できれいにしたい',
    '大手業者の見積もりが高すぎて驚いた',
    '地元の信頼できる業者に直接頼みたい'
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-2 md:px-4 relative z-10">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <HelpCircle className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-2xl md:text-3xl lg:text-5xl">こんなお困りごとはありませんか？</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-4">
                problems
              </span>
            </h2>
          </div>
        </FadeIn>

        <div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {troubles.map((trouble, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className="trouble-item relative group w-44 h-44 md:w-56 md:h-56 flex items-center justify-center transition-all duration-300"
                >
                  {/* 画像のデザインを忠実に再現したSVG */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full drop-shadow-lg">
                    {/* 外側の塗りつぶし円 */}
                    <circle
                      cx="100"
                      cy="100"
                      r="98"
                      className="trouble-circle"
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
                </motion.div>
              </FadeIn>
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
