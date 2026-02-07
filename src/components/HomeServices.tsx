'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeServices() {
  const services = [
    {
      title: '塗装',
      description: '外壁塗装、屋根塗装、物置・門扉など各種塗装工事。\n親子代々続く確かな技術で対応します。',
      image: '/pic/service-tosou-v2.jpg?v=2',
      href: '/services/painting',
      color: 'primary'
    },
    {
      title: '不用品回収・清掃',
      description: '2トントラック積み放題28,000円。\n追加料金なし、自社施工で安心のサービスを提供します。',
      image: '/pic/truck.webp?v=2',
      href: '/services/junk-removal',
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 bg-(--bg-light) overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <ClipboardCheck className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-2xl md:text-3xl lg:text-5xl">サービス</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-60 -z-10 leading-none select-none pr-4">
                service
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-sm md:max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} direction={index === 0 ? 'right' : 'left'}>
              <Link
                href={service.href}
                className="block rounded-lg overflow-hidden shadow-lg group relative aspect-[4/3] w-full"
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
                <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/80 via-black/30 to-transparent pb-8">
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-auto brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap transition-colors"
                  >
                    <span className={`relative z-10 ${service.color === 'accent' ? 'text-black/70' : 'text-white'}`}>{service.title}</span>
                    <div className={`brush-stroke-bg ${service.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                  </motion.h3>
                  <div className="mt-8">
                    <p className="text-white/90 text-base md:text-lg lg:text-xl mb-4 line-clamp-3 whitespace-pre-wrap">
                      {service.description}
                    </p>
                    <div className="text-right">
                      <span className="text-white/80 text-sm font-bold flex items-center justify-end gap-1 group-hover:text-white transition-colors">
                        Read More
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
