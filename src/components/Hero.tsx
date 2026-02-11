'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-transparent">
      {/* 背景画像と切り抜き処理 */}
      <div className="absolute inset-0 z-0">
        {/* モバイル用（V0.90） */}
        <div
          className="absolute inset-0 min-[461px]:hidden"
          style={{
            clipPath: 'url(#hero-single-wave-mobile)',
            WebkitClipPath: 'url(#hero-single-wave-mobile)',
          }}
        >
          <div className="h-full w-full relative">
            <Image
              src="/pic/home-mb.png"
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
        </div>
        {/* デスクトップ用（V0.85） */}
        <div
          className="absolute inset-0 hidden min-[461px]:block"
          style={{
            clipPath: 'url(#hero-single-wave-desktop)',
            WebkitClipPath: 'url(#hero-single-wave-desktop)',
          }}
        >
          <div className="h-full w-full relative">
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
        </div>

        {/* 波形クリップパス定義 */}
        <svg width="0" height="0" className="absolute">
          <defs>
            {/* モバイル用（V0.90） */}
            <clipPath id="hero-single-wave-mobile" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.90 C1,0.90 0.8,1 0.5,1 C0.2,1 0,0.90 0,0.90 Z" />
            </clipPath>
            {/* デスクトップ用（V0.85） */}
            <clipPath id="hero-single-wave-desktop" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.85 C1,0.85 0.8,1 0.5,1 C0.2,1 0,0.85 0,0.85 Z" />
            </clipPath>
          </defs>
        </svg>
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
            <span className="inline text-5xl md:text-7xl pb-1 md:pb-2 bg-bottom-left bg-repeat-x bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2020%22%3E%3Cpath%20d%3D%22M0%2010%20H40%22%20fill%3D%22none%22%20stroke%3D%22%23ffea03%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-size-[auto_12px] md:bg-size-[auto_20px] box-decoration-clone leading-[1.4] md:leading-tight">
              <span className="text-accent">安心</span>と<span className="text-accent">丁寧</span>を
              <br className="min-[1001px]:hidden" />
              お届けします！
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
