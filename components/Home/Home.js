import Category from "./Category";
import Hero from "./Hero";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import PromoSection from "./PromoSection";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <Category />
      <HomeProductsSection products={products} />
      <MiniBanner />
      <PromoSection />
    </div>
  );
}
