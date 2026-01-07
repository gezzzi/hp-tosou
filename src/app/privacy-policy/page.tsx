import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 株式会社マルヨ",
  description: "株式会社マルヨのプライバシーポリシー。お客様の個人情報の取り扱いについてご説明いたします。",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. 個人情報の定義",
      content: "個人情報とは、お客様の氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報を指します。"
    },
    {
      title: "2. 個人情報の収集",
      content: "当社は、お問い合わせフォーム、お電話、LINE等を通じて、お客様から以下の情報をご提供いただく場合がございます。",
      list: [
        "お名前",
        "ご住所",
        "電話番号",
        "メールアドレス",
        "お問い合わせ内容"
      ]
    },
    {
      title: "3. 個人情報の利用目的",
      content: "当社は、お客様からお預かりした個人情報を、以下の目的にのみ使用いたします。",
      list: [
        "お問い合わせへのご回答・ご連絡",
        "お見積りのご提供",
        "サービスのご案内・ご提案",
        "ご依頼いただいた作業の実施"
      ],
      note: "お客様からいただいた情報は、お客様へのご連絡およびサービス提供のためにのみ使用し、それ以外の目的で使用することは一切ございません。"
    },
    {
      title: "4. 個人情報の第三者への提供",
      content: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはございません。",
      list: [
        "お客様の同意がある場合",
        "法令に基づく場合",
        "人の生命、身体または財産の保護のために必要がある場合"
      ]
    },
    {
      title: "5. 個人情報の管理",
      content: "当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、必要かつ適切な安全管理措置を講じます。"
    },
    {
      title: "6. 個人情報の開示・訂正・削除",
      content: "お客様がご自身の個人情報の開示、訂正、削除を希望される場合は、お問い合わせ窓口までご連絡ください。ご本人様であることを確認のうえ、速やかに対応いたします。"
    },
    {
      title: "7. プライバシーポリシーの変更",
      content: "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトに掲載いたします。"
    },
    {
      title: "8. お問い合わせ窓口",
      content: "個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。",
      contactInfo: true
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="プライバシーポリシー" 
          subtitle="PRIVACY POLICY" 
        />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* 前文 */}
            <div className="mb-12">
              <p className="text-[var(--text-medium)] leading-relaxed">
                株式会社マルヨ（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定め、適切な管理・保護に努めてまいります。
              </p>
            </div>

            {/* 各セクション */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-[var(--border-light)] pb-8 last:border-b-0">
                  <h2 className="text-lg font-bold text-[var(--text-dark)] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[var(--text-medium)] leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-[var(--text-medium)] ml-4 mb-4">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <div className="bg-[var(--primary-green)]/5 border-l-4 border-[var(--primary-green)] p-4 rounded-r-lg">
                      <p className="text-[var(--text-dark)] font-medium text-sm">
                        ※ {section.note}
                      </p>
                    </div>
                  )}
                  {section.contactInfo && (
                    <div className="bg-[var(--bg-light)] rounded-lg p-6 mt-4">
                      <p className="font-bold text-[var(--text-dark)] mb-2">株式会社マルヨ</p>
                      <p className="text-sm text-[var(--text-medium)] mb-1">電話：000-0000-0000</p>
                      <p className="text-sm text-[var(--text-medium)] mb-1">受付時間：平日 8:00〜17:00</p>
                      <Link href="/contact" className="text-sm text-[var(--primary-green)] hover:underline">
                        お問い合わせフォームはこちら →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 制定日 */}
            <div className="mt-12 text-right text-sm text-[var(--text-light)]">
              <p>制定日：2026年1月1日</p>
              <p>最終更新日：2026年1月1日</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[var(--bg-light)]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-[var(--text-dark)] mb-4">
              ご不明な点がございましたら
            </h2>
            <p className="text-[var(--text-medium)] mb-6">
              お気軽にお問い合わせください
            </p>
            <Link href="/contact" className="btn-primary">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

