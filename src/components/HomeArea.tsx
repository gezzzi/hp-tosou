'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

export default function HomeArea() {
  const areas = [
    { region: '東部', cities: ['富士市', '富士宮市', '沼津市', '三島市', '御殿場市', '裾野市', '長泉町', '清水町', '小山町'] },
    { region: '中部', cities: ['静岡市', '焼津市', '藤枝市', '島田市', '牧之原市', '吉田町'] },
    { region: '西部', cities: ['浜松市', '磐田市', '掛川市', '袋井市', '菊川市', '湖西市'] },
    { region: '伊豆', cities: ['熱海市', '伊東市', '下田市', '伊豆市', '伊豆の国市', '東伊豆町', '西伊豆町', '松崎町', '南伊豆町', '河津町', '函南町'] },
  ];

  return (
    <section className="py-16 bg-(--bg-light) overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
            <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
              <MapPin className="w-10 h-10 text-(--secondary-green) shrink-0" />
              <span className="relative z-10 text-3xl md:text-4xl">対応エリア</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-60 -z-10 leading-none select-none pr-4">
                area
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn direction="none" delay={0.2}>
          <div className="max-w-3xl mx-auto">
          <div className="border-t-[3px] border-(--border-light) overflow-hidden">
            <div className="border-x-[3px] border-(--border-light)">
              <div className="bg-(--bg-light) px-4 py-3 border-b-[3px] border-(--border-light)">
                <h3 className="font-bold text-xl text-(--text-dark) flex items-center justify-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  静岡県内全域対応
                </h3>
              </div>

              <div>
                <div className="p-4 md:p-6 pb-0">
                  {/* マップ画像 */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-4/3 w-full max-w-[600px] mx-auto mb-8 transition-all"
                  >
                    <Image
                      src="/shizuoka.png"
                      alt="静岡県対応エリアマップ"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                {/* エリア表形式 */}
                <div className="bg-white overflow-hidden border-y-[3px] border-(--border-light)">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-(--border-light)">
                        <th className="py-3 px-6 text-center font-bold text-primary w-1/4 border-r border-(--border-light)">地域</th>
                        <th className="py-3 px-6 text-center font-bold text-primary">対応市区町村</th>
                      </tr>
                    </thead>
                    <tbody>
                      {areas.map((area, index) => (
                        <motion.tr 
                          key={index} 
                          whileHover={{ backgroundColor: "rgba(111, 187, 24, 0.05)" }}
                          className={index !== areas.length - 1 ? "border-b border-(--border-light) transition-colors" : "transition-colors"}
                        >
                          <td className="py-3 px-6 font-bold text-(--text-dark) bg-slate-50/50 text-center border-r border-(--border-light)">
                            {area.region}
                          </td>
                          <td className="py-3 px-6 text-(--text-medium) leading-relaxed">
                            {area.cities.join('、')}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <p className="text-(--text-medium) text-sm">
                山梨県・関東地方も出張可能です。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
  );
}
