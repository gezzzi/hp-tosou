import React from 'react';

interface ChevronDividerProps {
  color?: string;
}

export default function ChevronDivider({ color = '#ffffff' }: ChevronDividerProps) {
  return (
    <section className="relative w-full h-10 overflow-hidden" aria-hidden="true">
      {/* 
        背景色のついた帯（セクション）。
        color プロップで指定された色で塗りつぶされます。
        clip-pathで上辺中央にV字（chevron notch）を入れ、頂点が下端（100%）に届くように設定。
        親要素の背景色がノッチ部分から透けて見えます。
      */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          clipPath: 'polygon(0 0, 40% 0, 50% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)'
        }}
      />
    </section>
  );
}
