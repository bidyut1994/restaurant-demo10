import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import SpecialDishes from "@/components/SpecialDishes";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <SpecialDishes />
        <Menu />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
