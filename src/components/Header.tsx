'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

  // スクロール監視でヘッダーを固定（モバイルのみ）
  useEffect(() => {
    const handleScroll = () => {
      // トップバーの高さ（約32px）を超えたら固定
      if (window.scrollY > 32) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '料金案内', href: '/pricing' },
    { label: '選ばれる理由', href: '/about' },
    { label: '施工事例', href: '/case-studies' },
    { label: '会社概要', href: '/company' },
    { label: 'お問い合わせ', href: '/contact' },
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
      <header className="relative z-50">
        {/* トップバー */}
        <div className="bg-[var(--primary-green)] text-white py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
            <span>外壁塗装から不用品回収まで | 静岡県全域対応</span>
            <span className="hidden md:block">古物商許可: 静岡県公安委員会 第491100145100号</span>
          </div>
        </div>

        {/* メインヘッダー */}
        <div 
          ref={headerRef}
          className={`bg-white shadow-md transition-all duration-300 ${
            isHeaderFixed ? 'fixed top-0 left-0 right-0 z-50 lg:relative' : 'relative'
          }`}
        >
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
        </nav>
        </div>
      </div>
      </header>

      {/* プレースホルダー（ヘッダー固定時にコンテンツがジャンプしないように） */}
      {isHeaderFixed && (
        <div className="lg:hidden" style={{ height: headerRef.current?.offsetHeight || 0 }} />
      )}

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
              <div className="mt-6 pt-6 border-t-2 border-[var(--border-light)]">
                <a href="tel:000-0000-0000" className="flex items-center justify-center gap-2 text-xl font-bold text-[var(--primary-green)]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  000-0000-0000
                </a>
              </div>
            </nav>
        </div>
      </>
    </>
  );
}
