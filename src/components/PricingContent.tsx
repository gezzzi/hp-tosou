'use client';

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";

export default function PricingContent() {
  return (
    <>
      {/* 導入セクション */}
      <section className="py-16 bg-[var(--bg-light)] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
              安心と信頼の適正価格
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            <p className="text-[var(--text-medium)] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              株式会社マルヨでは、お客様に安心してご依頼いただけるよう、
              不透明な追加料金を排除した明朗会計を徹底しています。
              地域密着だからこそできる、高品質かつ適正価格なサービスをご提供いたします。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-0">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="#painting"
                  className="flex items-center justify-center w-72 bg-white border-2 border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white px-8 py-3 rounded-full font-bold transition-all shadow-sm text-center"
                >
                  塗装工事の料金
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="#junk-removal"
                  className="flex items-center justify-center w-72 bg-white border-2 border-[var(--accent-yellow)] text-[var(--text-dark)] hover:bg-[var(--accent-yellow)] px-8 py-3 rounded-full font-bold transition-all shadow-sm text-center"
                >
                  不用品回収・清掃の料金
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* bg-light -> transparent (Wave at top) */}
      <div className="bg-transparent">
        <WaveDivider color="var(--bg-light)" flip />
      </div>

      {/* 塗装料金 */}
      <section id="painting" className="py-16 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-4 text-center">
              塗装工事
            </h2>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ borderColor: "var(--primary-green-light)", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white rounded-lg p-8 mb-8 border-2 border-[#6fbb18] shadow-md transition-all"
              >
                <div className="text-center mb-6">
                  <p className="text-lg md:text-2xl text-[var(--text-medium)] mb-2">塗装工事は建物の状態や面積によって異なります</p>
                </div>

                <div className="border-t border-[#6fbb18]/60 pt-6">
                  <h3 className="text-lg md:text-2xl font-bold text-[var(--text-dark)] mb-4">料金に含まれるもの</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-[var(--text-medium)]">
                    {[
                      "足場設置・解体費用",
                      "高圧洗浄",
                      "下地処理",
                      "塗料代・施工費"
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2"
                      >
                        <svg className="w-5 h-5 text-[var(--primary-green)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* transparent -> bg-light (Wave at bottom) */}
      <div className="bg-transparent">
        <WaveDivider color="var(--bg-light)" />
      </div>

      {/* 不用品回収料金 */}
      <section id="junk-removal" className="py-16 bg-[var(--bg-light)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-4 text-center">
              不用品回収・清掃
            </h2>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.2} direction="right">
              <motion.div 
                whileHover={{ borderColor: "var(--accent-yellow-dark)", backgroundColor: "rgba(255, 234, 3, 0.15)", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-[var(--accent-yellow)]/10 rounded-lg p-8 text-center mb-8 border-2 border-[var(--accent-yellow)] shadow-md transition-all"
              >
                <p className="text-xl md:text-2xl font-bold text-[var(--text-dark)] mb-2">2トントラック積み放題</p>
                <p className="text-5xl md:text-7xl font-bold text-[var(--text-dark)] mb-2">
                  28,000<span className="text-xl md:text-2xl">円</span>
                </p>
                <p className="text-base text-[var(--text-medium)]">（税込）</p>
              </motion.div>
            </FadeIn>

            <div className="space-y-4 mb-8">
              <FadeIn delay={0.3} direction="left">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 bg-green-50 rounded-lg p-4 transition-colors hover:bg-green-100">
                  <svg className="w-6 h-6 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg md:text-2xl font-bold text-green-700">追加料金一切なし</span>
                </motion.div>
              </FadeIn>
              <FadeIn delay={0.4} direction="left">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 bg-green-50 rounded-lg p-4 transition-colors hover:bg-green-100">
                  <svg className="w-6 h-6 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg md:text-2xl font-bold text-green-700">作業外注一切なし</span>
                </motion.div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
