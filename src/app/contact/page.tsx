"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

// Formspreeのフォームエンドポイント
// ※ xxxxxxxの部分を、Formspreeで作成したフォームIDに置き換えてください
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqeeoan";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setError("送信に失敗しました。もう一度お試しください。");
        }
      }
    } catch {
      setError("送信に失敗しました。ネットワーク接続を確認してください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 送信完了画面
  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="main-content">
          <PageHeader
            title="お問い合わせ"
            subtitle="CONTACT"
            bgImage="/pic/hd/contact-hd.jpg"
          />

          <section className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="bg-[var(--primary-green)]/10 rounded-lg p-8 lg:p-12 border-l-4 border-[var(--primary-green)]">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  送信完了
                </h2>
                <p className="text-base lg:text-lg text-[var(--text-dark)] mb-6 leading-relaxed">
                  お問い合わせいただきありがとうございます。<br />
                  内容を確認の上、担当者より折り返しご連絡いたします。<br />
                  通常2〜3営業日以内にご返信いたします。
                </p>
                <a
                  href="/"
                  className="inline-block bg-[var(--primary-green)] text-white text-lg py-3 px-8 font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  トップページへ戻る
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="お問い合わせ"
          subtitle="CONTACT"
          bgImage="/pic/hd/contact-hd.jpg"
        />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-0 lg:px-4">
            {/* 無料相談案内 */}
            <div className="bg-[var(--primary-green)]/10 rounded-lg p-6 lg:p-8 mb-12 mx-4 lg:mx-0 border-l-4 border-[var(--primary-green)]">
              <h2 className="text-2xl lg:text-xl font-bold text-black mb-4 text-center">お気軽にご相談ください</h2>
              <p className="text-base lg:text-sm text-[var(--text-dark)] text-center leading-relaxed">
                株式会社マルヨでは無料相談を行っております。塗装や様々な業務を行っておりますので住まいのお困りごと、お悩みがあればお気軽にご相談ください。無理な営業行為等は致しませんのでご安心ください。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 電話 */}
              <div className="px-4 lg:px-0">
                <h2 className="text-2xl lg:text-xl font-bold text-black mb-6 text-center">お電話でのお問い合わせ</h2>

                <div className="bg-[var(--bg-light)] rounded-lg p-8 mb-6">
                  <p className="text-base lg:text-sm text-[var(--text-light)] mb-2 text-center">お気軽にお電話ください（社長直通）</p>
                  <a href="tel:0545-67-8348" className="flex items-center justify-center gap-3 text-3xl font-bold text-[var(--primary-green)] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    0545-67-8348
                  </a>
                  <p className="text-base lg:text-sm text-[var(--text-light)] text-center">平日 8:00〜17:00</p>
                </div>
              </div>

              {/* お問い合わせフォーム */}
              <div>
                <h2 className="text-2xl lg:text-xl font-bold text-black mb-6 text-center">メールでのお問い合わせ</h2>

                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 mx-4 lg:mx-0">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 bg-[#f7f7f5] rounded-lg px-4 py-8 lg:px-6">
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
                          value="個人"
                          className="w-4 h-4 text-[var(--primary-green)] focus:ring-2 focus:ring-[var(--primary-green)]"
                          required
                        />
                        <span className="ml-2 text-base lg:text-sm text-[var(--text-dark)]">個人</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="customerType"
                          value="法人"
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
                      name="name"
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
                      name="furigana"
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
                      name="phone"
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
                      name="email"
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
                      name="address"
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
                      name="service"
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent text-base"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="塗装工事">塗装工事</option>
                      <option value="不用品回収">不用品回収</option>
                      <option value="草刈り・高圧洗浄清掃">草刈り・高圧洗浄清掃</option>
                      <option value="ゴミ屋敷清掃">ゴミ屋敷清掃</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-base lg:text-sm font-bold text-[var(--text-dark)] mb-2">
                      <span className="inline-block border border-[var(--text-light)] px-2 py-1 text-sm lg:text-xs mr-2">任意</span>
                      お問い合わせ内容
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent resize-none"
                      placeholder="ご相談内容をご記入ください"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ffea03] text-black text-lg py-4 px-16 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 border border-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          送信する
                        </>
                      )}
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
      </main>
      <Footer />
    </>
  );
}
