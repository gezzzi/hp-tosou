'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClipboardCheck } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeCaseStudies() {
  const cases = [
    {
      id: 'painting',
      title: '塗装',
      category: '塗装',
      description: '築15年の住宅。外壁のひび割れと屋根の苔が目立っていましたが、高耐久塗料で新築同様の輝きを取り戻しました。',
      image: '/pic/service-tosou-v2.jpg',
      href: '/case-studies/painting',
      color: 'primary'
    },
    {
      id: 'junk',
      title: '不用品回収・清掃',
      category: '不用品回収',
      description: '実家の片付けに伴う不用品回収。2トントラック2台分、家具から家電まで1日でスピーディーに回収いたしました。',
      image: '/pic/hd/junk-hd.jpg',
      href: '/case-studies/junk-removal',
      color: 'junk'
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <ClipboardCheck className="w-10 h-10 text-(--secondary-green)" />
              <span className="relative z-10 text-3xl md:text-4xl">サービス事例</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-30 -z-10 leading-none select-none pr-1">
                works
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm md:max-w-[800px] mx-auto">
          {cases.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.2} direction={index === 0 ? 'right' : 'left'}>
              <div
                className="rounded-lg overflow-hidden shadow-lg group relative aspect-square w-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${item.color === 'primary'
                  ? 'bg-primary/10'
                  : 'bg-service-junk/10'
                  }`}></div>
                <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-auto brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap">
                    <span className="relative z-10">{item.title}</span>
                    <div className={`brush-stroke-bg ${item.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                  </h3>
                  <div className="mt-4">
                    <p className="text-white/90 text-base mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="text-center">
                      <Link href={item.href} className={item.color === 'primary' ? 'btn-secondary' : 'btn-junk'}>
                        詳しく見る →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/case-studies/" className="btn-outline">
              事例一覧 →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
