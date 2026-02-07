'use client';

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const faqItems = [
  {
    category: "塗装工事について",
    items: [
      {
        question: "お見積りは無料ですか？",
        answer: "はい、お見積りは完全に無料です。現地調査からプランのご提案まで、費用は一切かかりませんので、まずはお気軽にご相談ください。"
      },
      {
        question: "工事期間はどのくらいかかりますか？",
        answer: "一般的な戸建て住宅の外壁塗装であれば、およそ10日〜2週間程度が目安となります。天候や建物の大きさ、補修の必要性によって前後する場合がございます。"
      },
      {
        question: "雨の日でも工事は行いますか？",
        answer: "塗装作業は雨の日には行えません。雨天の場合は作業を中断し、工期を順延させていただく形になります。足場の設置や洗浄作業などは雨天でも行う場合がございます。"
      },
      {
        question: "近隣への挨拶などはどうすればいいですか？",
        answer: "工事開始前に、弊社のスタッフがご近隣の皆様へご挨拶と工事内容のご説明に伺います。お客様の方で特別に何かしていただく必要はございませんのでご安心ください。"
      }
    ]
  },
  {
    category: "不用品回収・清掃について",
    items: [
      {
        question: "1点からでも回収に来てくれますか？",
        answer: "はい、もちろん可能です。大型家電や家具1点から、家丸ごとの片付けまで幅広く対応しております。"
      },
      {
        question: "追加料金が発生することはありますか？",
        answer: "お見積り時に提示した金額から、当日に追加料金が発生することはございません。ただし、エレベーターなしの建物で2階以上の場合、1階ごとに3,000円の追加料金が発生いたします。また、お見積り時よりも回収品が大幅に増えた場合などは、再度ご相談させていただく場合がございます。"
      },
      {
        question: "回収できないものはありますか？",
        answer: "生ごみ、液体（洗剤・油・塗料等）、危険物（スプレー缶・ライター・マッチ・消火器）、医療器具などは回収できない場合がございます。詳細はお問い合わせください。"
      }
    ]
  },
  {
    category: "対応エリアについて",
    items: [
      {
        question: "対応エリアを教えてください。",
        answer: "静岡県内全域を中心に、山梨県や関東地方（東京・神奈川・埼玉・千葉）も対応可能です。遠方の方もお気軽にお問い合わせください。"
      },
      {
        question: "対応エリア外ですが、依頼できますか？",
        answer: "対応エリア外でも、ご依頼内容によっては対応可能な場合がございます。まずはお気軽にお問い合わせください。状況をお伺いした上で、ご対応可能かお伝えいたします。"
      },
      {
        question: "遠方からの依頼は出張費がかかりますか？",
        answer: "静岡県内は基本的に出張費無料で対応しております。県外への出張の場合は、距離や作業内容に応じて出張費が発生する場合がございます。お見積りの際に詳しくご説明いたします。"
      },
      {
        question: "即日対応は可能ですか？",
        answer: "富士市近郊（東部エリア）であれば、スケジュールの空き状況によっては即日対応も可能です。お急ぎの場合はお電話にてご相談ください。"
      }
    ]
  },
  {
    category: "その他",
    items: [
      {
        question: "支払方法は何がありますか？",
        answer: "現金でのお支払いのほか、銀行振込に対応しております。詳細な支払時期などはご相談ください。"
      },
      {
        question: "土日の対応は可能ですか？",
        answer: "基本的に平日8:00〜17:00の対応となりますが、事前のご相談をいただければ可能な限り対応いたします。"
      }
    ]
  }
];

export default function FAQContent() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {faqItems.map((category, catIndex) => (
            <FadeIn key={catIndex} delay={catIndex * 0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--text-dark) mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <details 
                      key={itemIndex} 
                      className="group border border-(--border-light) rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                    >
                      <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer bg-white hover:bg-slate-50 list-none transition-colors">
                        <div className="flex items-start gap-4">
                          <motion.span 
                            whileHover={{ color: "var(--primary-green-dark)" }}
                            className="text-xl md:text-2xl font-bold text-primary shrink-0 mt-0.5 transition-colors"
                          >
                            Q.
                          </motion.span>
                          <span className="font-bold text-(--text-dark) text-lg md:text-2xl group-hover:text-primary transition-colors">{item.question}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                      </summary>
                      <div className="p-4 md:p-6 bg-slate-50 border-t border-(--border-light)">
                        <div className="flex items-start gap-4">
                          <span className="text-xl md:text-2xl font-bold text-(--secondary-green) shrink-0 mt-0.5">A.</span>
                          <p className="text-(--text-medium) text-base sm:text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 bg-(--bg-light) rounded-xl p-8 text-center">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-(--text-dark) mb-2">解決しない場合はお気軽にお問い合わせください</h3>
            <p className="text-(--text-medium) text-base sm:text-lg mb-0">
              専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
