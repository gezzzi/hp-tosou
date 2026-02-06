'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function HomeCTA() {
  const title = "無料｜ご相談｜診断｜お見積り｜";
  const description = "まずはお気軽にご相談ください";
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic/hd/footer.jpg"
          alt="背景画像"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <FadeIn>
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl text-center text-(--text-dark)">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 flex flex-wrap items-center justify-center gap-x-1">
              {title === "無料｜ご相談｜診断｜お見積り｜" ? (
                <>
                  <span className="text-red-600 border-2 border-red-600 px-3 py-1 rounded-lg text-xl md:text-2xl leading-none mr-1">無料</span>
                  <span className="text-lg md:text-2xl tracking-tighter md:tracking-normal">｜ご相談｜診断｜お見積り｜</span>
                </>
              ) : title}
            </h2>
            <p className="text-xl md:text-3xl font-bold mb-6">
              <span className="inline-block border-b-4 border-accent pb-1">
                {description}
              </span>
            </p>

            <div className="mb-8">
              <motion.a 
                href="tel:054-552-8798" 
                whileHover={{ color: "var(--primary-green)" }}
                className="inline-flex items-center gap-3 text-3xl md:text-5xl font-black text-(--text-dark) transition-colors mb-2"
              >
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                054-552-8798
              </motion.a>
              <p className="text-base font-medium text-slate-600">
                <span className="border border-slate-600 px-1 mr-2">営業時間</span>平日 8:00〜17:00
              </p>
            </div>

            <div className="flex justify-center">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact/" className="btn-accent text-lg px-16! md:px-32! py-4 shadow-lg flex! items-center justify-center gap-2 whitespace-nowrap">
                  <Mail className="w-6 h-6 shrink-0" />
                  <span>お問い合わせ</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

