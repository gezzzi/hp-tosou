import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "料金案内 | 株式会社マルヨ",
  description: "株式会社マルヨの料金案内。不用品回収は2トントラック積み放題28,000円から。塗装工事は無料でお見積りいたします。",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="料金案内" 
          subtitle="PRICING" 
          bgImage="/pic/hd/pricing-hd.jpg"
        />

        {/* 不用品回収料金 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-8 text-center">
              不用品回収・清掃
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-[var(--accent-yellow)]/10 rounded-lg p-8 text-center mb-8 border-2 border-[var(--accent-yellow)]">
                <p className="text-lg font-bold text-[var(--text-dark)] mb-2">2トントラック積み放題</p>
                <p className="text-5xl font-bold text-[var(--primary-green)] mb-2">
                  28,000<span className="text-xl">円</span>
                </p>
                <p className="text-sm text-[var(--text-medium)]">（税込）</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-green-700">追加料金一切なし</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-green-700">作業外注一切なし</span>
                </div>
              </div>

              <div className="bg-[var(--bg-light)] rounded-lg p-6">
                <h3 className="font-bold text-[var(--text-dark)] mb-3">オプション料金</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="py-3 text-[var(--text-medium)]">エレベーターなし・2階</td>
                      <td className="py-3 text-right font-bold">+3,000円</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="py-3 text-[var(--text-medium)]">エレベーターなし・3階</td>
                      <td className="py-3 text-right font-bold">+6,000円</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[var(--text-medium)]">エレベーターなし・4階以上</td>
                      <td className="py-3 text-right font-bold">+9,000円〜</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-[var(--text-light)] mt-3">
                  ※1階ごとに3,000円の追加料金が発生します
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 塗装料金 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-8 text-center">
              塗装工事
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-md mb-8">
                <div className="text-center mb-6">
                  <p className="text-lg text-[var(--text-medium)] mb-2">塗装工事は建物の状態や面積によって異なります</p>
                  <p className="text-3xl font-bold text-[var(--primary-green)]">
                    まずは無料でお見積り
                  </p>
                </div>

                <div className="border-t border-[var(--border-light)] pt-6">
                  <h3 className="font-bold text-[var(--text-dark)] mb-4">料金に含まれるもの</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[var(--text-medium)]">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary-green)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      足場設置・解体費用
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary-green)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      高圧洗浄
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary-green)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      下地処理
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary-green)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      塗料代・施工費
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[var(--primary-green)]/5 rounded-lg p-6 border-l-4 border-[var(--primary-green)]">
                <h3 className="font-bold text-[var(--text-dark)] mb-2">お見積りについて</h3>
                <p className="text-sm text-[var(--text-medium)]">
                  むやみに高い建材やプランを勧めるのではなく、お客様のご要望やご予算に応じながら、
                  最適なプランを一緒に考えます。まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl font-bold mb-4">お見積りは無料です</h2>
            <p className="mb-6 opacity-90">お気軽にお問い合わせください</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0545-67-8348" className="flex items-center justify-center gap-2 bg-white text-[var(--primary-green)] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                0545-67-8348
              </a>
              <Link href="/contact" className="btn-accent">
                メールでお問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

