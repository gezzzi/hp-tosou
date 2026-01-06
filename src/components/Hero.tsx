import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&h=1080&fit=crop"
          alt="塗装作業イメージ"
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center text-white">
          {/* キャッチコピー */}
          <p className="text-lg md:text-xl mb-4 opacity-90">
            静岡県富士市を拠点に地域密着で対応
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block">塗装も、不用品回収も。</span>
            <span className="block mt-2">
              <span className="text-[var(--accent-yellow)]">安心</span>と
              <span className="text-[var(--accent-yellow)]">丁寧</span>をお届けします。
            </span>
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            祖父の代から続く確かな技術で外壁・屋根塗装を。<br className="hidden md:block" />
            お手頃価格の不用品回収・遺品整理で暮らしをサポート。
          </p>

          {/* 評価バッジ */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <div className="flex text-[var(--accent-yellow)]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold">5.00</span>
            <span className="opacity-80">（くらしのマーケット 24件の口コミ）</span>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-lg px-8 py-4">
              無料お見積りはこちら
            </Link>
            <Link href="/services" className="bg-white text-[var(--primary-green)] px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">
              サービスを見る
            </Link>
          </div>
        </div>
      </div>

      {/* 下部の区切り線 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
    </section>
  );
}
