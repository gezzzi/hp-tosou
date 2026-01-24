"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const paintingCases = [
  {
    id: '1',
    title: '外壁塗装施工例',
    description: '築20年の戸建て住宅の外壁塗装。色褪せと一部剥がれが見られたため、全面塗り替えを実施しました。',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=450&fit=crop',
    tags: ['外壁塗装'],
    date: '2024年1月15日'
  },
  {
    id: '2',
    title: '屋根塗装施工例',
    description: 'トタン屋根の塗り替え工事。錆止め処理後、遮熱塗料で仕上げました。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop',
    tags: ['屋根塗装'],
    date: '2023年12月20日'
  },
  {
    id: '3',
    title: '防水塗装・シーリング工事',
    description: 'ベランダの防水塗装とサッシ周りのシーリング打ち替え。雨漏り対策を万全にしました。',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop',
    tags: ['防水塗装'],
    date: '2023年11月5日'
  },
  {
    id: '4',
    title: 'アパート外壁・屋根塗装',
    description: 'アパート一棟の丸ごと塗装。入居率アップを目指し、清潔感のある配色に仕上げました。',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop',
    tags: ['外壁塗装', '屋根塗装'],
    date: '2023年10月12日'
  },
];

const allTags = ['すべて', '外壁塗装', '屋根塗装', '防水塗装'];

export default function PaintingCaseList() {
  const [selectedTag, setSelectedTag] = useState('すべて');

  const filteredCases = selectedTag === 'すべて'
    ? paintingCases
    : paintingCases.filter(c => c.tags.includes(selectedTag));

  return (
    <section className="py-16 bg-white">
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
            <Link key={index} href={`/case-studies/painting/${caseItem.id}`} className="bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] group block">
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
                    <span key={tag} className="bg-[#018615] text-white text-xs px-2 py-1 rounded-none">
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
