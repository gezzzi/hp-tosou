"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

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
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=450&fit=crop',
    tags: ['清掃'],
    date: '2024年1月25日'
  },
  {
    id: '3',
    title: 'ゴミ屋敷清掃',
    location: '静岡県沼津市 G様',
    description: 'お部屋の片付けから不用品回収まで一貫して対応。プライバシーに配慮して作業しました。',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=450&fit=crop',
    tags: ['清掃', '不用品回収'],
    date: '2023年12月15日'
  },
  {
    id: '4',
    title: '大型家具回収',
    location: '静岡県富士市 H様',
    description: 'タンス、ベッド、ソファなど大型家具の回収。搬出から処分まですべてお任せいただきました。',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop',
    tags: ['不用品回収'],
    date: '2023年11月20日'
  },
];

const allTags = ['すべて', '不用品回収', '清掃'];

export default function JunkRemovalCaseList() {
  const [selectedTag, setSelectedTag] = useState('すべて');

  const filteredCases = selectedTag === 'すべて'
    ? junkRemovalCases
    : junkRemovalCases.filter(c => c.tags.includes(selectedTag));

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
            <Link key={index} href={`/case-studies/junk-removal/${caseItem.id}`} className="bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] group block">
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
                      className={`text-xs px-2 py-1 rounded-none ${
                        tag === '不用品回収'
                          ? 'bg-[#166caa] text-white'
                          : 'bg-[#018615] text-white'
                      }`}
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
