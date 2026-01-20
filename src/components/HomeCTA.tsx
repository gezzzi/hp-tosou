import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-16 bg-[#6fbb18]">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          お見積り・ご相談は無料です
        </h2>
        <p className="mb-8 opacity-90">
          こんなこと頼んで良いのかな？というご相談も含めなんでもお気軽にご相談ください！<br />
          静岡県全域対応。山梨県、関東での施工実績もございます。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:0545-67-8348" className="flex items-center gap-3 bg-white text-[var(--primary-green)] px-8 py-4 rounded font-bold text-xl hover:bg-gray-100 transition-colors">
            <Phone className="w-6 h-6" />
            0545-67-8348
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

