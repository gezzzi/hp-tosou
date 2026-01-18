import { MessageSquare, Star } from 'lucide-react';

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
            <MessageSquare className="w-10 h-10 text-(--secondary-green) shrink-0" />
            <span className="relative z-10 text-3xl md:text-4xl">お客様の声</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-4">
              reviews
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex text-[var(--accent-yellow)] mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
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
