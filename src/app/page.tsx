import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeTroubles from "@/components/HomeTroubles";
import ChevronDivider from "@/components/ChevronDivider";
import HomeServices from "@/components/HomeServices";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import HomeArea from "@/components/HomeArea";
import HomeCompany from "@/components/HomeCompany";
import HomeReviews from "@/components/HomeReviews";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <HomeTroubles />
        {/* white -> bg-light */}
        <div className="bg-white">
          <ChevronDivider color="var(--bg-light)" />
        </div>
        <HomeServices />
        {/* bg-light -> white */}
        <div className="bg-(--bg-light)">
          <ChevronDivider color="#ffffff" />
        </div>
        <HomeCaseStudies />
        {/* white -> bg-light */}
        <div className="bg-white">
          <ChevronDivider color="var(--bg-light)" />
        </div>
        <HomeArea />
        {/* bg-light -> white */}
        <div className="bg-(--bg-light)">
          <ChevronDivider color="#ffffff" />
        </div>
        <HomeCompany />
        {/* white -> bg-light */}
        <div className="bg-white">
          <ChevronDivider color="var(--bg-light)" />
        </div>
        <HomeReviews />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
