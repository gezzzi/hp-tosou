import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import WaveDivider from "@/components/WaveDivider";
import Link from "next/link";
import Image from "next/image";
import { BrickWall, Home, Droplets, ChevronRight } from "lucide-react";
import WorkFlow from "@/components/WorkFlow";

export const metadata = {
  title: "塗装 | 株式会社マルヨ",
  description: "株式会社マルヨの塗装。外壁塗装、屋根塗装、物置・ブロック塀塗装など、親子代々続く確かな技術で対応いたします。",
};

export default function PaintingServicePage() {
  const paintingServices = [
    {
      title: '外壁塗装',
      description: '外壁の塗り替えで建物を美しく保護。色褪せや剥がれを解消し、建物の寿命を延ばします。',
      image: '/pic/service-tosou-v2.jpg',
      icon: <BrickWall className="w-16 h-16" />,
    },
    {
      title: '屋根塗装',
      description: 'トタン屋根などの塗り替え。雨漏りや錆を防ぎ、建物を守ります。',
      image: '/pic/header-pc.jpg',
      icon: <Home className="w-16 h-16" />,
    },
    {
      title: '防水塗装',
      description: 'ベランダや屋根の防水工事。雨漏りから建物を守り、耐久性を高めます。',
      image: '/pic/service-tosou.jpg',
      icon: <Droplets className="w-16 h-16" />,
    },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="塗装"
          subtitle="PAINTING SERVICE"
          bgImage="/pic/hd/painting-hd.jpg"
        />

        {/* イントロダクション */}
        <section className="py-16 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                  <h2 className="text-3xl font-bold text-[var(--text-dark)]">確かな技術で<br />建物を守ります</h2>
                </div>
                <div className="flex justify-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
                </div>
                <p className="text-[var(--text-medium)] leading-relaxed mx-auto max-w-2xl">
                  親子代々続く確かな塗装技術で、外壁・屋根塗装から小さな塗装工事まで幅広く対応いたします。
                  お客様のご要望・ご予算に応じて最適なプランをご提案します。
                </p>
                
                <div className="mt-10 bg-[var(--primary-green)]/10 rounded-xl p-6 border-l-4 border-[var(--primary-green)] text-left max-w-2xl mx-auto">
                  <h3 className="font-bold text-[var(--text-dark)] mb-4 text-xl md:text-2xl text-center">こんなお困りありませんか？</h3>
                  <ul className="text-[var(--text-medium)] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">●</span>
                      外壁の汚れやひび割れが気になる
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">●</span>
                      前回の塗装から10年以上経過している
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">●</span>
                      屋根の錆や色褪せを直したい
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary-green)] mt-1">●</span>
                      信頼できる地元の職人に頼みたい
                    </li>
                  </ul>
                </div>
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
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">対応サービス</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {paintingServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 md:h-56 mb-8 -mx-4 md:mx-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <h3 className="text-xl md:text-2xl font-bold brush-stroke-container text-white whitespace-nowrap">
                        <span className="relative z-10">{service.title}</span>
                        <div className="brush-stroke-bg bg-service-painting" />
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mx-auto mb-6 text-[var(--primary-green)]">
                    {service.icon}
                  </div>
                  <p className="text-[var(--text-medium)] leading-relaxed mb-8">{service.description}</p>
                  <div className="flex justify-center">
                    <Link
                      href="/works/"
                      className="btn-outline px-6! flex! items-center justify-center gap-2 group whitespace-nowrap min-w-[200px]"
                    >
                      {service.title}の実績
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
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
