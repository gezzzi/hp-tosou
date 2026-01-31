'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown } from 'lucide-react';
import logoIcon from '@/app/icon.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false);
  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const caseStudiesDropdownRef = useRef<HTMLLIElement>(null);

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
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (caseStudiesDropdownRef.current && !caseStudiesDropdownRef.current.contains(event.target as Node)) {
        setIsCaseStudiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '料金案内', href: '/pricing/' },
    { label: '会社案内', href: '/about/' },
    { label: 'よくあるご質問', href: '/faq/' },
    { label: 'お問い合わせ', href: '/contact/' },
  ];

  const serviceItems = [
    { label: '塗装', href: '/services/painting/' },
    { label: '不用品回収・清掃', href: '/services/junk-removal/' },
  ];

  const caseStudiesItems = [
    { label: '塗装事例', href: '/case-studies/painting/' },
    { label: '不用品回収・清掃事例', href: '/case-studies/junk-removal/' },
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

  const isCaseStudiesActive = () => {
    return pathname.startsWith('/case-studies');
  };

  return (
    <>
      {/* メインヘッダー */}
      <header className="lg:relative sticky top-0 bg-white z-[130] border-b-4 border-[#99c144]">
        <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* ロゴ・会社名 */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Image 
                src={logoIcon} 
                alt="株式会社マルヨ ロゴ" 
                width={48}
                height={48}
                quality={100}
                priority
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-black" style={{ fontFamily: "var(--font-mochiy-pop-p-one), sans-serif" }}>株式会社マルヨ</h1>
            </div>
          </Link>

          {/* 電話番号 - PC */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-[var(--text-light)]">お気軽にお電話ください</p>
              <a href="tel:054-552-8798" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary-green)]">
                <Phone className="w-6 h-6" />
                054-552-8798
              </a>
            </div>
            <Link href="/contact/" className="btn-primary">
              無料お見積り
            </Link>
          </div>

          {/* ハンバーガーメニュー */}
          <button
            className="lg:hidden p-2 transition-all relative z-[140]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 transform ${
                  isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`} />
              </div>
            </div>
          </button>
        </div>
        </div>
      </header>

      {/* ナビゲーション - PC */}
      <nav className="hidden lg:block sticky top-0 bg-white py-3 z-50 shadow-md">
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
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services/"
                className={`font-medium transition-colors pb-1 ${
                  isServicesActive()
                    ? 'text-[var(--primary-green)] border-b-2 border-[var(--primary-green)]'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                }`}
              >
                サービス
              </Link>

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

            {/* サービス事例（ドロップダウン） */}
            <li
              className="relative"
              ref={caseStudiesDropdownRef}
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <Link
                href="/case-studies/"
                className={`font-medium transition-colors pb-1 ${
                  isCaseStudiesActive()
                    ? 'text-[var(--primary-green)] border-b-2 border-[var(--primary-green)]'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                }`}
              >
                サービス事例
              </Link>

              {/* ドロップダウンメニュー */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-[var(--border-light)] overflow-hidden transition-all duration-200 ${
                  isCaseStudiesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {caseStudiesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/5'
                          : 'text-[var(--text-dark)] hover:bg-[var(--bg-light)] hover:text-[var(--primary-green)]'
                      }`}
                      onClick={() => setIsCaseStudiesOpen(false)}
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
        <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] bg-white shadow-2xl z-[110] overflow-y-auto transition-transform duration-300 ease-out ${
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
                  <div className="flex items-center justify-between border-b border-[var(--border-light)]">
                    <Link
                      href="/services/"
                      className={`flex-1 font-medium py-3 ${
                        isServicesActive()
                          ? 'text-[var(--primary-green)]'
                          : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      サービス
                    </Link>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="px-3 py-3"
                      aria-label="サブメニューを開く"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''} ${
                          isServicesActive() ? 'text-[var(--primary-green)]' : 'text-[var(--text-dark)]'
                        }`}
                      />
                    </button>
                  </div>

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

                {/* サービス事例（アコーディオン） */}
                <li>
                  <div className="flex items-center justify-between border-b border-[var(--border-light)]">
                    <Link
                      href="/case-studies/"
                      className={`flex-1 font-medium py-3 ${
                        isCaseStudiesActive()
                          ? 'text-[var(--primary-green)]'
                          : 'text-[var(--text-dark)] hover:text-[var(--primary-green)]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      サービス事例
                    </Link>
                    <button
                      onClick={() => setIsMobileCaseStudiesOpen(!isMobileCaseStudiesOpen)}
                      className="px-3 py-3"
                      aria-label="サブメニューを開く"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${isMobileCaseStudiesOpen ? 'rotate-180' : ''} ${
                          isCaseStudiesActive() ? 'text-[var(--primary-green)]' : 'text-[var(--text-dark)]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* サブメニュー */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileCaseStudiesOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    {caseStudiesItems.map((item) => (
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
                <a href="tel:054-552-8798" className="flex items-center justify-center gap-2 text-2xl font-bold text-black">
                  <Phone className="w-7 h-7 text-[var(--primary-green)]" />
                  054-552-8798
                </a>
                <p className="text-center text-sm text-gray-600 mt-2">
                  <span className="border border-gray-500 px-1">営業時間</span> 8:00〜17:00（土日祝を除く）
                </p>
              </div>
            </nav>
        </div>
      </>
    </>
  );
}
