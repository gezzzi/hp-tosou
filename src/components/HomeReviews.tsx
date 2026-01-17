export default function HomeReviews() {
  const reviews = [
    {
      rating: 5,
      text: '打ち合わせの段階から、親切に対応していただきました。当日も時間通りに来ていただきテキパキと荷物を運びだしてくれました。とても信頼出来る業者さんですので オススメです。',
      service: '不用品回収をご利用'
    },
    {
      rating: 5,
      text: '最初にお願いしていた荷物より大分増えたにもかかわらず快く引き受けていただき助かりました。追加料金なく対応して頂けました。あっという間に綺麗にたくさん積んでいただきました。',
      service: '不用品回収をご利用'
    },
    {
      rating: 5,
      text: '連絡も迅速で、作業も丁寧でした。料金も明確で安心してお願いできました。また機会があればお願いしたいと思います。',
      service: '不用品回収をご利用'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <svg className="w-10 h-10 text-(--secondary-green)" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12 1H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5l1.5 1.5 1.5-1.5H12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4.5h2v2H5v-2zm4 0h2v2H9v-2z"/>
            </svg>
            <span className="relative z-10 text-3xl md:text-4xl">お客様の声</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-1">
              reviews
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex text-[var(--accent-yellow)] mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[var(--text-medium)] mb-4 leading-relaxed">
                「{review.text}」
              </p>
              <p className="text-xs text-[var(--text-light)]">— {review.service}のお客様</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
