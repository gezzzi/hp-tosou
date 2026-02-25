'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'ホーム', href: '/' },
  { label: '実績', href: '/works/' },
  { label: '料金案内', href: '/pricing/' },
  { label: '会社案内', href: '/about/' },
  { label: 'よくあるご質問', href: '/faq/' },
  { label: 'お問い合わせ', href: '/contact/' },
];

const SERVICE_ITEMS = [
  { label: '塗装', href: '/services/painting/' },
  { label: '不用品回収・清掃', href: '/services/junk-removal/' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLLIElement>(null);

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
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <header className="lg:relative sticky top-0 bg-white z-[130]">
        <div className="max-w-6xl mx-auto px-4 py-2 lg:py-3">
        <div className="flex justify-between items-center">
          {/* ロゴ・会社名 */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/株式会社マルヨ.png"
              alt="株式会社マルヨ"
              width={600}
              height={100}
              className="h-10 lg:h-16 w-auto object-contain"
              quality={100}
              priority
            />
          </Link>

          {/* 電話番号 - PC */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-[var(--text-light)]">お気軽にお電話ください</p>
              <a href="tel:054-552-8798" className="flex items-center gap-2 text-2xl font-bold text-black">
                <Phone className="w-6 h-6 text-[var(--primary-green)]" />
                054-552-8798
              </a>
            </div>
            <Link href="/contact/" className="bg-[var(--accent-yellow)] text-[var(--text-dark)] py-3 px-6 font-bold hover:bg-[var(--accent-yellow-dark)] transition-colors shadow-sm flex items-center gap-2 border border-black">
              <Mail className="w-5 h-5" />
              お問い合わせ
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
      <nav className="hidden lg:block sticky top-0 bg-white py-0 z-50 shadow-md border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-center items-stretch">
            {/* ホーム */}
            <li className="flex-1 border-l border-gray-300 last:border-r">
              <Link
                href="/"
                className={`flex items-center justify-center py-4 text-lg font-bold transition-all w-full h-full relative group ${
                  isActive('/')
                    ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/5'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)] hover:bg-gray-50'
                }`}
              >
                ホーム
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary-green)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive('/') ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </li>

            {/* サービス（ドロップダウン） */}
            <li
              className="flex-1 border-l border-gray-300 last:border-r relative group"
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services/"
                className={`flex items-center justify-center py-4 text-lg font-bold transition-all w-full h-full relative ${
                  isServicesActive()
                    ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/5'
                    : 'text-[var(--text-dark)] hover:text-[var(--primary-green)] hover:bg-gray-50'
                }`}
              >
                サービス
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary-green)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isServicesActive() ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              {/* ドロップダウンメニュー */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-white shadow-xl border border-[var(--border-light)] overflow-hidden z-[60]"
                  >
                    <div className="py-2">
                      {SERVICE_ITEMS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 text-base font-bold transition-all hover:pl-6 ${
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
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 他のナビゲーション項目 */}
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.href} className="flex-1 border-l border-gray-300 last:border-r">
                <Link
                  href={item.href}
                  className={`flex items-center justify-center py-4 text-lg font-bold transition-all w-full h-full relative group ${
                    isActive(item.href)
                      ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/5'
                      : 'text-[var(--text-dark)] hover:text-[var(--primary-green)] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary-green)]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
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
                    {SERVICE_ITEMS.map((item) => (
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
                {NAV_ITEMS.slice(1).map((item) => (
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
