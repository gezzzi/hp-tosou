import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import PaintingCaseList from "@/components/PaintingCaseList";

export const metadata = {
  title: "塗装事例 | 株式会社マルヨ",
  description: "株式会社マルヨの塗装事例。外壁塗装、屋根塗装など、これまでの塗装実績をご紹介します。",
};

export default function PaintingCasesPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="塗装事例"
          subtitle="PAINTING WORKS"
          bgImage="/pic/hd/painting-hd.jpg"
        />

        <PaintingCaseList />

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
