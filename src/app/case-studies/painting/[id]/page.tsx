import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Tag, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ImageModalWrapper from "@/components/ImageModalWrapper";

const paintingCases = [
  {
    id: '1',
    title: '外壁塗装施工例',
    description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
    tags: ['外壁塗装'],
    date: '2024年1月15日'
  },
  {
    id: '2',
    title: '屋根塗装施工例',
    description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    tags: ['屋根塗装'],
    date: '2023年12月20日'
  },
  {
    id: '3',
    title: '防水塗装・シーリング工事',
    description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    tags: ['防水塗装'],
    date: '2023年11月5日'
  },
  {
    id: '4',
    title: 'アパート外壁・屋根塗装',
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

        <section className="py-16 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white">
              <div className="relative pl-8 mb-8 md:mb-12">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#018615]"></div>
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#018615]"></div>
                <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-(--text-medium)">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{caseItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      {caseItem.tags.map(tag => (
                        <span key={tag} className="bg-[#018615] text-white px-2 py-0.5 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-(--text-dark)">
                  {caseItem.title}
                </h2>
              </div>

              <div className="relative h-[300px] md:h-[500px] mb-8 md:mb-12">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <div className="prose max-w-none text-(--text-medium) leading-relaxed">
                  {/* メモセクション */}
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-(--text-dark) mb-6 flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#018615]"></span>
                      メモ
                    </h3>
                    <div className="p-8 bg-white border-t-4 border-b-2 border-[#dee2e6] border-t-[#018615] relative shadow-sm">
                      <div className="absolute top-0 left-8 right-8 h-full opacity-60 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 2.45rem, #adb5bd 2.45rem)', backgroundSize: '100% 2.5rem' }}></div>
                      <div className="relative text-[#018615] font-medium text-lg leading-[2.5rem] pt-[0.6rem]">
                        {caseItem.description}
                      </div>
                    </div>
                  </div>

                  {/* 作業概要セクション */}
                  <div className="mt-16">
                    <h3 className="text-xl font-bold text-(--text-dark) mb-6 flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#018615]"></span>
                      作業概要
                    </h3>
                    <div className="overflow-hidden border-y border-gray-400">
                      <table className="w-full text-base text-left">
                        <tbody>
                          <tr className="border-b border-gray-400">
                            <th className="w-1/3 px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">施工内容</th>
                            <td className="px-6 py-4 text-(--text-medium)">{caseItem.tags.join('、')}</td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">工期</th>
                            <td className="px-6 py-4 text-(--text-medium)">約2週間</td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">使用塗料</th>
                            <td className="px-6 py-4 text-(--text-medium)">シリコン系塗料</td>
                          </tr>
                          <tr>
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">施工時期</th>
                            <td className="px-6 py-4 text-(--text-medium)">{caseItem.date}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 現場写真セクション */}
                  <div className="mt-16">
                    <h3 className="text-xl font-bold text-(--text-dark) mb-6 flex items-center gap-2">
                      <span className="w-2 h-6 bg-[#018615]"></span>
                      現場写真
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {[
                        { title: '足場架設', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop' },
                        { title: '高圧洗浄', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop' },
                        { title: '下塗り作業', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=450&fit=crop' },
                        { title: '完了', img: caseItem.image },
                      ].map((step, i, array) => (
                        <ImageModalWrapper key={i} images={array.map(s => s.img)} initialIndex={i}>
                          <div className="bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] group cursor-pointer h-full">
                            <div className="relative h-40 sm:h-64 overflow-hidden">
                              <Image
                                src={step.img}
                                alt={step.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-(--text-dark) text-center">{step.title}</h4>
                            </div>
                          </div>
                        </ImageModalWrapper>
                      ))}
                    </div>
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
