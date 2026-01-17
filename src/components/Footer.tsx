'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoIcon from '@/app/icon.png';

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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center justify-center">
                <Image 
                  src={logoIcon} 
                  alt="株式会社マルヨ ロゴ" 
                  width={48}
                  height={48}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-black" style={{ fontFamily: "var(--font-mochiy-pop-p-one), sans-serif" }}>株式会社マルヨ</h3>
              </div>
            </div>
            <address className="not-italic text-sm text-[var(--text-dark)] space-y-1 text-center">
              <p>〒417-0061 静岡県富士市伝法2503-5</p>
              <p>営業時間: 平日 8:00〜17:00</p>
              <p>定休日: 土曜日・日曜日・祝日</p>
              <p className="mt-2">古物商許可: 静岡県公安委員会 第491100145100号</p>
            </address>
          </div>

          {/* くらしのマーケット */}
          <div className="flex justify-center items-center">
            <Link 
              href="https://curama.jp/disposal/2ttruck/SER676740867/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/kurasinomarket.png" 
                alt="くらしのマーケット" 
                width={300} 
                height={100}
              />
            </Link>
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

        {/* サイトマップ */}
        <div className="mt-12 grid grid-cols-2 gap-8">
          {/* リソース */}
          <div>
            <h4 className="font-bold mb-3 text-[var(--text-dark)]">リソース</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  サービス事例
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  料金案内
                </Link>
              </li>
              <li>
                <Link href="/area" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  対応エリア
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          {/* ヘルプ */}
          <div>
            <h4 className="font-bold mb-3 text-[var(--text-dark)]">ヘルプ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[var(--text-medium)] hover:text-[var(--primary-green)] transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
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
      <div className="border-t border-[var(--border-light)] py-4" style={{ backgroundColor: '#038717' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-base text-white">
            © {currentYear} 株式会社マルヨ
          </p>
        </div>
      </div>
    </footer>
  );
}
