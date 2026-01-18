import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "対応エリア | 株式会社マルヨ",
  description: "株式会社マルヨの対応エリア。静岡県全域を中心に、山梨県・関東地方まで対応。不用品回収、塗装工事など、お気軽にご相談ください。",
};

export default function AreaPage() {
  const mainAreas = [
    {
      region: '東部',
      cities: ['富士市', '富士宮市', '沼津市', '三島市', '御殿場市', '裾野市', '長泉町', '清水町', '小山町'],
      note: '即日対応可能',
      highlight: true,
    },
    {
      region: '中部',
      cities: ['静岡市（葵区・駿河区・清水区）', '焼津市', '藤枝市', '島田市', '牧之原市', '吉田町'],
      note: '対応可能',
    },
    {
      region: '西部',
      cities: ['浜松市', '磐田市', '袋井市', '掛川市', '菊川市', '湖西市'],
      note: '対応可能',
    },
    {
      region: '伊豆',
      cities: ['熱海市', '伊東市', '下田市', '伊豆市', '伊豆の国市', '東伊豆町', '西伊豆町', '松崎町', '南伊豆町', '河津町', '函南町'],
      note: '対応可能',
    },
  ];

  const extendedAreas = [
    {
      region: '山梨県',
      cities: ['甲府市', '富士吉田市', '南アルプス市', '笛吹市', '甲斐市', '山梨市', '都留市', '大月市', '韮崎市', '中央市', 'その他山梨県内全域'],
      note: '出張対応可能',
    },
    {
      region: '関東地方',
      cities: ['東京都', '神奈川県', '千葉県', '埼玉県', '茨城県', '栃木県', '群馬県'],
      note: '出張対応（要相談）',
    },
  ];

  const services = [
  { name: '不用品回収', areas: ['静岡県全域', '山梨県', '関東'] },
  { name: '草刈り・清掃', areas: ['静岡県全域', '山梨県', '関東'] },
    { name: 'ゴミ屋敷清掃', areas: ['静岡県全域', '山梨県', '関東'] },
    { name: '外壁塗装', areas: ['静岡県全域', '山梨県'] },
    { name: '屋根塗装', areas: ['静岡県全域', '山梨県'] },
    { name: 'その他塗装', areas: ['静岡県全域', '山梨県', '関東'] },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="対応エリア" 
          subtitle="SERVICE AREA" 
        />

        {/* イントロダクション */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--primary-green)]/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
                静岡県を中心に幅広く対応
              </h2>
              <p className="text-[var(--text-medium)] max-w-2xl mx-auto leading-relaxed">
                株式会社マルヨは<strong className="text-[var(--primary-green)]">静岡県富士市</strong>を拠点に、
                静岡県全域から山梨県、関東地方まで幅広いエリアに対応しています。
                <br />
                お見積りは無料です。まずはお気軽にご相談ください。
              </p>
            </div>

            {/* 本拠地表示 */}
            <div className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-green-light)] rounded-2xl p-6 md:p-8 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium opacity-90">本社所在地</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-2">静岡県富士市</p>
              <p className="opacity-80">〒417-0061 静岡県富士市伝法2503-5</p>
            </div>
          </div>
        </section>

        {/* 静岡県内エリア */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">静岡県内</h2>
              <p className="text-[var(--text-medium)]">県内全域に対応しています</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainAreas.map((area, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 ${
                    area.highlight 
                      ? 'border-[var(--primary-green)]' 
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        area.highlight 
                          ? 'bg-[var(--primary-green)] text-white' 
                          : 'bg-[var(--primary-green)]/10 text-[var(--primary-green)]'
                      }`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-dark)]">
                        静岡県 {area.region}
                      </h3>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      area.highlight 
                        ? 'bg-[var(--accent-yellow)] text-[var(--text-dark)]' 
                        : 'bg-[var(--bg-light)] text-[var(--text-medium)]'
                    }`}>
                      {area.note}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span 
                        key={cityIndex} 
                        className="text-sm bg-[var(--bg-light)] text-[var(--text-medium)] px-3 py-1 rounded-full"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 県外エリア */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">静岡県外</h2>
              <p className="text-[var(--text-medium)]">山梨県・関東地方への出張も承ります</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-[var(--bg-light)] rounded-xl p-6 border border-[var(--border-light)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--secondary-green)]/10 text-[var(--secondary-green)] flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-dark)]">
                        {area.region}
                      </h3>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--secondary-green)]/10 text-[var(--secondary-green)]">
                      {area.note}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span 
                        key={cityIndex} 
                        className="text-sm bg-white text-[var(--text-medium)] px-3 py-1 rounded-full"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[var(--accent-yellow)]/20 rounded-lg p-6 border-l-4 border-[var(--accent-yellow)]">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--accent-yellow-dark)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-[var(--text-dark)] mb-1">県外への出張について</p>
                  <p className="text-sm text-[var(--text-medium)]">
                    山梨県および関東地方への出張も承っております。遠方の場合は出張費が発生する場合がございます。
                    まずはお気軽にお問い合わせください。お見積りは無料です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス別対応エリア */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">サービス別 対応エリア</h2>
              <p className="text-[var(--text-medium)]">各サービスの対応可能エリアをご確認いただけます</p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--primary-green)] text-white">
                      <th className="px-6 py-4 text-left font-bold">サービス</th>
                      <th className="px-6 py-4 text-center font-bold">静岡県</th>
                      <th className="px-6 py-4 text-center font-bold">山梨県</th>
                      <th className="px-6 py-4 text-center font-bold">関東</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-light)]'}>
                        <td className="px-6 py-4 font-medium text-[var(--text-dark)] border-b border-[var(--border-light)]">
                          {service.name}
                        </td>
                        <td className="px-6 py-4 text-center border-b border-[var(--border-light)]">
                          {service.areas.includes('静岡県全域') && (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[var(--primary-green)]/10 rounded-full text-[var(--primary-green)]">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center border-b border-[var(--border-light)]">
                          {service.areas.includes('山梨県') && (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[var(--primary-green)]/10 rounded-full text-[var(--primary-green)]">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center border-b border-[var(--border-light)]">
                          {service.areas.includes('関東') && (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[var(--secondary-green)]/10 rounded-full text-[var(--secondary-green)]">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-sm text-[var(--text-light)] mt-4">
              ※ 上記エリア外でも対応可能な場合がございます。お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">対応エリアに関するQ&A</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-[var(--bg-light)] rounded-lg p-6">
                <h3 className="font-bold text-[var(--text-dark)] mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-[var(--primary-green)] text-white rounded-full flex items-center justify-center text-sm font-bold">Q</span>
                  対応エリア外ですが、依頼できますか？
                </h3>
                <p className="text-[var(--text-medium)] pl-9">
                  対応エリア外でも、ご依頼内容によっては対応可能な場合がございます。
                  まずはお気軽にお問い合わせください。状況をお伺いした上で、ご対応可能かお伝えいたします。
                </p>
              </div>

              <div className="bg-[var(--bg-light)] rounded-lg p-6">
                <h3 className="font-bold text-[var(--text-dark)] mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-[var(--primary-green)] text-white rounded-full flex items-center justify-center text-sm font-bold">Q</span>
                  遠方からの依頼は出張費がかかりますか？
                </h3>
                <p className="text-[var(--text-medium)] pl-9">
                  静岡県内は基本的に出張費無料で対応しております。
                  県外への出張の場合は、距離や作業内容に応じて出張費が発生する場合がございます。
                  お見積りの際に詳しくご説明いたします。
                </p>
              </div>

              <div className="bg-[var(--bg-light)] rounded-lg p-6">
                <h3 className="font-bold text-[var(--text-dark)] mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-[var(--primary-green)] text-white rounded-full flex items-center justify-center text-sm font-bold">Q</span>
                  即日対応は可能ですか？
                </h3>
                <p className="text-[var(--text-medium)] pl-9">
                  富士市近郊（東部エリア）であれば、スケジュールの空き状況によっては即日対応も可能です。
                  お急ぎの場合はお電話にてご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl font-bold mb-4">お気軽にご相談ください</h2>
            <p className="mb-6 opacity-90">
              対応エリアのご確認やお見積りは無料です。<br className="sm:hidden" />
              まずはお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:000-0000-0000" className="flex items-center justify-center gap-2 bg-white text-[var(--primary-green)] px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                000-0000-0000
              </a>
              <Link href="/contact" className="btn-accent">
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

