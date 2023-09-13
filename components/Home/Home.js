import Category from "./Category";
import Hero from "./Hero";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import PromoSection from "./PromoSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <HomeProductsSection />
      <MiniBanner />
      <PromoSection />
    </div>
  );
}
