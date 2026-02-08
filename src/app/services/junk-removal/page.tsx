import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import WorkFlow from "@/components/WorkFlow";
import HomeCTA from "@/components/HomeCTA";
import WaveDivider from "@/components/WaveDivider";
import FadeIn from "@/components/FadeIn";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { Truck, Sparkles, Trash2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "不用品回収・清掃 | 株式会社マルヨ",
  description: "株式会社マルヨの不用品回収・清掃サービス. 追加料金一切なし、自社スタッフが責任を持って対応。草刈りや高圧洗浄機を使った清掃業務もお任せください。",
};

export default function JunkRemovalServicePage() {
  const junkServices = [
    {
      title: '不用品回収',
      description: '大きな家具や家電、日用品など不要になったものを回収。お客様で運ぶ必要はありません。',
      image: '/pic/truck.webp',
      icon: <Truck className="w-16 h-16" />,
    },
    {
      title: '清掃・草刈り',
      description: '草刈り機を使用した除草作業や、高圧洗浄機による外壁・土間の清掃など、住まいの「困った」に対応します。',
      image: '/pic/service-junk.jpg',
      icon: <Sparkles className="w-16 h-16" />,
    },
    {
      title: 'ゴミ屋敷清掃',
      description: 'お部屋の状態を問わず対応。不用品の回収から清掃まで、プライバシーに配慮して作業します。',
      image: '/pic/header-junk.jpg',
      icon: <Trash2 className="w-16 h-16" />,
    },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="不用品回収・清掃" 
          subtitle="JUNK REMOVAL & CLEANING" 
          bgImage="/pic/hd/junk-hd.jpg"
        />

        {/* イントロダクション */}
        <section className="py-16 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
                <FadeIn>
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-3xl font-bold text-[var(--text-dark)]">暮らしの困った！<br />に対応いたします</h2>
                </div>
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
                <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              </div>
              <p className="text-[var(--text-medium)] leading-relaxed mx-auto max-w-2xl">
                不要になった家具や家電等を回収し、処分場へ運搬するサービスです。
                また、草刈り機を使用した除草や、高圧洗浄機を使った清掃業務など、幅広く対応いたします。
              </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                <div className="mt-10 bg-white rounded-lg p-8 border-2 border-[#6fbb18] shadow-md max-w-2xl mx-auto">
                  <h3 className="text-lg md:text-2xl font-bold text-[var(--text-dark)] mb-6 text-center">こんなお困りありませんか？</h3>
                  <ul className="grid grid-cols-1 gap-3 text-base text-[var(--text-medium)]">
                    {[
                      "大きな家具や家電を処分したい",
                      "重いものを運べない・車がない",
                      "草刈りや高圧洗浄清掃を頼みたい",
                      "お部屋をまるごと片付けたい"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--primary-green)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                </FadeIn>
            </div>
          </div>
        </section>

        {/* transparent -> bg-light (Wave at bottom) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" />
        </div>

        {/* サービス一覧 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">対応サービス</h2>
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {junkServices.map((service, index) => (
                <ScrollReveal key={index} delay={index * 0.15} scale>
                <div className="text-center">
                  <div className="relative h-48 md:h-56 mb-8 -mx-4 md:mx-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center pb-16">
                      <h3 className="text-xl md:text-2xl font-bold brush-stroke-container text-black/70 whitespace-nowrap">
                        <span className="relative z-10">{service.title}</span>
                        <div className="brush-stroke-bg bg-service-junk" />
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mx-auto mb-6 text-[var(--service-junk-light)]">
                    {service.icon}
                  </div>
                  <p className="text-[var(--text-medium)] leading-relaxed mb-8">{service.description}</p>
                  <div className="flex justify-center">
                    <Link
                      href={`/works/?tag=${service.title === '不用品回収' ? '不用品回収' : '清掃'}`}
                      className="btn-outline px-6! flex! items-center justify-center gap-2 group whitespace-nowrap min-w-[200px]"
                    >
                      {service.title}の実績
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* bg-light -> transparent (Wave at top) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" flip />
        </div>

        <WorkFlow />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
