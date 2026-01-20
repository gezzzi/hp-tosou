import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "会社案内 | 株式会社マルヨ",
  description: "株式会社マルヨの会社案内。代表取締役 望月達也。静岡県富士市を拠点に、塗装工事・不用品回収・清掃業務を行っています。",
};

export default function CompanyPage() {
  const companyInfo = [
    { label: '会社名', value: '株式会社マルヨ' },
    { label: '代表者', value: '望月 達也（もちづき たつや）' },
    { label: '所在地', value: '〒417-0061 静岡県富士市伝法2503-5' },
    { label: '電話番号', value: '0545-67-8348' },
    { label: '営業時間', value: '平日 8:00〜17:00' },
    { label: '定休日', value: '土曜日、日曜日' },
    { label: '対応エリア', value: '静岡県全域（山梨県、関東での施工実績あり）' },
    { label: '事業内容', value: '塗装工事、不用品回収、草刈り、高圧洗浄清掃、ゴミ屋敷清掃 他' },
    { label: '従業員数', value: '5名' },
    { label: '許認可', value: '古物商許可: 静岡県公安委員会 第491100145100号' },
  ];

  const flowSteps = [
    {
      number: '1',
      title: 'お問い合わせ',
      description: 'お電話・メール・LINEにてお気軽にご連絡ください'
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

        {/* 会社情報 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 会社情報テーブル */}
              <div>
                <h2 className="text-xl font-bold text-[var(--primary-green)] mb-6">基本情報</h2>
                <div className="bg-white rounded-lg overflow-hidden border border-[var(--border-light)]">
                  <table className="w-full">
                    <tbody>
                      {companyInfo.map((info, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-light)]'}>
                          <th className="px-4 py-3 text-left text-sm font-bold text-[var(--primary-green)] whitespace-nowrap w-1/3 border-b border-[var(--border-light)]">
                            {info.label}
                          </th>
                          <td className="px-4 py-3 text-sm text-[var(--text-medium)] border-b border-[var(--border-light)]">
                            {info.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 代表挨拶 */}
              <div>
                <h2 className="text-xl font-bold text-[var(--primary-green)] mb-6">代表挨拶</h2>
                <div className="bg-[var(--bg-light)] rounded-lg p-6">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden relative">
                    <Image
                      src="/pic/ceo-photo.webp"
                      alt="代表取締役 望月達也"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-sm text-[var(--text-light)]">代表取締役</p>
                    <p className="text-xl font-bold text-[var(--text-dark)]">望月 達也</p>
                  </div>
                  
                  <p className="text-sm text-[var(--text-medium)] leading-relaxed">
                    株式会社マルヨのホームページをご覧いただき、ありがとうございます。
                    <br /><br />
                    当社は祖父の代から続く塗装業を基盤に、現在は不用品回収や、草刈り・高圧洗浄機を使った清掃業務など、住まいの「困った」を解決する事業に幅広く力を入れております。
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

        {/* ご依頼の流れ */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">ご依頼の流れ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {flowSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--primary-green)]/30"></div>
                  )}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white ${
                    index === 1 || index === 3 ? 'bg-[var(--secondary-green)]' : 'bg-[var(--primary-green)]'
                  }`}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-medium)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA 
          title="お気軽にお問い合わせください"
          description="どんな小さなことでも構いません。皆様からのお問い合わせを心よりお待ちしております。"
        />
      </main>
      <Footer />
    </>
  );
}
