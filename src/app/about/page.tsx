import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "選ばれる理由 | 株式会社マルヨ",
  description: "株式会社マルヨが選ばれる理由。くらしのマーケット評価5.00の信頼と実績。安心感と丁寧な仕事、追加料金なし、迅速な対応でお客様をサポートします。",
};

export default function AboutPage() {
  const reasons = [
    {
      number: '01',
      title: '安心感と丁寧な仕事',
      description: 'くらしのマーケットで24件のレビュー平均評価5.00の高評価。お客様からは「親切・丁寧」「信頼できる」との声を多数いただいています。祖父の代から続く確かな技術と、丁寧な仕事で、お客様に安心をお届けします。',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop'
    },
    {
      number: '02',
      title: '追加料金なし・自社施工',
      description: '不用品回収は「追加料金一切なし」「作業外注一切なし」を掲げています。見積もり後に料金が上がる心配はありません。塗装工事も基本的に自社の職人が対応する体制で、責任を持って施工いたします。',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    },
    {
      number: '03',
      title: '迅速な対応',
      description: 'お問い合わせへの返答の速さも高く評価されています。「当日も時間通りに来ていただきテキパキと荷物を運びだしてくれました」など、スピーディーな対応でお客様のお時間を大切にします。',
      image: 'https://images.unsplash.com/photo-1553729459-afe8f2e2ed96?w=600&h=400&fit=crop'
    }
  ];

  const reviews = [
    {
      rating: 5,
      text: '打ち合わせの段階から、親切に対応していただきました。当日も時間通りに来ていただきテキパキと荷物を運びだしてくれました。とても信頼出来る業者さんですので オススメです。',
      service: '不用品回収をご利用'
    },
    {
      rating: 5,
      text: '最初にお願いしていた荷物より大分増えたにもかかわらず快く引き受けていただき助かりました。追加料金なく対応して頂けました。あっという間に綺麗にたくさん積んでいただきました。',
      service: '不用品回収をご利用'
    },
    {
      rating: 5,
      text: '連絡も迅速で、作業も丁寧でした。料金も明確で安心してお願いできました。また機会があればお願いしたいと思います。',
      service: '不用品回収をご利用'
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="選ばれる理由" 
          subtitle="WHY US" 
        />

        {/* 選ばれる理由 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-16">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 relative">
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={reason.image}
                        alt={reason.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center font-bold text-2xl text-[var(--text-dark)] shadow-lg">
                      {reason.number}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">{reason.title}</h3>
                    <p className="text-[var(--text-medium)] leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 評価バッジ */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
              <div className="flex text-[var(--accent-yellow)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold">5.00</span>
              <span className="opacity-80">くらしのマーケット 24件の口コミ</span>
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">お客様の声</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex text-[var(--accent-yellow)] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-medium)] mb-4 leading-relaxed">
                    「{review.text}」
                  </p>
                  <p className="text-xs text-[var(--text-light)]">— {review.service}のお客様</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-[var(--text-dark)] mb-4">
              私たちにお任せください
            </h2>
            <p className="text-[var(--text-medium)] mb-6">
              お客様の「困った」を解決するため、誠心誠意対応いたします
            </p>
            <Link href="/contact" className="btn-primary">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
