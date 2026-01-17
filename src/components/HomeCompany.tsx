import Link from 'next/link';
import Image from 'next/image';

export default function HomeCompany() {
  return (
    <section className="py-16 bg-(--bg-light)">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <svg className="w-10 h-10 text-(--secondary-green)" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5z"/>
            </svg>
            <span className="relative z-10 text-3xl md:text-4xl">会社概要</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-1">
              company
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border border-(--border-light)">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                  alt="代表取締役 望月達也"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-(--text-light) mb-1">代表取締役</p>
                <p className="text-lg font-bold text-(--text-dark)">望月 達也</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-(--text-dark) mb-4">祖父の代から続く、信頼と実績。</h3>
              <p className="text-(--text-medium) text-sm leading-relaxed mb-6">
                株式会社マルヨは、静岡県富士市を中心に地域密着で活動しております。塗装工事から不用品回収まで、お客様の「困った」を解決するために、丁寧で迅速な対応を心がけています。
                <br /><br />
                自社施工・追加料金なしの明朗会計で、安心してお任せいただけるサービスを提供し続けてまいります。
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded mt-1 font-bold">所在地</span>
                  <p className="text-sm text-(--text-dark)">〒417-0061 静岡県富士市伝法2503-5</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded mt-1 font-bold">事業内容</span>
                  <p className="text-sm text-(--text-dark)">塗装工事、不用品回収、遺品整理、他</p>
                </div>
              </div>

              <Link href="/company" className="btn-outline">
                会社概要・代表挨拶を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
