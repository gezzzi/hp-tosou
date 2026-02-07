import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import WorkFlow from "@/components/WorkFlow";
import ServicesContent from "@/components/ServicesContent";

export const metadata = {
  title: "サービス | 株式会社マルヨ",
  description: "株式会社マルヨのサービス。外壁塗装、屋根塗装、不用品回収、草刈り、高圧洗浄清掃など、幅広いサービスをご提供します。",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="サービス"
          subtitle="SERVICES"
          bgImage="/pic/hd/service-hd.jpg"
        />
        <ServicesContent />
        <WorkFlow />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
