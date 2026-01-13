import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "サービス事例 | 株式会社マルヨ",
  description: "株式会社マルヨのサービス事例。外壁塗装、屋根塗装、不用品回収、遺品整理など、これまでのサービス実績をご紹介します。",
};

export default function CaseStudiesPage() {
  const caseCategories = [
    {
      title: '塗装事例',
      description: '外壁塗装、屋根塗装など、これまでの塗装実績をご紹介します。',
      href: '/case-studies/painting',
      color: 'var(--primary-green)',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: '不用品回収・遺品整理事例',
      description: '不用品回収、遺品整理、ゴミ屋敷清掃など、これまでのサービス実績をご紹介します。',
      href: '/case-studies/junk-removal',
      color: 'var(--accent-yellow)',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="サービス事例"
          subtitle="WORKS"
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
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
