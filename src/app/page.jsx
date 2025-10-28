"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  FadeUp,
  StaggerChildren,
  Typewriter,
  FadeIn,
  ScaleIn,
} from "@/components/animations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Test FadeUp */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container text-center">
            <FadeUp>
              <h1 className="text-4xl font-bold mb-4">FadeUp Animation</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground">
                This text fades up with a delay
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Test Typewriter */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-muted/50"
        >
          <div className="container text-center">
            <Typewriter
              text="Typewriter Effect"
              className="text-3xl font-bold mb-4"
            />
            <FadeIn delay={1}>
              <p className="text-muted-foreground">
                This appears after the typewriter finishes
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Test StaggerChildren */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                StaggerChildren Animation
              </h2>
            </div>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="p-6 border rounded-lg text-center"
                >
                  <h3 className="font-semibold mb-2">Item {item}</h3>
                  <p className="text-sm text-muted-foreground">
                    This appears with stagger
                  </p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Test ScaleIn */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center bg-muted/50"
        >
          <div className="container text-center">
            <ScaleIn>
              <div className="inline-block p-8 border rounded-lg">
                <h2 className="text-3xl font-bold mb-4">ScaleIn Animation</h2>
                <p className="text-muted-foreground">
                  This scales in from 80% to 100%
                </p>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* Test Multiple Animations */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container text-center">
            <FadeUp>
              <h2 className="text-3xl font-bold mb-4">Combined Animations</h2>
            </FadeUp>
            <StaggerChildren className="flex justify-center gap-4 mt-8">
              {["Fade", "Scale", "Slide"].map((effect) => (
                <motion.div
                  key={effect}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 border rounded-lg cursor-pointer"
                >
                  {effect}
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
