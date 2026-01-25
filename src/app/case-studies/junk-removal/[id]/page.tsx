import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Tag, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ImageModalWrapper from "@/components/ImageModalWrapper";

const junkRemovalCases = [
  {
    id: '1',
    title: '不用品回収',
    description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
    image: '/pic/truck.webp',
    tags: ['不用品回収'],
    date: '2024年2月10日'
  },
  {
    id: '2',
    title: '高圧洗浄清掃・草刈り作業',
    description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
    image: '/pic/hd/junk-hd.jpg',
    tags: ['清掃'],
    date: '2024年1月25日'
  },
  {
    id: '3',
    title: 'ゴミ屋敷清掃',
    description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
    image: '/pic/truck.webp',
    tags: ['清掃', '不用品回収'],
    date: '2023年12月15日'
  },
  {
    id: '4',
    title: '大型家具回収',
    description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
    image: '/pic/hd/service-hd.jpg',
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
                            <th className="w-1/3 px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">サービス内容</th>
                            <td className="px-6 py-4 text-(--text-medium)">{caseItem.tags.join('、')}</td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">作業時間</th>
                            <td className="px-6 py-4 text-(--text-medium)">約4時間</td>
                          </tr>
                          <tr>
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">作業時期</th>
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
                        { title: '作業前確認', img: '/pic/hd/junk-hd.jpg' },
                        { title: '搬出・清掃作業', img: '/pic/truck.webp' },
                        { title: '最終確認', img: '/pic/hd/service-hd.jpg' },
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
