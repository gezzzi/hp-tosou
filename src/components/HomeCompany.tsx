import Link from 'next/link';
import Image from 'next/image';
import { Info, ArrowRight } from 'lucide-react';

export default function HomeCompany() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-sm md:max-w-[800px] mx-auto text-left mb-12 relative overflow-visible">
          <h2 className="section-title flex items-center justify-start gap-3 text-(--text-dark)! text-left! relative z-10">
            <Info className="w-10 h-10 text-(--secondary-green) shrink-0" />
            <span className="relative z-10 text-3xl md:text-4xl">会社案内</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-black text-slate-200 italic uppercase tracking-tighter opacity-80 -z-10 leading-none select-none pr-4">
              about us
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border-[3px] border-[#6fbb18]">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/pic/ceo-photo.webp?v=2"
                  alt="代表取締役 望月達也"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-(--text-light) mb-1">代表取締役</p>
                <p className="text-lg font-bold text-(--text-dark)">望月 達也</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center">
              <Link href="/about" className="btn-outline !flex flex-row items-center justify-center gap-2 whitespace-nowrap w-full max-w-[300px] sm:w-80 sm:max-w-none py-4">
                会社案内・代表挨拶
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
