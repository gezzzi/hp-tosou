import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "塗装事例 | 株式会社マルヨ",
  description: "株式会社マルヨの塗装事例。外壁塗装、屋根塗装など、これまでの塗装実績をご紹介します。",
};

export default function PaintingCasesPage() {
  const paintingCases = [
    {
      title: '外壁塗装施工例',
      location: '静岡県富士市 A様邸',
      description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=450&fit=crop'
    },
    {
      title: '屋根塗装施工例',
      location: '静岡県富士市 B様邸',
      description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop'
    },
    {
      title: 'ブロック塀・門扉塗装',
      location: '静岡県富士市 C様邸',
      description: '経年劣化したブロック塀と門扉の塗装。建物との調和を考えた色選びをご提案しました。',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop'
    },
    {
      title: 'ウッドデッキ塗装',
      location: '静岡県富士宮市 D様邸',
      description: 'ウッドデッキのメンテナンス塗装。木材を保護し、美しさを取り戻しました。',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop'
    },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="塗装事例"
          subtitle="PAINTING WORKS"
          bgImage="/pic/hd/painting-hd.jpg"
        />

        {/* 塗装事例 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paintingCases.map((caseItem, index) => (
                <div key={index} className="card overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] text-xs px-2 py-1 rounded">塗装</span>
                      <span className="text-xs text-[var(--text-light)]">{caseItem.location}</span>
                    </div>
                    <h3 className="font-bold text-[var(--text-dark)] mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-[var(--text-medium)]">{caseItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
