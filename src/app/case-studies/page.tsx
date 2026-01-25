import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";
import Image from "next/image";
import { Paintbrush, Truck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "サービス事例 | 株式会社マルヨ",
  description: "株式会社マルヨのサービス事例。外壁塗装、屋根塗装、不用品回収、草刈り・清掃など、これまでのサービス実績をご紹介します。",
};

export default function CaseStudiesPage() {
  const caseCategories = [
    {
      title: '塗装事例',
      description: '外壁塗装、屋根塗装など、これまでの塗装実績をご紹介します。親子代々続く確かな技術で施工した事例をご覧ください。',
      image: '/pic/service-tosou-v2.jpg',
      href: '/case-studies/painting',
      color: 'var(--primary-green)',
      icon: <Paintbrush className="w-16 h-16" />
    },
    {
      title: '不用品回収・清掃事例',
      description: '不用品回収、ゴミ屋敷清掃、草刈りや高圧洗浄機を使用した清掃など、住まいの「困った」を解決した実績をご紹介します。',
      image: '/pic/truck.webp',
      href: '/case-studies/junk-removal',
      color: 'var(--service-junk-light)',
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

        {/* 導入文 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-6">
                これまでの施工・サービス実績
              </h2>
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
                <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              </div>
              <p className="text-[var(--text-medium)] leading-relaxed max-w-3xl mx-auto">
                株式会社マルヨがこれまでに手掛けてきた、外壁塗装や屋根塗装の施工事例、
                不用品回収や清掃サービスの実施例をご紹介します。
                お客様のご要望にどのようにお応えしたか、ビフォーアフターを交えて詳しく掲載しています。
                ご依頼を検討される際の参考にぜひご覧ください。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {caseCategories.map((category, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="relative h-48 md:h-64 mb-8 -mx-4 md:mx-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold brush-stroke-container text-white whitespace-nowrap">
                        <span className="relative z-10">{category.title}</span>
                        <div className={`brush-stroke-bg ${category.color === 'var(--primary-green)' ? 'bg-service-painting' : 'bg-service-junk'}`} />
                      </h2>
                    </div>
                  </div>
                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <p className="text-[var(--text-medium)] mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={category.href}
                      className="btn-outline px-6! flex! items-center justify-center gap-2 group whitespace-nowrap min-w-[200px]"
                    >
                      {category.title.replace('事例', '')}の事例
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
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
