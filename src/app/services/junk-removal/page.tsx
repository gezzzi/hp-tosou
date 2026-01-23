import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";
import Image from "next/image";
import { Truck, Heart, Sparkles, Scissors, CheckCircle, Users, Lock, Phone, Search, FileText, Paintbrush, Droplets, Trash2, Brush, SprayCan, ChevronDown, ChevronRight } from "lucide-react";

export const metadata = {
  title: "不用品回収・清掃 | 株式会社マルヨ",
  description: "株式会社マルヨの不用品回収・清掃サービス。追加料金一切なし、自社スタッフが責任を持って対応。草刈りや高圧洗浄機を使った清掃業務もお任せください。",
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

  const processSteps = [
    { step: 1, title: 'お問い合わせ', description: 'お電話またはメールでお気軽にご連絡ください。', icon: <Phone className="w-24 h-24" /> },
    { step: 2, title: '現地調査・お見積り', description: '現地を確認し、無料でお見積りをご提示します。', icon: <Search className="w-24 h-24" /> },
    { step: 3, title: 'ご契約', description: '内容にご納得いただけましたら契約となります。', icon: <FileText className="w-24 h-24" /> },
    { step: 4, title: '作業開始', description: '自社スタッフが責任を持って丁寧に作業いたします。', icon: <Paintbrush className="w-24 h-24" /> },
    { step: 5, title: '作業完了', description: '仕上がりをご確認いただき、完了となります。', icon: <CheckCircle className="w-24 h-24" /> },
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
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
              
                <div className="mt-10 bg-[var(--primary-green)]/10 rounded-xl p-6 border-l-4 border-[var(--primary-green)] text-left max-w-2xl mx-auto">
                  <h3 className="font-bold text-[var(--text-dark)] mb-4 text-xl md:text-2xl text-center">こんなお困りありませんか？</h3>
                  <ul className="text-[var(--text-medium)] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-green)] mt-1">●</span>
                    大きな家具や家電を処分したい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-green)] mt-1">●</span>
                    重いものを運べない・車がない
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-green)] mt-1">●</span>
                    草刈りや高圧洗浄清掃を頼みたい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-green)] mt-1">●</span>
                    お部屋をまるごと片付けたい
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 区切り 1: Intro -> Services */}
        <div className="bg-white">
          <section className="relative w-full h-10 overflow-hidden">
            <div 
              className="absolute inset-0 bg-[var(--bg-light)]" 
              style={{ clipPath: 'polygon(0px 0px, 40% 0px, 50% 100%, 60% 0px, 100% 0px, 100% 100%, 0px 100%)' }}
            />
          </section>
        </div>

        {/* サービス一覧 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">対応サービス</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {junkServices.map((service, index) => (
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
                      href="/case-studies/junk-removal"
                      className="btn-outline px-6! flex! items-center justify-center gap-2 group whitespace-nowrap min-w-[200px]"
                    >
                      {service.title}の事例
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 区切り 2: Services -> Flow */}
        <div className="bg-[var(--bg-light)]">
          <section className="relative w-full h-10 overflow-hidden">
            <div 
              className="absolute inset-0 bg-white" 
              style={{ clipPath: 'polygon(0px 0px, 40% 0px, 50% 100%, 60% 0px, 100% 0px, 100% 100%, 0px 100%)' }}
            />
          </section>
        </div>

        {/* 施工の流れ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">ご依頼の流れ</h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--primary-green)]/20" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#038717] text-white font-bold text-3xl relative z-10">
                      {item.step}
                    </div>
                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-green)] opacity-20 pointer-events-none">
                        {item.icon}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base text-[var(--text-medium)] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    {item.step < processSteps.length && (
                      <div className="md:hidden flex justify-center py-4">
                        <ChevronDown className="w-8 h-8 text-[var(--primary-green)]/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}

