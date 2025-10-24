import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ajoge<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop  nav & Hire me*/}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire Me!</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
