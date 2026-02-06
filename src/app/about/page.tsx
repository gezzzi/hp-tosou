import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import ChevronDivider from "@/components/ChevronDivider";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "会社案内 | 株式会社マルヨ",
  description: "株式会社マルヨの会社案内。代表取締役 望月達也。静岡県富士市を拠点に、塗装工事・不用品回収・清掃業務を行っています。",
};

export default function CompanyPage() {
  const companyInfo = [
    { label: '会社名', value: '株式会社マルヨ' },
    { label: '代表者', value: '望月 達也' },
    { label: '所在地', value: '〒417-0061 静岡県富士市伝法2503-5' },
    { label: '電話番号', value: '054-552-8798' },
    { label: '営業時間', value: '平日 8:00〜17:00' },
    { label: '定休日', value: '土曜日、日曜日' },
    { label: '対応エリア', value: '静岡県全域（山梨県、関東での施工実績あり）' },
    { label: '事業内容', value: '塗装工事、不用品回収、草刈り、高圧洗浄清掃、ゴミ屋屋敷清掃 他' },
    { label: '許認可', value: '古物商許可: 静岡県公安委員会 第491100145100号' },
  ];

  const flowSteps = [
    {
      number: '1',
      title: 'お問い合わせ',
      description: 'お電話・メールにてお気軽にご連絡ください'
    },
    {
      number: '2',
      title: 'ヒアリング',
      description: '代表・望月よりお電話にて詳しくお話を伺います'
    },
    {
      number: '3',
      title: 'お見積り',
      description: '内容に基づき、無料でお見積りをご提出します'
    },
    {
      number: '4',
      title: 'ご契約・作業',
      description: 'ご納得いただけましたら、作業を開始いたします'
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="会社案内" 
          subtitle="ABOUT US" 
          bgImage="/pic/hd/about-hd.jpg"
        />

        {/* 代表挨拶 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6 text-center">代表者挨拶</h2>
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-48 h-48 rounded-full overflow-hidden relative shrink-0 shadow-lg border-4 border-white">
                  <Image
                    src="/pic/ceo-photo.webp"
                    alt="代表取締役 望月達也"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-6">
                    <p className="text-base text-[var(--text-light)] mb-1">代表取締役</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-dark)]">望月 達也</p>
                  </div>
                  
                  <p className="text-[var(--text-medium)] text-base sm:text-lg leading-relaxed text-left">
                    株式会社マルヨのホームページをご覧いただき、ありがとうございます。
                    <br /><br />
                    当社は親子代々続く塗装業を基盤に、現在は不用品回収や、草刈り・高圧洗浄機を使った清掃業務など、住まいの「困った」を解決する事業に幅広く力を入れております。
                    <br /><br />
                    「安心感」と「丁寧な仕事」をモットーに、お客様のお困りごとに真摯に向き合い、
                    ご満足いただけるサービスを提供してまいります。
                    <br /><br />
                    「こんなこと頼んでいいのかな？」と思われることでも、お気軽にご相談ください。
                    皆様からのお問い合わせを心よりお待ちしております。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <ChevronDivider color="var(--bg-light)" />
        </div>

        {/* 会社情報 */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6 text-center">会社情報</h2>
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden border-y border-gray-400">
                <table className="w-full text-left">
                  <tbody>
                    {companyInfo.map((info, index) => (
                      <tr key={index} className={index === companyInfo.length - 1 ? "" : "border-b border-gray-400"}>
                        <th className="px-6 py-4 text-base sm:text-lg font-bold text-[var(--text-dark)] bg-[var(--bg-light)] whitespace-nowrap w-1/3 border-r border-gray-400">
                          {info.label}
                        </th>
                        <td className="px-6 py-4 text-base sm:text-lg text-[var(--text-medium)] bg-white">
                          {info.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[var(--bg-light)]">
          <ChevronDivider color="#ffffff" />
        </div>

        {/* ご依頼の流れ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6 text-center">ご依頼の流れ</h2>
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {flowSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--primary-green)]/30"></div>
                  )}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-md ${
                    index === 1 || index === 3 ? 'bg-[var(--secondary-green)]' : 'bg-[var(--primary-green)]'
                  }`}>
                    {step.number}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--text-dark)] mb-2">{step.title}</h3>
                  <p className="text-base sm:text-lg text-[var(--text-medium)] leading-relaxed">{step.description}</p>
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
