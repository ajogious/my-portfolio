"use client";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Typewriter } from "@/components/animations/Typewriter";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <FadeUp>
              <p className="text-lg text-primary font-medium">
                Hello, I&apos;m
              </p>
            </FadeUp>

            <Typewriter
              text={personalInfo.name}
              className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            />

            <FadeUp delay={0.2}>
              <h2 className="text-2xl md:text-4xl text-muted-foreground font-semibold">
                {personalInfo.title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                {personalInfo.bio}
              </p>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Image/Graphic */}
          <FadeUp delay={0.8}>
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-72 h-72 bg-background rounded-full flex items-center justify-center shadow-2xl border">
                  <motion.div
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💻
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <FadeUp delay={1.2}>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm font-medium">Discover My Work</span>
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
