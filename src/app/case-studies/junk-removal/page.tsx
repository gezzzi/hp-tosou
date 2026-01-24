import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import JunkRemovalCaseList from "@/components/JunkRemovalCaseList";

export const metadata = {
  title: "不用品回収・清掃事例 | 株式会社マルヨ",
  description: "株式会社マルヨの不用品回収・清掃事例。引っ越しに伴う不用品回収、高圧洗浄清掃、草刈りなど、これまでのサービス実績をご紹介します。",
};

export default function JunkRemovalCasesPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <PageHeader
          title="不用品回収・清掃事例"
          subtitle="JUNK REMOVAL & CLEANING"
          bgImage="/pic/hd/junk-hd.jpg"
        />

        <JunkRemovalCaseList />

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
