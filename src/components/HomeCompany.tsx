'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Info, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeCompany() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-transparent overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <Info className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-3xl md:text-4xl">会社案内</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-60 -z-10 leading-none select-none pr-4">
                about us
              </span>
            </h2>
          </div>
        </FadeIn>

        <div ref={cardRef} className="max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformStyle: 'preserve-3d' }}
            onAnimationComplete={() => {
              // アニメーション完了後に3Dコンテキストを解除してテキスト描画を正常化
              if (cardRef.current) {
                const inner = cardRef.current.querySelector('[style*="preserve-3d"]') as HTMLElement;
                if (inner) {
                  inner.style.transformStyle = 'flat';
                  inner.style.transform = 'none';
                }
              }
            }}
          >
            <Link href="/about/" className="block group">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border-[3px] border-[var(--border-light)] shadow-xl transition-all group-hover:shadow-2xl group-hover:border-[var(--primary-green)]/30">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform group-hover:scale-105">
                    <Image
                      src="/pic/ceo-photo.webp?v=2"
                      alt="代表取締役 望月達也"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-xs text-(--text-light) mb-1">代表取締役</p>
                    <p className="text-lg font-bold text-(--text-dark)">望月 達也</p>
                  </div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col">
                  <p className="text-(--text-medium) leading-relaxed mb-6">
                    親子代々続く確かな技術で、塗装から不用品回収・清掃まで幅広く対応。安心と丁寧をモットーにお客様の暮らしを支えます。
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-(--primary-green) group-hover:gap-2 transition-all ml-auto">
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
