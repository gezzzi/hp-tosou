import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "塗装サービス | 株式会社マルヨ",
  description: "株式会社マルヨの塗装サービス。外壁塗装、屋根塗装、物置・ブロック塀塗装など、祖父の代から続く確かな技術で対応いたします。",
};

export default function PaintingServicePage() {
  const paintingServices = [
    {
      title: '外壁塗装',
      description: '外壁の塗り替えで建物を美しく保護。色褪せや剥がれを解消し、建物の寿命を延ばします。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: '屋根塗装',
      description: 'トタン屋根などの塗り替え。雨漏りや錆を防ぎ、建物を守ります。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: '物置・ブロック塀塗装',
      description: '物置やブロック塀、門扉、玄関ドアなど、建物周りの塗装も対応。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: '外壁高圧洗浄',
      description: '塗装前の下地処理として、または洗浄のみのご依頼も承ります。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'ウッドデッキ塗装',
      description: 'ウッドデッキのメンテナンス塗装で、木材を長持ちさせます。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: 1, title: 'お問い合わせ', description: 'お電話またはメールでお気軽にご連絡ください。' },
    { step: 2, title: '現地調査・お見積り', description: '現地を確認し、無料でお見積りをご提示します。' },
    { step: 3, title: 'ご契約', description: '内容にご納得いただけましたら契約となります。' },
    { step: 4, title: '施工', description: '自社職人が責任を持って丁寧に施工いたします。' },
    { step: 5, title: '完了・お引き渡し', description: '仕上がりをご確認いただき、完了となります。' },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="塗装サービス" 
          subtitle="PAINTING SERVICE" 
        />

        {/* イントロダクション */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"
                  alt="塗装作業の様子"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--primary-green)]">確かな技術で<br />建物を守ります</h2>
                </div>
                <p className="text-[var(--text-medium)] mb-6 leading-relaxed">
                  祖父の代から続く確かな技術で、外壁・屋根塗装から小さな塗装工事まで幅広く対応いたします。
                  お客様のご要望・ご予算に応じて最適なプランをご提案します。
                </p>
                <div className="bg-[var(--primary-green)]/5 rounded-xl p-6 border-l-4 border-[var(--primary-green)]">
                  <h3 className="font-bold text-[var(--text-dark)] mb-3 text-lg">マルヨの塗装へのこだわり</h3>
                  <ul className="text-[var(--text-medium)] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">✓</span>
                      祖父の代から続く確かな技術力
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">✓</span>
                      お客様と一緒に最適なプランを考えます
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">✓</span>
                      基本的に自社の職人が対応し、責任を持って施工
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス一覧 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">対応サービス</h2>
              <p className="text-[var(--text-medium)]">外壁から小さな塗装まで、幅広く対応いたします</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paintingServices.map((service, index) => (
                <div key={index} className="card p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[var(--primary-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--primary-green)]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                  <p className="text-[var(--text-medium)]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 施工の流れ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">施工の流れ</h2>
              <p className="text-[var(--text-medium)]">お問い合わせから完了まで、丁寧に対応いたします</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--primary-green)]/20" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="w-16 h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
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

        {/* CTA */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl font-bold mb-4">塗装のご相談・お見積りはお気軽に</h2>
            <p className="mb-6 opacity-90">現地調査・お見積りは無料です。お気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-[var(--primary-green)] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                料金案内を見る
              </Link>
              <Link href="/contact" className="btn-accent">
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

