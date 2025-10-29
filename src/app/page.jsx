import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero, About, Projects } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
