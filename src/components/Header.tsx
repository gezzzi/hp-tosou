'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

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

  // ドロップダウン外クリックで閉じる
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '料金案内', href: '/pricing' },
    { label: '施工事例', href: '/case-studies' },
    { label: '対応エリア', href: '/area' },
    { label: '会社概要', href: '/company' },
  ];

  const serviceItems = [
    { label: '塗装サービス', href: '/services/painting' },
    { label: '不用品回収・遺品整理', href: '/services/junk-removal' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return pathname.startsWith('/services');
  };

  return (
    <>
      {/* メインヘッダー */}
      <header className="lg:relative sticky top-0 bg-white shadow-md z-50">
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
            className="lg:hidden p-2 transition-all relative z-[120]"
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
        </div>
      </header>

      {/* ナビゲーション - PC */}
      <nav className="hidden lg:block sticky top-0 bg-white border-t border-[var(--border-light)] py-3 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-center gap-6">
            {/* ホーム */}
            <li>
              <Link
                href="/"
                className={`font-medium transition-colors pb-1 ${
                  isActive('/')
                    ? 'text-[var(--primary-green)] border-b-2 border-[var(--primary-green)]'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                }`}
              >
                ホーム
              </Link>
            </li>

            {/* サービス（ドロップダウン） */}
            <li 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-medium transition-colors pb-1 ${
                  isServicesActive()
                    ? 'text-[var(--primary-green)] border-b-2 border-[var(--primary-green)]'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                }`}
              >
                サービス
              </button>

              {/* ドロップダウンメニュー */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-[var(--border-light)] overflow-hidden transition-all duration-200 ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/5'
                          : 'text-[var(--text-dark)] hover:bg-[var(--bg-light)] hover:text-[var(--primary-green)]'
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* 他のナビゲーション項目 */}
            {navItems.slice(1).map((item) => (
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
        </div>
      </nav>

      {/* モバイルメニューオーバーレイ */}
      <>
        {/* 背景オーバーレイ */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* メニューパネル */}
        <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[110] overflow-y-auto transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="px-6 py-6 mt-20">
              <ul className="space-y-1">
                {/* ホーム */}
                <li>
                  <Link
                    href="/"
                    className={`block font-medium py-3 border-b border-[var(--border-light)] ${
                      isActive('/')
                        ? 'text-[var(--primary-green)]'
                        : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ホーム
                  </Link>
                </li>

                {/* サービス（アコーディオン） */}
                <li>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full flex items-center justify-between font-medium py-3 border-b border-[var(--border-light)] ${
                      isServicesActive()
                        ? 'text-[var(--primary-green)]'
                        : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                    }`}
                  >
                    サービス
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* サブメニュー */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block pl-6 font-medium py-3 border-b border-[var(--border-light)] ${
                          isActive(item.href)
                            ? 'text-[var(--primary-green)]'
                            : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </li>

                {/* 他のナビゲーション項目 */}
                {navItems.slice(1).map((item) => (
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
              <div className="mt-6 pt-6">
                <a href="tel:000-0000-0000" className="flex items-center justify-center gap-2 text-2xl font-bold text-black">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  000-0000-0000
                </a>
                <p className="text-center text-sm text-gray-600 mt-2">
                  <span className="border border-gray-500 px-1">営業時間</span> 8:00〜17:00（土日祝を除く）
                </p>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 mt-4 text-black text-center py-3 px-6 font-bold border border-black transition-colors"
                  style={{ backgroundColor: '#ffea03' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6d303'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffea03'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  お問い合わせ
                </Link>
              </div>
            </nav>
        </div>
      </>
    </>
  );
}
