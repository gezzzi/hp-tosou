import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import ServiceCaseList from "@/components/ServiceCaseList";

export const metadata = {
  title: "実績 | 株式会社マルヨ",
  description: "株式会社マルヨのサービス実績。外壁塗装、屋根塗装、不用品回収、草刈り・清掃など、これまでの施工実績をご紹介します。",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="実績"
          subtitle="WORKS"
          bgImage="/pic/hd/service-hd.jpg"
        />
        <ServiceCaseList />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
