import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Tag, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

const junkRemovalCases = [
  {
    id: '1',
    title: '不用品回収',
    location: '静岡県富士市 E様',
    description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
    image: '/pic/truck.webp',
    tags: ['不用品回収'],
    date: '2024年2月10日'
  },
  {
    id: '2',
    title: '高圧洗浄清掃・草刈り作業',
    location: '静岡県富士市 F様',
    description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=800&fit=crop',
    tags: ['清掃'],
    date: '2024年1月25日'
  },
  {
    id: '3',
    title: 'ゴミ屋敷清掃',
    location: '静岡県沼津市 G様',
    description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=800&fit=crop',
    tags: ['清掃', '不用品回収'],
    date: '2023年12月15日'
  },
  {
    id: '4',
    title: '大型家具回収',
    location: '静岡県富士市 H様',
    description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop',
    tags: ['不用品回収'],
    date: '2023年11月20日'
  },
];

export default async function JunkRemovalCaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseItem = junkRemovalCases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title={caseItem.title}
          subtitle="SERVICE CASE STUDY"
          bgImage="/pic/hd/junk-hd.jpg"
        />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/case-studies/junk-removal" 
              className="inline-flex items-center text-primary hover:underline mb-8"
            >
              <ChevronLeft size={20} />
              <span>一覧に戻る</span>
            </Link>

            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-(--text-medium) border-b border-(--border-light) pb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{caseItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{caseItem.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={18} className="text-primary" />
                    <div className="flex gap-2">
                      {caseItem.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`text-white px-2 py-0.5 text-xs ${
                            tag === '不用品回収' ? 'bg-[#166caa]' : 'bg-[#018615]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-(--text-dark) mb-6">
                  {caseItem.title}
                </h2>
                
                <div className="prose max-w-none text-(--text-medium) leading-relaxed">
                  <p className="whitespace-pre-wrap">{caseItem.description}</p>
                  
                  <div className="mt-12 p-6 bg-(--bg-light) border-l-4 border-primary">
                    <h4 className="font-bold text-(--text-dark) mb-2">作業のポイント</h4>
                    <p>
                      迅速かつ丁寧な作業を心がけ、お客様の負担を最小限に抑えるよう努めました。
                      分別から搬出まで一括して行うことで、スムーズなサービス提供を実現しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
