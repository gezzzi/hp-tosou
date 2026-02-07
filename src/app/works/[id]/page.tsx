import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Clock } from "lucide-react";
import { notFound } from "next/navigation";
import ImageModalWrapper from "@/components/ImageModalWrapper";

const allCases = [
  {
    id: '1',
    type: 'painting' as const,
    title: '外壁塗装施工例',
    description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
    tags: ['外壁塗装'],
    date: '2024年1月15日',
  },
  {
    id: '2',
    type: 'junk' as const,
    title: '不用品回収',
    description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
    image: '/pic/truck.webp',
    tags: ['不用品回収'],
    date: '2024年2月10日',
  },
  {
    id: '3',
    type: 'junk' as const,
    title: '高圧洗浄清掃・草刈り作業',
    description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
    image: '/pic/hd/junk-hd.jpg',
    tags: ['清掃'],
    date: '2024年1月25日',
  },
  {
    id: '4',
    type: 'painting' as const,
    title: '屋根塗装施工例',
    description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    tags: ['屋根塗装'],
    date: '2023年12月20日',
  },
  {
    id: '5',
    type: 'junk' as const,
    title: 'ゴミ屋敷清掃',
    description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
    image: '/pic/truck.webp',
    tags: ['清掃', '不用品回収'],
    date: '2023年12月15日',
  },
  {
    id: '6',
    type: 'painting' as const,
    title: '防水塗装・シーリング工事',
    description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    tags: ['防水塗装'],
    date: '2023年11月5日',
  },
  {
    id: '7',
    type: 'painting' as const,
    title: 'アパート外壁・屋根塗装',
    description: 'アパート一棟の丸ごと塗装。入居率アップを目指し、清潔感のある配色に仕上げました。',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    tags: ['外壁塗装', '屋根塗装'],
    date: '2023年10月12日',
  },
  {
    id: '8',
    type: 'junk' as const,
    title: '大型家具回収',
    description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
    image: '/pic/hd/service-hd.jpg',
    tags: ['不用品回収'],
    date: '2023年11月20日',
  },
];

const paintingPhotos = [
  { title: '足場架設', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop' },
  { title: '高圧洗浄', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop' },
  { title: '下塗り作業', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=450&fit=crop' },
];

const junkPhotos = [
  { title: '作業前確認', img: '/pic/hd/junk-hd.jpg' },
  { title: '搬出・清掃作業', img: '/pic/truck.webp' },
  { title: '最終確認', img: '/pic/hd/service-hd.jpg' },
];

function getTagColor(tag: string) {
  if (tag === '不用品回収') return 'bg-[#166caa]';
  return 'bg-[#018615]';
}

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseItem = allCases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  const isPainting = caseItem.type === 'painting';
  const bgImage = isPainting ? '/pic/hd/painting-hd.jpg' : '/pic/hd/junk-hd.jpg';
  const basePhotos = isPainting ? paintingPhotos : junkPhotos;
  const photos = [...basePhotos, { title: '完了', img: caseItem.image }];

  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title={caseItem.title}
          subtitle="WORKS"
          bgImage={bgImage}
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
                        <span
                          key={tag}
                          className={`text-white px-2 py-0.5 text-xs ${getTagColor(tag)}`}
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
                            <th className="w-1/3 px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">
                              {isPainting ? '施工内容' : 'サービス内容'}
                            </th>
                            <td className="px-6 py-4 text-(--text-medium)">{caseItem.tags.join('、')}</td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">
                              {isPainting ? '工期' : '作業時間'}
                            </th>
                            <td className="px-6 py-4 text-(--text-medium)">
                              {isPainting ? '約2週間' : '約4時間'}
                            </td>
                          </tr>
                          {isPainting && (
                            <tr className="border-b border-gray-400">
                              <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">使用塗料</th>
                              <td className="px-6 py-4 text-(--text-medium)">シリコン系塗料</td>
                            </tr>
                          )}
                          <tr>
                            <th className="px-6 py-4 bg-(--bg-light) font-bold text-(--text-dark) border-r border-gray-400">
                              {isPainting ? '施工時期' : '作業時期'}
                            </th>
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
                      {photos.map((step, i) => (
                        <ImageModalWrapper key={i} images={photos.map(s => s.img)} initialIndex={i}>
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
