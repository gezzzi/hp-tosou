import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import PricingContent from "@/components/PricingContent";

export const metadata = {
  title: "料金案内 | 株式会社マルヨ",
  description: "株式会社マルヨの料金案内。不用品回収は2トントラック積み放題28,000円から。塗装工事は無料でお見積りいたします。",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="料金案内"
          subtitle="PRICING"
          bgImage="/pic/hd/pricing-hd.jpg"
        />
        <PricingContent />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
