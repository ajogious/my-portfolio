"use client";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend",
      description: "React, Next.js, TypeScript",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      icon: Database,
      title: "Backend",
      description: "Node.js, Python, Databases",
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Responsive Design",
      items: ["Figma", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Cross-platform Development",
      items: ["React Native", "Flutter", "Expo"],
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Passionate developer with X years of experience creating digital
            solutions that make a difference.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <FadeUp>
              <h3 className="text-2xl font-semibold">My Journey</h3>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                I started my programming journey in 20XX and have been
                passionate about creating amazing web experiences ever since. I
                love turning complex problems into simple, beautiful designs.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or enjoying
                the great outdoors.
              </p>
            </FadeUp>

            {/* Additional personal details */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Location
                  </h4>
                  <p className="text-foreground">Your City, Country</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Experience
                  </h4>
                  <p className="text-foreground">X+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Education
                  </h4>
                  <p className="text-foreground">Your Degree</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Availability
                  </h4>
                  <p className="text-foreground">Open to Opportunities</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Skills Grid */}
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <motion.span
                          key={item}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        {/* Additional Skills Section */}
        <FadeUp delay={0.4}>
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Technologies I Work With
            </h3>
            <StaggerChildren className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "Framer Motion",
                "Git",
                "AWS",
                "Docker",
                "Figma",
                "Jest",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                      },
                    },
                  }}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium border"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
