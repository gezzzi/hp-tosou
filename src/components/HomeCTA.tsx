'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

import WaveDivider from './WaveDivider';

export default function HomeCTA() {
  const title = "無料｜ご相談｜診断｜お見積り｜";
  const description = "まずはお気軽にご相談ください";
  return (
    <>
      <section className="py-16 relative overflow-hidden bg-transparent">
        {/* 背景デザインが見えるように背景画像とオーバーレイを削除 */}

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="bg-white backdrop-blur-sm p-8 md:p-12 rounded-2xl border-[3px] border-[var(--border-light)] shadow-xl text-center text-(--text-dark)">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 flex flex-wrap items-center justify-center gap-x-1">
                {title === "無料｜ご相談｜診断｜お見積り｜" ? (
                  <>
                    <span className="text-red-600 border-[3px] border-red-600 px-3 py-1 rounded-lg text-xl md:text-2xl leading-none mr-1">無料</span>
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

              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex justify-center"
                >
                  <Link href="/contact/" className="bg-[var(--accent-yellow)] text-[var(--text-dark)] hover:bg-[var(--accent-yellow-dark)] text-lg px-16! md:px-32! py-4 shadow-lg flex! items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto font-bold rounded">
                    <Mail className="w-6 h-6 shrink-0" />
                    <span>個人お問い合わせ</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex justify-center"
                >
                  <Link href="/contact/?type=business" className="bg-[var(--primary-green-light)] text-[var(--text-dark)] hover:bg-[var(--primary-green)] text-lg px-16! md:px-32! py-4 shadow-md flex! items-center justify-center gap-2 whitespace-nowrap transition-all w-full md:w-auto font-bold rounded">
                    <Mail className="w-6 h-6 shrink-0" />
                    <span>法人お問い合わせ</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

