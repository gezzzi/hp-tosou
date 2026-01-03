import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-green-light)]">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          お見積り・ご相談は無料です
        </h2>
        <p className="mb-8 opacity-90">
          こんなこと頼んで良いのかな？というご相談も含めなんでもお気軽にご相談ください！<br />
          静岡県全域対応。山梨県、関東での施工実績もございます。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:000-0000-0000" className="flex items-center gap-3 bg-white text-[var(--primary-green)] px-8 py-4 rounded font-bold text-xl hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            000-0000-0000
          </a>
          <Link href="/contact" className="btn-accent text-lg px-8 py-4">
            メールでお問い合わせ
          </Link>
        </div>
        
        <p className="mt-4 text-sm opacity-80">
          平日 8:00〜17:00 / 土日祝はメールにて対応
        </p>
      </div>
    </section>
  );
}

