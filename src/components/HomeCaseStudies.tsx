'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function HomeCaseStudies() {
  const [activeTab, setActiveTab] = useState<'painting' | 'junk'>('painting');

  const cases = [
    {
      id: 'painting',
      title: '外壁・屋根塗装',
      category: '塗装',
      description: '築15年の住宅。外壁のひび割れと屋根の苔が目立っていましたが、高耐久塗料で新築同様の輝きを取り戻しました。',
      image: '/pic/service-tosou-v2.jpg',
      href: '/case-studies/painting',
      color: 'primary'
    },
    {
      id: 'junk',
      title: '一軒家丸ごと回収',
      category: '不用品回収',
      description: '実家の片付けに伴う不用品回収。2トントラック2台分、家具から家電まで1日でスピーディーに回収いたしました。',
      image: 'https://images.unsplash.com/photo-1595273670150-db0a3bf39079?w=600&h=400&fit=crop',
      href: '/case-studies/junk-removal',
      color: 'junk'
    }
  ];

  const activeCase = cases.find(c => c.id === activeTab) || cases[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <ClipboardCheck className="w-10 h-10 text-(--secondary-green)" />
            <span className="relative z-10 text-3xl md:text-4xl">サービス事例</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-30 -z-10 leading-none select-none pr-1">
              works
            </span>
          </h2>
        </div>

        <div className="max-w-sm md:max-w-[800px] mx-auto">
          {/* タブ切り替え */}
          <div className="flex mb-0 w-full">
            <button
              onClick={() => setActiveTab('painting')}
              className={`flex-1 px-2 py-3 font-bold rounded-t-lg transition-all duration-300 ${
                activeTab === 'painting'
                  ? 'bg-[#2a6f48] text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10'
                  : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
              }`}
            >
              塗装
            </button>
            <button
              onClick={() => setActiveTab('junk')}
              className={`flex-1 px-2 py-3 font-bold rounded-t-lg transition-all duration-300 ${
                activeTab === 'junk'
                  ? 'bg-[#166caa] text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10'
                  : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
              }`}
            >
              不用品回収・清掃
            </button>
          </div>

          {/* コンテンツエリア */}
          <div className="bg-white rounded-b-lg rounded-tr-lg overflow-hidden shadow-lg group relative aspect-square w-full">
            <Image
              key={activeCase.id}
              src={activeCase.image}
              alt={activeCase.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className={`absolute inset-0 ${activeCase.color === 'primary'
              ? 'bg-primary/10'
              : 'bg-service-junk/10'
              }`}></div>
            <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/60 via-black/20 to-transparent">
              <div className="mb-auto">
                <h3 className="text-xl md:text-2xl font-bold brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap block">
                  <span className="relative z-10">{activeCase.title}</span>
                  <div className={`brush-stroke-bg ${activeCase.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-white/90 text-sm mb-4 line-clamp-3">
                  {activeCase.description}
                </p>
                <div className="text-center">
                  <Link href={activeCase.href} className={activeCase.color === 'primary' ? 'btn-secondary' : 'btn-junk'}>
                    詳しく見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-outline">
            事例一覧 →
          </Link>
        </div>
      </div>
    </section>
  );
}
