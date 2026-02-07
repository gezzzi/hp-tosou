import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import WorkFlow from "@/components/WorkFlow";
import FAQContent from "@/components/FAQContent";

export const metadata = {
  title: "よくあるご質問 | 株式会社マルヨ",
  description: "株式会社マルヨのよくあるご質問。塗装工事や不用品回収・清掃に関する疑問にお答えします。お見積り、工期、対応エリアなど、お気軽にお問い合わせください。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader 
          title="よくあるご質問" 
          subtitle="FAQ" 
          bgImage="/pic/hd/faq-hd.jpg"
        />
        <FAQContent />
        <WorkFlow />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
