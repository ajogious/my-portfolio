import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
