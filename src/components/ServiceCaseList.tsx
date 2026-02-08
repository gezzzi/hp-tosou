"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";

const allCases = [
    {
      id: '1',
      title: '外壁塗装施工例',
      description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=450&fit=crop',
      tags: ['塗装', '外壁塗装'],
      date: '2024年1月15日',
      href: '/works/1'
    },
    {
      id: '2',
      title: '不用品回収',
      description: '引っ越しに伴う不用品の回収。2トントラック1台分の家具・家電を回収しました。',
      image: '/pic/truck.webp',
      tags: ['不用品回収'],
      date: '2024年2月10日',
      href: '/works/2'
    },
    {
      id: '3',
      title: '高圧洗浄清掃・草刈り作業',
      description: '長年放置されていたお庭の草刈りと、外構・土間の高圧洗浄清掃。見違えるほど綺麗になりました。',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=450&fit=crop',
      tags: ['清掃'],
      date: '2024年1月25日',
      href: '/works/3'
    },
    {
      id: '4',
      title: '屋根塗装施工例',
      description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop',
      tags: ['塗装', '屋根塗装'],
      date: '2023年12月20日',
      href: '/works/4'
    },
    {
      id: '5',
      title: 'ゴミ屋敷清掃',
      description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=450&fit=crop',
      tags: ['清掃', '不用品回収'],
      date: '2023年12月15日',
      href: '/works/5'
    },
    {
      id: '6',
      title: '防水塗装・シーリング工事',
      description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop',
      tags: ['塗装', '防水塗装'],
      date: '2023年11月5日',
      href: '/works/6'
    },
    {
      id: '7',
      title: 'アパート外壁・屋根塗装',
      description: 'アパート一棟の丸ごと塗装。入居率アップを目指し、清潔感のある配色に仕上げました。',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop',
      tags: ['塗装', '外壁塗装', '屋根塗装'],
      date: '2023年10月12日',
      href: '/works/7'
    },
    {
      id: '8',
      title: '大型家具回収',
      description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop',
      tags: ['不用品回収'],
      date: '2023年11月20日',
      href: '/works/8'
    },
];

const allTags = ['すべて', '塗装', '外壁塗装', '屋根塗装', '防水塗装', '不用品回収', '清掃'];

function getTagColor(tag: string) {
  if (tag === '不用品回収') return 'bg-[#ffea03] text-[var(--text-dark)] font-bold';
  if (tag === '清掃') return 'bg-[#3b82f6] text-white';
  return 'bg-[#2e9d14] text-white';
}

export default function ServiceCaseList() {
  const [selectedTag, setSelectedTag] = useState('すべて');
  const searchParams = useSearchParams();

  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag && allTags.includes(tag)) {
      setSelectedTag(tag);
    }
  }, [searchParams]);

  const filteredCases = selectedTag === 'すべて'
    ? allCases
    : allCases.filter(c => c.tags.includes(selectedTag));

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* フィルター */}
        <div className="mb-8 flex justify-end items-center gap-4">
          <label htmlFor="tag-filter" className="text-sm font-medium text-(--text-medium)">
            絞り込み：
          </label>
          <select
            id="tag-filter"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border-2 border-primary rounded-md px-3 py-2 text-sm focus:outline-none bg-white"
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((caseItem, index) => (
            <Link key={index} href={caseItem.href} className="bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] group block">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {caseItem.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-none ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-(--text-light) ml-auto flex items-center gap-1">
                    <Clock size={12} />
                    {caseItem.date}
                  </span>
                </div>
                <h3 className="font-bold text-(--text-dark)">{caseItem.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <p className="text-center text-(--text-medium) py-12">
            該当する事例が見つかりませんでした。
          </p>
        )}
      </div>
    </section>
  );
}
