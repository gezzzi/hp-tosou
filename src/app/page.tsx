import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeTroubles from "@/components/HomeTroubles";
import ChevronDivider from "@/components/ChevronDivider";
import HomeServices from "@/components/HomeServices";
import HomeReasons from "@/components/HomeReasons";
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
        {/* bg-light -> white */}
        <div className="bg-(--bg-light)">
          <ChevronDivider color="#ffffff" />
        </div>
        <HomeServices />
        {/* white -> bg-light */}
        <div className="bg-white">
          <ChevronDivider color="var(--bg-light)" />
        </div>
        <HomeReasons />
        {/* bg-light -> white (アクセントとして白を挿入) */}
        <div className="bg-(--bg-light)">
          <ChevronDivider color="#ffffff" />
        </div>
        <HomeReviews />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
