export default function HomeTroubles() {
  const troubles = [
    '外壁の汚れやひび割れが目立ってきた',
    '屋根のサビや色あせをなんとかしたい',
    '不用品が多すぎて、どこから手をつけていいかわからない',
    '実家の片付けや遺品整理が必要だが、遠方で難しい',
    '大手メーカーの見積もりが高すぎて驚いた',
    '地元の信頼できる業者に直接頼みたい'
  ];

  return (
    <section className="py-16 bg-(--bg-light)">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">こんなお困りはありませんか？</h2>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {troubles.map((trouble, index) => (
              <div key={index} className="trouble-item relative group w-44 h-44 md:w-56 md:h-56 flex items-center justify-center transition-all duration-300 hover:scale-105">
                {/* 画像のデザインを忠実に再現したSVG */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full drop-shadow-lg">
                  {/* 外側の塗りつぶし円 */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="98" 
                    className="trouble-circle"
                  />
                  {/* 外側の白線 */}
                  <circle cx="100" cy="100" r="92" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
                
                {/* テキスト部分：画像のように複数行で中央配置 */}
                <div className="relative z-10 text-white font-bold text-center px-6 leading-relaxed text-base md:text-xl">
                  {trouble.match(/.{1,7}/g)?.map((line, i) => (
                    <p key={i} className="whitespace-nowrap">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="font-bold text-2xl md:text-3xl text-(--primary-green) mb-2">
            そのお悩み、塗装と不用品回収のプロが解決します！
          </p>
          <p className="text-(--text-medium) text-lg">
            お気軽にご相談ください
          </p>
        </div>
      </div>
    </section>
  );
}
