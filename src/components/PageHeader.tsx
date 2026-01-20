import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, bgImage = "/pic/hd/service-hd.jpg" }: PageHeaderProps) {
  return (
    <div className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden border-b-4 border-[#99c144]">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${bgImage}${bgImage.includes('?') ? '&' : '?'}v=2`}
          alt={title}
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-2 drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#018615] italic tracking-widest font-medium drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

