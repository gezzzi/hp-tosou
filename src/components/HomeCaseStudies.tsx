'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';

export default function HomeCaseStudies() {
  // 実績ページから取得したデータ
  const cases = [
    {
      id: '1',
      title: '外壁塗装施工例',
      category: '塗装',
      description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=1440&fit=crop&q=90',
      imageMobile: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=1600&fit=crop&q=90',
      href: '/works/1',
      color: 'primary'
    },
    {
      id: '2',
      title: '屋根塗装施工例',
      category: '塗装',
      description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1440&fit=crop&q=90',
      imageMobile: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1600&fit=crop&q=90',
      href: '/works/4',
      color: 'primary'
    },
    {
      id: '3',
      title: '不用品回収',
      category: '不用品回収',
      description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
      image: '/pic/truck.webp',
      imageMobile: '/pic/truck.webp',
      href: '/works/2',
      color: 'junk'
    },
    {
      id: '4',
      title: '高圧洗浄清掃・草刈り作業',
      category: '清掃',
      description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&h=1440&fit=crop&q=90',
      imageMobile: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=1600&fit=crop&q=90',
      href: '/works/3',
      color: 'junk'
    },
    {
      id: '5',
      title: '防水塗装・シーリング工事',
      category: '塗装',
      description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1440&fit=crop&q=90',
      imageMobile: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=1600&fit=crop&q=90',
      href: '/works/6',
      color: 'primary'
    },
    {
      id: '6',
      title: 'ゴミ屋敷清掃',
      category: '清掃',
      description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&h=1440&fit=crop&q=90',
      imageMobile: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=1600&fit=crop&q=90',
      href: '/works/5',
      color: 'junk'
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // カードの幅とgapを計算（ピクセル単位）
  const cardWidth = isMobile ? 256 : 384; // w-64 = 256px, w-96 = 384px
  const gap = isMobile ? 16 : 24; // gap-4 = 16px, gap-6 = 24px
  const totalDistance = (cardWidth + gap) * cases.length;

  return (
    <section className="py-16 bg-transparent overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <Trophy className="w-10 h-10 text-(--secondary-green)" />
              <span className="relative z-10 text-3xl md:text-4xl">実績</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl md:text-6xl font-black text-slate-300 italic uppercase tracking-tighter opacity-60 -z-10 leading-none select-none pr-1">
                WORKS
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* 連続スクロール（モバイル・PC共通） */}
        <div className="overflow-hidden -mx-4">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: [0, -totalDistance]
            }}
            transition={{
              x: {
                duration: isMobile ? cases.length * 6 : cases.length * 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {[...cases, ...cases].map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={item.href}
                className="flex-shrink-0 w-64 md:w-96"
              >
                <div className="rounded-lg overflow-hidden shadow-lg relative aspect-[3/4]">
                  <Image
                    src={item.imageMobile}
                    alt={item.title}
                    fill
                    className="object-cover"
                    quality={90}
                    sizes="(max-width: 768px) 256px, 384px"
                  />
                  <div className={`absolute inset-0 ${item.color === 'primary' ? 'bg-primary/10' : 'bg-service-junk/10'}`}></div>
                  <div className="absolute inset-0 flex flex-col p-4 md:p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                    <div className="mt-auto">
                      <span className={`text-xs md:text-sm px-2 py-1 rounded-full ${item.color === 'primary' ? 'bg-[#018615]' : 'bg-[#166caa]'} text-white mb-2 inline-block`}>
                        {item.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/works/" className="btn-outline">
              実績一覧 →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
