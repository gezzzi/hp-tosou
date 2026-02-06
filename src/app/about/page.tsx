import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import ChevronDivider from "@/components/ChevronDivider";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "会社案内 | 株式会社マルヨ",
  description: "株式会社マルヨの会社案内。代表取締役 望月達也。静岡県富士市を拠点に、塗装工事・不用品回収・清掃業務を行っています。",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="会社案内" 
          subtitle="ABOUT US" 
          bgImage="/pic/hd/about-hd.jpg"
        />
        <AboutContent />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
