'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeServices() {
  const services = [
    {
      title: '塗装',
      description: '外壁塗装、屋根塗装、物置・門扉など各種塗装工事。親子代々続く確かな技術で対応します。',
      image: '/pic/service-tosou-v2.jpg?v=2',
      href: '/services/painting',
      color: 'primary'
    },
    {
      title: '不用品回収・清掃',
      description: '2トントラック積み放題28,000円。追加料金なし、自社施工で安心のサービスを提供します。',
      image: '/pic/truck.webp?v=2',
      href: '/services/junk-removal',
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 bg-(--bg-light) overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <Wrench className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-2xl md:text-3xl lg:text-5xl">サービス</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-4">
                service
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm md:max-w-[800px] mx-auto">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} direction={index === 0 ? 'right' : 'left'}>
              <div
                className="rounded-lg overflow-hidden shadow-lg group relative aspect-square w-full"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${service.color === 'primary'
                  ? 'bg-primary/10'
                  : 'bg-accent/10'
                  }`}></div>
                <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/80 via-black/30 to-transparent">
                  <motion.h3 
                    whileHover={{ color: "var(--accent-yellow)" }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-auto brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap transition-colors"
                  >
                    <span className="relative z-10">{service.title}</span>
                    <div className={`brush-stroke-bg ${service.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                  </motion.h3>
                  <div className="mt-4">
                    <p className="text-white/90 text-base mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={service.href} className={service.color === 'primary' ? 'btn-secondary' : 'btn-junk'}>
                          詳しく見る →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
            <Link href="/pricing/" className="btn-outline">
              料金案内 →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
