"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Moon, Sun, Monitor, Menu } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "@/constants/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const item of navigation) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      {/* ✅ Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left"
        style={{ scaleX }}
      />

      {/* ✅ Navigation */}
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="font-bold text-xl hover:text-primary transition-colors"
        >
          {personalInfo.name.split(" ")[0]}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Desktop Theme Toggle */}
          <div className="flex items-center gap-1 border rounded-lg p-1">
            {["light", "dark", "system"].map((mode) => {
              const Icon = {
                light: Sun,
                dark: Moon,
                system: Monitor,
              }[mode];

              return (
                <Button
                  key={mode}
                  variant={theme === mode ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTheme(mode)}
                  className="h-8 w-8 p-0"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Cycle Theme */}
          <Button variant="ghost" size="icon" onClick={cycleTheme}>
            <ThemeIcon className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="mt-2">
                <span>👩‍💻</span>
                {personalInfo.name.split(" ")[0]}
                <span>👩‍💻</span>
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-6">
                {navigation.map((item) => {
                  const id = item.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
