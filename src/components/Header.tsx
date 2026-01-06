'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // メニューが開いているときスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: 'サービス', href: '/services' },
    { label: '料金案内', href: '/pricing' },
    { label: '選ばれる理由', href: '/about' },
    { label: '施工事例', href: '/case-studies' },
    { label: '会社概要', href: '/company' },
    { label: 'お問い合わせ', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* トップバー */}
      <div className="bg-[var(--primary-green)] text-white py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <span>外壁塗装から不用品回収まで | 静岡県全域対応</span>
          <span className="hidden md:block">古物商許可: 静岡県公安委員会 第491100145100号</span>
        </div>
      </div>

      {/* メインヘッダー */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* ロゴ・会社名 */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">丸</span>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-[#018615]" style={{ fontFamily: "var(--font-m-plus-1p), 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif" }}>株式会社マルヨ</h1>
            </div>
          </Link>

          {/* 電話番号 - PC */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-[var(--text-light)]">お気軽にお電話ください</p>
              <a href="tel:000-0000-0000" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary-green)]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                000-0000-0000
              </a>
            </div>
            <Link href="/contact" className="btn-primary">
              無料お見積り
            </Link>
          </div>

          {/* ハンバーガーメニュー */}
          <button
            className="lg:hidden p-2 transition-all relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center relative">
              <span className={`block w-6 h-0.5 bg-[var(--primary-green)] transition-all duration-300 absolute ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`} />
              <span className={`block w-6 h-0.5 bg-[var(--primary-green)] transition-all duration-300 absolute ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block w-6 h-0.5 bg-[var(--primary-green)] transition-all duration-300 absolute ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* ナビゲーション - PC */}
        <nav className="hidden lg:block mt-3 border-t border-[var(--border-light)] pt-3">
          <ul className="flex justify-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium transition-colors pb-1 ${
                    isActive(item.href)
                      ? 'text-[var(--primary-green)] border-b-2 border-[var(--primary-green)]'
                      : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* モバイルメニューオーバーレイ */}
      <>
        {/* 背景オーバーレイ */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 z-[45] transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* メニューパネル */}
        <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[51] overflow-y-auto transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="px-6 py-6 mt-20">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block font-medium py-3 border-b border-[var(--border-light)] ${
                        isActive(item.href)
                          ? 'text-[var(--primary-green)]'
                          : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-[var(--border-light)]">
                <a href="tel:000-0000-0000" className="flex items-center justify-center gap-2 text-xl font-bold text-[var(--primary-green)] mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  000-0000-0000
                </a>
                <Link href="/contact" className="btn-primary block text-center" onClick={() => setIsMenuOpen(false)}>
                  無料お見積り
                </Link>
              </div>
            </nav>
        </div>
      </>
    </header>
  );
}
