'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールしたら表示
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // ページの一番下に近づいたかチェック（下から150px以内）
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      if (scrollHeight - scrollTop - clientHeight < 150) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-opacity duration-500 ease-out ${
      isVisible && !isAtBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="bg-white shadow-lg">
        <div className="flex">
          {/* 電話番号ボタン */}
          <a
            href="tel:0545-67-8348"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--primary-green)] text-white py-3 px-4 font-bold hover:bg-[var(--primary-green-dark)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>0545-67-8348</span>
          </a>

          {/* お問い合わせボタン */}
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--accent-yellow)] text-[var(--text-dark)] py-3 px-4 font-bold hover:bg-[var(--accent-yellow-dark)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>お問い合わせ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

