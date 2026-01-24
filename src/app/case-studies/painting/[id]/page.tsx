import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Tag, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

const paintingCases = [
  {
    id: '1',
    title: '外壁塗装施工例',
    location: '静岡県富士市 A様邸',
    description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
    tags: ['外壁塗装'],
    date: '2024年1月15日'
  },
  {
    id: '2',
    title: '屋根塗装施工例',
    location: '静岡県富士市 B様邸',
    description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    tags: ['屋根塗装'],
    date: '2023年12月20日'
  },
  {
    id: '3',
    title: '防水塗装・シーリング工事',
    location: '静岡県富士市 C様邸',
    description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    tags: ['防水塗装'],
    date: '2023年11月5日'
  },
  {
    id: '4',
    title: 'アパート外壁・屋根塗装',
    location: '静岡県富士宮市 D様邸',
    description: 'アパート一棟の丸ごと塗装。入居率アップを目指し、清潔感のある配色に仕上げました。',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    tags: ['外壁塗装', '屋根塗装'],
    date: '2023年10月12日'
  },
];

export default async function PaintingCaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseItem = paintingCases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title={caseItem.title}
          subtitle="CASE STUDY"
          bgImage="/pic/hd/painting-hd.jpg"
        />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/case-studies/painting" 
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
                        <span key={tag} className="bg-[#018615] text-white px-2 py-0.5 text-xs">
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
                    <h4 className="font-bold text-(--text-dark) mb-2">施工のポイント</h4>
                    <p>
                      お客様のご要望に合わせて、最適な塗料と工法を選定いたしました。
                      細部まで丁寧に仕上げることで、美観の向上だけでなく、建物の耐久性も大幅にアップさせています。
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
