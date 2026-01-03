import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "サービス | 株式会社マルヨ",
  description: "株式会社マルヨのサービス一覧。外壁塗装、屋根塗装などの塗装工事から、不用品回収、遺品整理まで幅広く対応いたします。",
};

export default function ServicesPage() {
  const paintingServices = [
    {
      title: '外壁塗装',
      description: '外壁の塗り替えで建物を美しく保護。色褪せや剥がれを解消し、建物の寿命を延ばします。',
    },
    {
      title: '屋根塗装',
      description: 'トタン屋根などの塗り替え。雨漏りや錆を防ぎ、建物を守ります。',
    },
    {
      title: '物置・ブロック塀塗装',
      description: '物置やブロック塀、門扉、玄関ドアなど、建物周りの塗装も対応。',
    },
    {
      title: '外壁高圧洗浄',
      description: '塗装前の下地処理として、または洗浄のみのご依頼も承ります。',
    },
    {
      title: 'ウッドデッキ塗装',
      description: 'ウッドデッキのメンテナンス塗装で、木材を長持ちさせます。',
    },
  ];

  const junkServices = [
    {
      title: '不用品回収',
      description: '大きな家具や家電、日用品など不要になったものを回収。お客様で運ぶ必要はありません。',
    },
    {
      title: '遺品整理',
      description: '故人の遺品を丁寧に整理。心を込めて対応いたします。',
    },
    {
      title: 'ゴミ屋敷清掃',
      description: 'お部屋の状態を問わず対応。プライバシーに配慮して作業します。',
    },
    {
      title: '草刈り・草むしり',
      description: 'お庭の草刈りや草むしり、落ち葉清掃なども対応いたします。',
    },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="サービス" 
          subtitle="塗装から不用品回収まで、幅広いサービスを提供しています" 
        />

        {/* 塗装サービス */}
        <section id="painting" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"
                  alt="塗装作業の様子"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary-green)]">塗装サービス</h2>
                </div>
                <p className="text-[var(--text-medium)] mb-6">
                  祖父の代から続く確かな技術で、外壁・屋根塗装から小さな塗装工事まで幅広く対応いたします。
                  お客様のご要望・ご予算に応じて最適なプランをご提案します。
                </p>
                <div className="bg-[var(--primary-green)]/5 rounded-lg p-4 border-l-4 border-[var(--primary-green)]">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">塗装へのこだわり</h3>
                  <ul className="text-sm text-[var(--text-medium)] space-y-1">
                    <li>• 祖父の代から続く確かな技術力</li>
                    <li>• お客様と一緒に最適なプランを考えます</li>
                    <li>• 基本的に自社の職人が対応し、責任を持って施工</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paintingServices.map((service, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                  <p className="text-sm text-[var(--text-medium)]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 不用品回収サービス */}
        <section id="junk" className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--text-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-dark)]">不用品回収・遺品整理</h2>
                </div>
                <p className="text-[var(--text-medium)] mb-6">
                  不要になった家具や家電等を回収し、処分場へ運搬するサービスです。
                  高齢者や自身で重い荷物を運べないお客様からのご依頼が多く、遺品整理も丁寧に対応いたします。
                </p>
                <div className="bg-[var(--accent-yellow)]/20 rounded-lg p-4 border-l-4 border-[var(--accent-yellow)]">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">不用品回収の特徴</h3>
                  <ul className="text-sm text-[var(--text-medium)] space-y-1">
                    <li>• <strong>追加料金一切なし</strong>：見積もり後に料金が上がることはありません</li>
                    <li>• <strong>作業外注一切なし</strong>：自社スタッフが責任を持って対応</li>
                    <li>• 高齢者や重い荷物を運べない方からのご依頼多数</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="不用品回収の様子"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {junkServices.map((service, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                  <p className="text-sm text-[var(--text-medium)]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl font-bold mb-4">サービスについてのご質問・お見積りはお気軽に</h2>
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
