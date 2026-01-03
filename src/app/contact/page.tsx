import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | 株式会社マルヨ",
  description: "株式会社マルヨへのお問い合わせ。塗装工事、不用品回収、遺品整理のお見積り・ご相談は無料です。お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="お問い合わせ" 
          subtitle="お見積り・ご相談は無料です" 
        />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 電話・LINE */}
              <div>
                <h2 className="text-xl font-bold text-[var(--primary-green)] mb-6">お電話・LINEでのお問い合わせ</h2>
                
                <div className="bg-[var(--bg-light)] rounded-lg p-8 mb-6">
                  <p className="text-sm text-[var(--text-light)] mb-2 text-center">お気軽にお電話ください（社長直通）</p>
                  <a href="tel:000-0000-0000" className="flex items-center justify-center gap-3 text-3xl font-bold text-[var(--primary-green)] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    000-0000-0000
                  </a>
                  <p className="text-sm text-[var(--text-light)] text-center">平日 8:00〜17:00</p>
                </div>

                <div className="bg-[var(--bg-light)] rounded-lg p-8 mb-6">
                  <p className="text-sm text-[var(--text-light)] mb-4 text-center">LINEでもお気軽にどうぞ</p>
                  <Link href="#" className="flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#05b04c] transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    LINEで問い合わせる
                  </Link>
                </div>

                {/* 対応エリア */}
                <div className="bg-[var(--primary-green)]/5 rounded-lg p-6 border-l-4 border-[var(--primary-green)]">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">対応エリア</h3>
                  <p className="text-sm text-[var(--text-medium)]">
                    静岡県全域に対応しております。<br />
                    山梨県、関東（東京周辺）での施工実績もございます。<br />
                    その他のエリアについてもお気軽にご相談ください。
                  </p>
                </div>
              </div>

              {/* お問い合わせフォーム */}
              <div>
                <h2 className="text-xl font-bold text-[var(--primary-green)] mb-6">メールでのお問い合わせ</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                      placeholder="090-0000-0000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                      placeholder="example@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      ご住所
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                      placeholder="静岡県富士市..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      ご依頼内容 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="painting">塗装工事</option>
                      <option value="junk">不用品回収</option>
                      <option value="ihin">遺品整理</option>
                      <option value="gomiyashiki">ゴミ屋敷清掃</option>
                      <option value="kusakari">草刈り</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[var(--text-dark)] mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent resize-none"
                      placeholder="ご相談内容をご記入ください"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="bg-[var(--bg-light)] rounded-lg p-4 text-sm text-[var(--text-medium)]">
                    <p>
                      ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title mb-8">よくあるご質問</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[var(--text-dark)] mb-2">Q. 見積もりは無料ですか？</h3>
                <p className="text-sm text-[var(--text-medium)]">
                  A. はい、お見積りは無料です。お気軽にお問い合わせください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[var(--text-dark)] mb-2">Q. 対応エリアはどこですか？</h3>
                <p className="text-sm text-[var(--text-medium)]">
                  A. 静岡県全域に対応しております。山梨県や関東での施工実績もございますので、お気軽にご相談ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[var(--text-dark)] mb-2">Q. 不用品回収で追加料金は発生しますか？</h3>
                <p className="text-sm text-[var(--text-medium)]">
                  A. エレベーターなしの建物で2階以上の場合、1階ごとに3,000円の追加料金が発生します。それ以外の追加料金は一切ございません。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[var(--text-dark)] mb-2">Q. 土日の対応は可能ですか？</h3>
                <p className="text-sm text-[var(--text-medium)]">
                  A. 基本的に平日8:00〜17:00の対応となりますが、ご相談いただければ可能な限り対応いたします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

