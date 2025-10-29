import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero, About } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
