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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block">塗装も、不用品回収も。</span>
            <span className="block mt-2">
              <span className="text-[var(--accent-yellow)]">安心</span>と
              <span className="text-[var(--accent-yellow)]">丁寧</span>をお届けします。
            </span>
          </h2>
        </div>
      </div>

      {/* 下部の区切り線 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
    </section>
  );
}
