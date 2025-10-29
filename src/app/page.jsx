import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Temporary About Section for scroll testing */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-muted/30"
      >
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">About Section</h2>
          <p className="text-muted-foreground">
            This section is coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
