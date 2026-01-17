import Link from 'next/link';

export default function HomeArea() {
  const areas = [
    { region: '東部', cities: ['富士市', '富士宮市', '沼津市', '三島市など'] },
    { region: '中部', cities: ['静岡市', '焼津市', '藤枝市', '島田市など'] },
    { region: '西部', cities: ['浜松市', '磐田市', '掛川市', '袋井市など'] },
    { region: '伊豆', cities: ['熱海市', '伊東市', '伊豆市', '函南町など'] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <svg className="w-10 h-10 text-(--secondary-green)" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span className="relative z-10 text-3xl md:text-4xl">対応エリア</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-1">
              area
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-(--bg-light) rounded-2xl p-8 md:p-10 border border-(--border-light) relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-(--text-dark) mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                静岡県内全域・山梨・関東まで対応
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {areas.map((area, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-(--border-light)">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                      </svg>
                      静岡県 {area.region}
                    </h4>
                    <p className="text-sm text-(--text-medium) leading-relaxed">
                      {area.cities.join('、')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-(--text-medium) mb-6 text-sm">
                  山梨県・関東地方も出張可能です。まずはお気軽にお問い合わせください。
                </p>
                <Link href="/area" className="btn-outline">
                  対応エリアの詳細を見る
                </Link>
              </div>
            </div>
            
            {/* 背景の装飾的な要素 */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-primary opacity-[0.03] rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-48 h-48 bg-(--secondary-green) opacity-[0.03] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
