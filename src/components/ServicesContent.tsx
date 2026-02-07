'use client';

import { motion } from 'framer-motion';
import { Paintbrush, Truck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ServicesContent() {
  const serviceCategories = [
    {
      title: '塗装',
      description: '外壁塗装、屋根塗装など、住宅の塗装工事を承ります。親子代々続く確かな技術でお客様の大切な住まいを守ります。',
      image: '/pic/service-tosou-v2.jpg',
      href: '/services/painting',
      color: 'var(--primary-green)',
      icon: <Paintbrush className="w-16 h-16" />
    },
    {
      title: '不用品回収・清掃',
      description: '２トントラックによる不用品回収、草刈り機を使った除草作業、高圧洗浄機での土間・外壁清掃など、住まいの「困った」を解決します。',
      image: '/pic/truck.webp',
      href: '/services/junk-removal',
      color: 'var(--service-junk-light)',
      icon: <Truck className="w-16 h-16" />
    }
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
              塗装・不用品回収・清掃のことはお任せください
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            <p className="text-[var(--text-medium)] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              株式会社マルヨは、静岡県富士市を拠点に、地域に根ざした住まいのトータルサポートを提供しています。
              親子代々培ってきた確かな塗装技術をはじめ、不用品回収や専門的な清掃業務まで、
              お客様の「困った」を解決するために、誠心誠意対応させていただきます。
              どんな小さなことでも、お気軽にご相談ください。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {serviceCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 0.2} direction={index === 0 ? 'right' : 'left'}>
              <div className="text-center">
                <div className="relative h-48 md:h-64 mb-8 -mx-4 md:mx-0 rounded-lg overflow-hidden shadow-md group">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold brush-stroke-container text-white whitespace-nowrap">
                      <span className="relative z-10">{category.title}</span>
                      <div className={`brush-stroke-bg ${category.color === 'var(--primary-green)' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                    </h2>
                  </div>
                </div>
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <p className="text-[var(--text-medium)] text-base sm:text-lg mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex justify-center">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={category.href}
                      className="btn-outline px-6! flex! items-center justify-center gap-2 group whitespace-nowrap min-w-[200px]"
                    >
                      サービスの詳細
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
