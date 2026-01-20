import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

interface HomeCTAProps {
  title?: string;
  description?: string;
}

export default function HomeCTA({
  title = "お見積り・ご相談は無料です",
  description = "こんなこと頼んで良いのかな？というご相談も含めなんでもお気軽にご相談ください！\n静岡県全域対応。山梨県、関東での施工実績もございます。"
}: HomeCTAProps) {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic/hd/footer.jpg"
          alt="背景画像"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-[var(--text-dark)]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="mb-8 font-medium whitespace-pre-line">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:0545-67-8348" className="flex items-center gap-3 bg-[var(--primary-green)] text-white px-8 py-4 rounded font-bold text-xl hover:opacity-90 transition-colors">
            <Phone className="w-6 h-6" />
            0545-67-8348
          </a>
          <Link href="/contact" className="btn-accent text-lg px-8 py-4">
            メールでお問い合わせ
          </Link>
        </div>

        <p className="mt-4 text-sm font-medium">
          平日 8:00〜17:00 / 土日祝はメールにて対応
        </p>
      </div>
    </section>
  );
}

