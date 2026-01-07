'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[var(--border-light)]">
      {/* メインフッター */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">丸</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-dark)]">株式会社マルヨ</h3>
                <p className="text-sm text-[var(--text-light)]">塗装・不用品回収のプロフェッショナル</p>
              </div>
            </div>
            <address className="not-italic text-sm text-[var(--text-medium)] space-y-1">
              <p>〒417-0061 静岡県富士市伝法2503-5</p>
              <p>営業時間: 平日 8:00〜17:00</p>
              <p>定休日: 土曜日、日曜日</p>
              <p className="mt-2 text-xs text-[var(--text-light)]">古物商許可: 静岡県公安委員会<br />第491100145100号</p>
            </address>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-[var(--text-dark)]">お問い合わせ</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[var(--text-light)] mb-1">お電話でのお問い合わせ</p>
                <a href="tel:000-0000-0000" className="text-xl font-bold text-[var(--primary-green)] hover:opacity-80 transition-opacity">
                  000-0000-0000
                </a>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="flex items-center justify-center w-10 h-10 bg-[var(--bg-light)] rounded-full hover:bg-[var(--primary-green)] hover:text-white text-[var(--text-medium)] transition-colors" aria-label="LINE">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </Link>
                <Link href="#" className="flex items-center justify-center w-10 h-10 bg-[var(--bg-light)] rounded-full hover:bg-[var(--primary-green)] hover:text-white text-[var(--text-medium)] transition-colors" aria-label="くらしのマーケット">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </Link>
              </div>
              <Link href="/contact" className="inline-block btn-primary mt-2">
                無料お見積り
              </Link>
            </div>
          </div>
        </div>

        {/* 地図セクション */}
        <div className="mt-12 border-[3px] border-[var(--border-light)]">
          <div className="bg-[var(--bg-light)] px-4 py-3 border-b-[3px] border-[var(--border-light)]">
            <h3 className="font-bold text-xl text-[var(--text-dark)]">株式会社マルヨ</h3>
          </div>
          <div className="p-3">
            <h4 className="mb-4 text-lg text-[var(--text-dark)]">〒417-0061 静岡県富士市伝法2503-5</h4>
            <div className="w-full aspect-[4/3] overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522.580654098764!2d138.66907867574517!3d35.174315757653815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bd4d0f0d0ce67%3A0x145268c01e7846f9!2z44CSNDE3LTAwNjEg6Z2Z5bKh55yM5a-M5aOr5biC5Lyd5rOV77yS77yV77yQ77yT4oiS77yV!5e0!3m2!1sja!2sjp!4v1767803139375!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社マルヨの所在地"
            />
            </div>
          </div>
        </div>
      </div>

      {/* ページトップへ戻るボタン - PC版のみ表示 */}
      <button
        onClick={scrollToTop}
        className="hidden lg:flex fixed bottom-6 right-6 w-12 h-12 bg-[var(--primary-green)] text-white rounded-full items-center justify-center shadow-lg hover:bg-[var(--primary-green-dark)] transition-colors z-40"
        aria-label="ページトップへ戻る"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* コピーライト */}
      <div className="border-t border-[var(--border-light)] py-4 bg-[var(--bg-light)]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-[var(--text-light)]">
            Copyright © {currentYear} 株式会社マルヨ All Rights Reserved.
          </p>
          <Link href="/privacy-policy" className="text-sm text-[var(--text-light)] hover:text-[var(--primary-green)] transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
