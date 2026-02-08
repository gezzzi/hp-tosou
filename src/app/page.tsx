import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeTroubles from "@/components/HomeTroubles";
import ChevronDivider from "@/components/ChevronDivider";
import WaveDivider from "@/components/WaveDivider";
import HomeServices from "@/components/HomeServices";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import HomeArea from "@/components/HomeArea";
import HomeCompany from "@/components/HomeCompany";
import HomeReviews from "@/components/HomeReviews";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import WorkFlow from "@/components/WorkFlow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <HomeTroubles />
        {/* transparent -> bg-light (Wave at bottom) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" />
        </div>
        <HomeServices />
        {/* bg-light -> transparent (Wave at top) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" flip />
        </div>
        <HomeCaseStudies />
        {/* transparent -> bg-light (Wave at bottom) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" />
        </div>
        <HomeArea />
        {/* bg-light -> transparent (Wave at top) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" flip />
        </div>
        <HomeCompany />
        {/* transparent -> bg-light (Wave at bottom) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" />
        </div>
        <HomeReviews />
        {/* bg-light -> transparent (Wave at top) */}
        <div className="bg-transparent">
          <WaveDivider color="var(--bg-light)" flip />
        </div>
        <WorkFlow />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
