import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Temporary content to test layout */}
      <div className="pt-16">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">Home Section</h1>
            <p className="text-muted-foreground">
              Scroll down to test navigation
            </p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-muted/50"
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Projects Section</h2>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center bg-muted/50"
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Section</h2>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
