import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

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
          subtitle="CONTACT" 
        />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-0 lg:px-4">
            {/* 無料相談案内 */}
            <div className="bg-[var(--primary-green)]/10 rounded-lg p-6 lg:p-8 mb-12 mx-4 lg:mx-0 border-l-4 border-[var(--primary-green)]">
              <h2 className="text-2xl lg:text-xl font-bold text-black mb-4 text-center">お気軽にご相談ください</h2>
              <p className="text-base lg:text-sm text-[var(--text-dark)] text-center leading-relaxed">
                株式会社マルヨでは無料相談を行っております。塗装やそのほかの業務も行っておりますのでお困りごと、お悩みがあればお気軽にご相談ください。無理な営業行為等は致しませんのでご安心ください。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 電話 */}
              <div className="px-4 lg:px-0">
                <h2 className="text-2xl lg:text-xl font-bold text-black mb-6 text-center">お電話でのお問い合わせ</h2>
                
                <div className="bg-[var(--bg-light)] rounded-lg p-8 mb-6">
                  <p className="text-base lg:text-sm text-[var(--text-light)] mb-2 text-center">お気軽にお電話ください（社長直通）</p>
                  <a href="tel:000-0000-0000" className="flex items-center justify-center gap-3 text-3xl font-bold text-[var(--primary-green)] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    000-0000-0000
                  </a>
                  <p className="text-base lg:text-sm text-[var(--text-light)] text-center">平日 8:00〜17:00</p>
                </div>
              </div>

              {/* お問い合わせフォーム */}
              <div>
                <h2 className="text-2xl lg:text-xl font-bold text-black mb-6 text-center">メールでのお問い合わせ</h2>
                
                <form className="space-y-6 bg-[#f7f7f5] rounded-lg px-4 py-8 lg:px-6">
                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      お客様種別
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer ml-2">
                        <input
                          type="radio"
                          name="customerType"
                          value="individual"
                          className="w-4 h-4 text-[var(--primary-green)] focus:ring-2 focus:ring-[var(--primary-green)]"
                          required
                        />
                        <span className="ml-2 text-base lg:text-sm text-[var(--text-dark)]">個人</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="customerType"
                          value="corporate"
                          className="w-4 h-4 text-[var(--primary-green)] focus:ring-2 focus:ring-[var(--primary-green)]"
                          required
                        />
                        <span className="ml-2 text-base lg:text-sm text-[var(--text-dark)]">法人</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      お名前
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block border border-[var(--text-light)] px-2 py-1 text-sm lg:text-xs mr-2">任意</span>
                      フリガナ
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      placeholder="ヤマダ タロウ"
                    />
                  </div>

                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      placeholder="090-0000-0000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      ご住所
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      placeholder="静岡県富士市..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block bg-[#e51919] text-white px-2 py-1 text-sm lg:text-xs mr-2">必須</span>
                      ご依頼内容
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
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
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block border border-[var(--text-light)] px-2 py-1 text-sm lg:text-xs mr-2">任意</span>
                      お問い合わせ内容
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent resize-none"
                      placeholder="ご相談内容をご記入ください"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-[#ffea03] text-black text-lg py-4 px-16 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 border border-black"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      送信する
                    </button>
                  </div>

                  <div className="bg-[var(--bg-light)] rounded-lg p-4 text-base lg:text-sm text-[var(--text-dark)]">
                    <p>
                      プライバシーポリシーは<a href="/privacy" className="text-[var(--primary-green)] underline hover:opacity-80">こちら</a>からご確認いただけます。
                    </p>
                  </div>
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

