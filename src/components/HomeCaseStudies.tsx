import Link from 'next/link';
import Image from 'next/image';

export default function HomeCaseStudies() {
  const cases = [
    {
      title: '外壁・屋根塗装',
      category: '塗装工事',
      description: '築15年の住宅。外壁のひび割れと屋根の苔が目立っていましたが、高耐久塗料で新築同様の輝きを取り戻しました。',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop',
      href: '/case-studies/painting',
      color: 'primary'
    },
    {
      title: '一軒家丸ごと回収',
      category: '不用品回収',
      description: '実家の片付けに伴う不用品回収。2トントラック2台分、家具から家電まで1日でスピーディーに回収いたしました。',
      image: 'https://images.unsplash.com/photo-1595273670150-db0a3bf39079?w=600&h=400&fit=crop',
      href: '/case-studies/junk-removal',
      color: 'junk'
    }
  ];

  return (
    <section className="py-16 bg-(--bg-light)">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <svg className="w-10 h-10 text-(--secondary-green)" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.069 0c.262 0 .52.017.76.057a4.1 4.1 0 0 1 .697.154c.228.069.451.155.674.263c.217.103.44.229.663.366c.377.24.748.434 1.126.589a7.537 7.537 0 0 0 2.331.525c.406.029.823.046 1.257.046v4c0 .76-.097 1.48-.291 2.166a8.996 8.996 0 0 1-.789 1.943a10.312 10.312 0 0 1-1.188 1.725a15.091 15.091 0 0 1-1.492 1.532a17.57 17.57 0 0 1-1.703 1.325c-.594.412-1.194.795-1.794 1.143l-.24.143l-.24-.143a27.093 27.093 0 0 1-1.806-1.143a15.58 15.58 0 0 1-1.703-1.325a15.082 15.082 0 0 1-1.491-1.532a10.947 10.947 0 0 1-1.194-1.725a9.753 9.753 0 0 1-.789-1.943A7.897 7.897 0 0 1 .571 6V2c.435 0 .852-.017 1.258-.046a8.16 8.16 0 0 0 1.188-.171c.383-.086.766-.2 1.143-.354A6.563 6.563 0 0 0 5.28.846C5.72.56 6.166.349 6.606.21A4.79 4.79 0 0 1 8.069 0zm6.502 2.983a9.566 9.566 0 0 1-2.234-.377a7.96 7.96 0 0 1-2.046-.943A4.263 4.263 0 0 0 9.23 1.16A3.885 3.885 0 0 0 8.074.994a3.99 3.99 0 0 0-1.165.166a3.946 3.946 0 0 0-1.058.503A7.926 7.926 0 0 1 3.8 2.61c-.709.206-1.451.332-2.229.378v3.017c0 .663.086 1.297.258 1.908a8.58 8.58 0 0 0 .72 1.743a9.604 9.604 0 0 0 1.08 1.572c.417.491.862.948 1.342 1.382c.48.435.983.835 1.509 1.206c.531.372 1.063.709 1.594 1.017a22.397 22.397 0 0 0 1.589-1.017a15.389 15.389 0 0 0 1.514-1.206c.48-.434.926-.891 1.343-1.382a9.596 9.596 0 0 0 1.08-1.572a8.258 8.258 0 0 0 .709-1.743a6.814 6.814 0 0 0 .262-1.908V2.983z"/>
              <path fillRule="evenodd" d="m11.797 4.709l-.44-.378l-.406.035l-4.36 5.148l-1.485-2.12l-.4-.068l-.463.331l-.069.4l1.909 2.726l.217.12l.457.028l.234-.102l4.835-5.715l-.029-.405z" clipRule="evenodd"/>
            </svg>
            <span className="relative z-10 text-3xl md:text-4xl">サービス事例</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-300 italic uppercase tracking-tighter opacity-30 -z-10 leading-none select-none pr-1">
              works
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm md:max-w-[800px] mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group relative aspect-square w-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 ${item.color === 'primary'
                ? 'bg-primary/10'
                : 'bg-service-junk/10'
                }`}></div>
              <div className="absolute inset-0 flex flex-col p-6 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                <div className="mb-auto">
                  <h3 className="text-xl md:text-2xl font-bold brush-stroke-container mx-auto text-white text-center mt-4 whitespace-nowrap block">
                    <span className="relative z-10">{item.title}</span>
                    <div className={`brush-stroke-bg ${item.color === 'primary' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-white/90 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div>
                    <Link href={item.href} className={item.color === 'primary' ? 'btn-secondary' : 'btn-junk'}>
                      詳しく見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-outline">
            すべての事例を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
