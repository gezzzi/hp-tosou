import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "不用品回収・清掃事例 | 株式会社マルヨ",
  description: "株式会社マルヨの不用品回収・清掃事例。引っ越しに伴う不用品回収、高圧洗浄清掃、草刈りなど、これまでのサービス実績をご紹介します。",
};

export default function JunkRemovalCasesPage() {
  const junkCases = [
    {
      title: '不用品回収',
      location: '静岡県富士市 E様',
      description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
      image: '/pic/truck.webp'
    },
    {
      title: '高圧洗浄清掃・草刈り作業',
      location: '静岡県富士市 F様',
      description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=450&fit=crop'
    },
    {
      title: 'ゴミ屋敷清掃',
      location: '静岡県沼津市 G様',
      description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=450&fit=crop'
    },
    {
      title: '大型家具回収',
      location: '静岡県富士市 H様',
      description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop'
    },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="不用品回収・清掃事例"
          subtitle="JUNK REMOVAL & CLEANING"
          bgImage="/pic/hd/junk-hd.jpg"
        />

        {/* 不用品回収事例 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {junkCases.map((caseItem, index) => (
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
                      <span className="bg-[var(--accent-yellow)]/30 text-[var(--text-dark)] text-xs px-2 py-1 rounded">回収</span>
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
