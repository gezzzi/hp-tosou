'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

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
            href="tel:054-552-8798"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--primary-green)] text-white py-3 px-4 font-bold hover:bg-[var(--primary-green-dark)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>054-552-8798</span>
          </a>

          {/* お問い合わせボタン */}
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--accent-yellow)] text-[var(--text-dark)] py-3 px-4 font-bold hover:bg-[var(--accent-yellow-dark)] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>お問い合わせ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

