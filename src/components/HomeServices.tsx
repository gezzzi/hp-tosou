import Link from 'next/link';
import Image from 'next/image';

export default function HomeServices() {
  const services = [
    {
      title: '塗装サービス',
      description: '外壁塗装、屋根塗装、物置・門扉など各種塗装工事。祖父の代から続く確かな技術で対応します。',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop',
      href: '/services/painting',
      color: 'primary'
    },
    {
      title: '不用品回収・その他',
      description: '2トントラック積み放題28,000円。追加料金なし、自社施工で安心のサービスを提供します。',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      href: '/services/junk-removal',
      color: 'accent'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <svg className="w-10 h-10 text-(--secondary-green)" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15.1 3.12a1 1 0 0 1 .706.71c.452 1.71.032 3.62-1.32 4.97a5.14 5.14 0 0 1-4.87 1.36a.34.34 0 0 0-.148-.006l-.025.008l-5.08 5.08a2.563 2.563 0 0 1-3.62 0a2.563 2.563 0 0 1 0-3.62l5.08-5.08l.008-.025a.34.34 0 0 0-.006-.148a5.16 5.16 0 0 1 1.366-4.88a5.11 5.11 0 0 1 4.97-1.32a1 1 0 0 1 .452 1.674l-2.1 2.1l.383 1.15l1.15.383l2.1-2.1a1 1 0 0 1 .968-.258zM5.81 6.55l.001-.002zm3.62 3.62l.002-.001zm4.34-2.07a4.16 4.16 0 0 1-3.93 1.1c-.396-.096-.827-.023-1.12.265l-5.08 5.08c-.607.608-1.6.608-2.21 0a1.57 1.57 0 0 1 0-2.21l5.08-5.08c.288-.288.361-.721.265-1.12a4.2 4.2 0 0 1-.043-1.78a4.2 4.2 0 0 1 1.14-2.15c.76-.76 1.74-1.16 2.73-1.2c.428-.02.86.027 1.28.137l-2.1 2.1a1 1 0 0 0-.242 1.02l.383 1.15c.1.299.334.533.632.632l1.15.383a.99.99 0 0 0 1.02-.242l2.1-2.1c.11.418.156.849.137 1.28a4.1 4.1 0 0 1-1.2 2.73z" clipRule="evenodd"/>
            </svg>
            <span className="relative z-10 text-3xl md:text-4xl">サービス</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-1">
              service
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm md:max-w-[800px] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group relative aspect-square w-full"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 ${service.color === 'primary'
                ? 'bg-primary/10'
                : 'bg-accent/10'
                }`}></div>
              <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold mb-auto brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap">
                  <span className="relative z-10">{service.title}</span>
                  <div className={`brush-stroke-bg ${service.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                </h3>
                <div className="mt-4">
                  <p className="text-white/90 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div>
                    <Link href={service.href} className={service.color === 'primary' ? 'btn-secondary' : 'btn-junk'}>
                      詳しく見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/painting" className="btn-outline">
            すべてのサービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
