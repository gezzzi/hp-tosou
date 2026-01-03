import Link from 'next/link';
import Image from 'next/image';

export default function HomeServices() {
  const services = [
    {
      title: '塗装サービス',
      description: '外壁塗装、屋根塗装、物置・門扉など各種塗装工事。祖父の代から続く確かな技術で対応します。',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop',
      href: '/services#painting',
      color: 'primary'
    },
    {
      title: '不用品回収・遺品整理',
      description: '2トントラック積み放題28,000円。追加料金なし、自社施工で安心のサービスを提供します。',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      href: '/services#junk',
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">サービス内容</h2>
          <p className="section-subtitle">
            2つの事業でお客様の「困った」を解決します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${
                  service.color === 'primary' 
                    ? 'bg-[var(--primary-green)]/20' 
                    : 'bg-[var(--accent-yellow)]/20'
                }`}></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-medium)] mb-4">
                  {service.description}
                </p>
                <Link href={service.href} className={service.color === 'primary' ? 'btn-secondary' : 'btn-accent'}>
                  詳しく見る →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            すべてのサービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
