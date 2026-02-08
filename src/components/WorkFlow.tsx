'use client';

import FadeIn from "@/components/FadeIn";
import ScrollReveal from "@/components/ScrollReveal";

export default function WorkFlow() {
  const flowSteps = [
    {
      number: '1',
      title: 'お問い合わせ',
      description: 'お電話・メールにてお気軽にご連絡ください'
    },
    {
      number: '2',
      title: 'ヒアリング',
      description: '代表・望月よりお電話にて詳しくお話を伺います'
    },
    {
      number: '3',
      title: 'お見積り',
      description: '内容に基づき、無料でお見積りをご提出します'
    },
    {
      number: '4',
      title: 'ご契約・作業',
      description: 'ご納得いただけましたら、作業を開始いたします'
    }
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6 text-center">ご依頼の流れ</h2>
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffea03]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6fbb18]"></div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {flowSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="text-center relative">
              {index < flowSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--primary-green)]/30"></div>
              )}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-md ${
                index === 1 || index === 3 ? 'bg-[var(--secondary-green)]' : 'bg-[var(--primary-green)]'
              }`}>
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--text-dark)] mb-2">{step.title}</h3>
              <p className="text-base sm:text-lg text-[var(--text-medium)] leading-relaxed">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
