import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Paintbrush, Truck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "サービス事例 | 株式会社マルヨ",
  description: "株式会社マルヨのサービス事例。外壁塗装、屋根塗装、不用品回収、草刈り・清掃など、これまでのサービス実績をご紹介します。",
};

export default function CaseStudiesPage() {
  const caseCategories = [
    {
      title: '塗装事例',
      description: '外壁塗装、屋根塗装など、これまでの塗装実績をご紹介します。',
      href: '/case-studies/painting',
      color: 'var(--primary-green)',
      icon: <Paintbrush className="w-16 h-16" />
    },
    {
      title: '不用品回収・清掃事例',
      description: '不用品回収、ゴミ屋敷清掃、草刈り機や高圧洗浄機を使用した清掃など、これまでのサービス実績をご紹介します。',
      href: '/case-studies/junk-removal',
      color: 'var(--accent-yellow)',
      icon: <Truck className="w-16 h-16" />
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="サービス事例"
          subtitle="WORKS"
          bgImage="/pic/hd/service-hd.jpg"
        />

        {/* カテゴリー選択 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="card p-8 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
                    {category.title}
                  </h2>
                  <p className="text-[var(--text-medium)] mb-6">
                    {category.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 font-bold transition-colors"
                    style={{ color: category.color }}
                  >
                    事例を見る
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--primary-green)]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-xl font-bold mb-4">
              事例について詳しく聞きたい方は
            </h2>
            <p className="mb-6 opacity-90">
              ご自宅の状況に合わせたご提案をいたします
            </p>
            <Link href="/contact" className="btn-accent">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
