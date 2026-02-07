"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const segmentMap: { [key: string]: string } = {
  "about": "会社案内",
  "services": "サービス",
  "painting": "塗装事例",
  "junk-removal": "不用品回収・清掃事例",
  "works": "実績",
  "pricing": "料金プラン",
  "faq": "よくあるご質問",
  "contact": "お問い合わせ",
  "privacy-policy": "プライバシーポリシー",
};

export default function Breadcrumbs({ lastSegmentLabel }: { lastSegmentLabel?: string }) {
  const pathname = usePathname();
  
  // ホームページでは表示しない
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-[#f7f7f5] py-3 border-b border-(--border-light)">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center gap-y-2 gap-x-2 text-xs text-(--text-medium)">
        <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>HOME</span>
        </Link>
        
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/") + "/";
          const isLast = index === segments.length - 1;
          const label = isLast && lastSegmentLabel ? lastSegmentLabel : (segmentMap[segment] || segment);

          return (
            <div key={href} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-(--text-light)" />
              {isLast ? (
                <span className="font-bold text-(--text-dark)">{label}</span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
