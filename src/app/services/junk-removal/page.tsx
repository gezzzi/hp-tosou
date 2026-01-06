import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "不用品回収・遺品整理 | 株式会社マルヨ",
  description: "株式会社マルヨの不用品回収・遺品整理サービス。追加料金一切なし、自社スタッフが責任を持って対応。高齢者やお忙しい方からのご依頼多数。",
};

export default function JunkRemovalServicePage() {
  const junkServices = [
    {
      title: '不用品回収',
      description: '大きな家具や家電、日用品など不要になったものを回収。お客様で運ぶ必要はありません。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: '遺品整理',
      description: '故人の遺品を丁寧に整理。心を込めて対応いたします。ご遺族の気持ちに寄り添います。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'ゴミ屋敷清掃',
      description: 'お部屋の状態を問わず対応。プライバシーに配慮して作業します。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: '草刈り・草むしり',
      description: 'お庭の草刈りや草むしり、落ち葉清掃なども対応いたします。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: '追加料金一切なし',
      description: '見積もり後に料金が上がることはありません。安心してご依頼ください。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: '作業外注一切なし',
      description: '自社スタッフが責任を持って対応。信頼できるスタッフがお伺いします。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'プライバシー厳守',
      description: 'お客様のプライバシーに最大限配慮して作業いたします。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: 1, title: 'お問い合わせ', description: 'お電話またはメールでお気軽にご連絡ください。' },
    { step: 2, title: '現地確認・お見積り', description: '実際に現地を確認し、無料でお見積りをご提示。' },
    { step: 3, title: '日程調整', description: 'ご都合の良い日時で作業日を決定します。' },
    { step: 4, title: '回収作業', description: '自社スタッフが丁寧に回収・運搬いたします。' },
    { step: 5, title: 'お支払い', description: '作業完了後、現金またはお振込でお支払い。' },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="不用品回収・遺品整理" 
          subtitle="JUNK REMOVAL & ESTATE CLEANING" 
        />

        {/* イントロダクション */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-[var(--text-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text-dark)]">お困りごとを<br />解決します</h2>
                </div>
                <p className="text-[var(--text-medium)] mb-6 leading-relaxed">
                  不要になった家具や家電等を回収し、処分場へ運搬するサービスです。
                  高齢者や自身で重い荷物を運べないお客様からのご依頼が多く、遺品整理も丁寧に対応いたします。
                </p>
                <div className="bg-[var(--accent-yellow)]/20 rounded-xl p-6 border-l-4 border-[var(--accent-yellow)]">
                  <h3 className="font-bold text-[var(--text-dark)] mb-3 text-lg">こんな方におすすめ</h3>
                  <ul className="text-[var(--text-medium)] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-yellow)] mt-1">●</span>
                      大きな家具や家電を処分したい
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-yellow)] mt-1">●</span>
                      重いものを運べない・車がない
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-yellow)] mt-1">●</span>
                      遺品整理を依頼したい
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-yellow)] mt-1">●</span>
                      お部屋をまるごと片付けたい
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="不用品回収の様子"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-16 bg-[var(--accent-yellow)]/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">マルヨが選ばれる理由</h2>
              <p className="text-[var(--text-medium)]">安心してご依頼いただける3つの特徴</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                  <div className="w-20 h-20 bg-[var(--accent-yellow)]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent-yellow)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{feature.title}</h3>
                  <p className="text-[var(--text-medium)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス一覧 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">対応サービス</h2>
              <p className="text-[var(--text-medium)]">様々なお困りごとに対応いたします</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {junkServices.map((service, index) => (
                <div key={index} className="card p-8 flex gap-6 items-start hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[var(--accent-yellow)]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--accent-yellow)]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">{service.title}</h3>
                    <p className="text-[var(--text-medium)]">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 作業の流れ */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">ご依頼の流れ</h2>
              <p className="text-[var(--text-medium)]">お問い合わせから完了まで、丁寧に対応いたします</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--accent-yellow)]/30" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="w-16 h-16 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--text-dark)] font-bold text-xl relative z-10">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-medium)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 古物商許可 */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[var(--text-medium)]">
                古物商許可: 静岡県公安委員会 第491100145100号
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--accent-yellow)]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-[var(--text-dark)] mb-4">不用品回収・遺品整理のご相談はお気軽に</h2>
            <p className="mb-6 text-[var(--text-dark)] opacity-80">現地確認・お見積りは無料です。お気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-[var(--text-dark)] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                料金案内を見る
              </Link>
              <Link href="/contact" className="bg-[var(--text-dark)] text-white px-6 py-3 rounded font-bold hover:bg-black transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

