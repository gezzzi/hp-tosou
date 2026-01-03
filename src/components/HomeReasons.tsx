import Link from 'next/link';

export default function HomeReasons() {
  const reasons = [
    {
      number: '01',
      title: '安心感と丁寧な仕事',
      description: 'くらしのマーケットで平均評価5.00。お客様から「親切・丁寧」「信頼できる」と高評価をいただいています。'
    },
    {
      number: '02',
      title: '追加料金なし・自社施工',
      description: '見積もり後に料金が上がる心配なし。自社の職人が責任を持って対応します。'
    },
    {
      number: '03',
      title: '迅速な対応',
      description: 'お問い合わせへの返答の速さも評価ポイント。スピーディーな対応でお客様のお時間を大切にします。'
    }
  ];

  return (
    <section className="py-16 bg-[var(--bg-light)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">選ばれる理由</h2>
          <p className="section-subtitle">
            マルヨが多くのお客様から選ばれる3つの理由
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary-green)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {reason.number}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mt-4 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-[var(--text-medium)]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/about" className="btn-secondary">
            もっと詳しく見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

