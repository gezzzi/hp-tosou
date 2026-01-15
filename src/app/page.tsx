import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeTroubles from "@/components/HomeTroubles";
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
        <HomeServices />
        <HomeReasons />
        <HomeReviews />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
