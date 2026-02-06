'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {/* モバイル用画像 */}
          <div className="block min-[461px]:hidden h-full w-full relative">
            <Image
              src="/pic/header-mb.jpg?v=2"
              alt="塗装作業イメージ"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* PC・タブレット用画像 */}
          <div className="hidden min-[461px]:block h-full w-full relative">
            <Image
              src="/pic/header-pc.jpg?v=2"
              alt="塗装作業イメージ"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* オーバーレイ */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black/20"
          ></motion.div>

          {/* SVG 形状オーバーレイ (波形) */}
          <div className="absolute bottom-[-1px] left-0 right-0 z-20">
            <svg 
              viewBox="0 0 1440 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[60px] md:h-[121px] block"
              preserveAspectRatio="none"
            >
              <path 
                d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" 
                fill="white"
              />
            </svg>
          </div>
          
          {/* 装飾的なアクセント形状 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[-10%] right-[-5%] w-[50%] aspect-square bg-[var(--primary-green)] rounded-full blur-[100px] z-10"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold mb-6 leading-[1.6] md:leading-tight"
          >
            <span className="block text-2xl md:text-4xl mb-4 md:mb-6 opacity-90">塗装も、不用品回収も。</span>
            <span className="inline text-5xl md:text-7xl pb-1 md:pb-2 bg-bottom-left bg-repeat-x bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2020%22%3E%3Cpath%20d%3D%22M0%2010%20Q%2010%200%2020%2010%20T%2040%2010%22%20fill%3D%22none%22%20stroke%3D%22%23ffea03%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-size-[auto_12px] md:bg-size-[auto_20px] box-decoration-clone">
              <span className="text-accent">安心</span>と
              <span className="text-accent">丁寧</span>をお届けします！
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
