import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeReasons from "@/components/HomeReasons";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <HomeServices />
        <HomeReasons />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
