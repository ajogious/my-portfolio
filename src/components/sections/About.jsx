"use client";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Users,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, skills } from "@/constants/data";

export default function About() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      items:
        skills.technical.find((s) => s.category === "Frontend")?.items || [],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Server-side development and data management",
      items:
        skills.technical
          .find((s) => s.category === "Backend")
          ?.items.concat(
            skills.technical.find((s) => s.category === "Database")?.items || []
          ) || [],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Deployment, infrastructure, and tools",
      items:
        skills.technical.find((s) => s.category === "DevOps & Tools")?.items ||
        [],
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Collaboration and project management",
      items: skills.soft,
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
            {personalInfo.bio}
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
                {personalInfo.about.intro}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.about.passion}
              </p>
            </FadeUp>

            {/* Personal details */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Location
                  </h4>
                  <p className="text-foreground">{personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Experience
                  </h4>
                  <p className="text-foreground">4+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Education
                  </h4>
                  <p className="text-foreground">
                    {personalInfo.about.education}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Availability
                  </h4>
                  <p className="text-foreground">
                    {personalInfo.about.availability}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Skills Grid */}
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((skill, index) => (
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
      </div>
    </section>
  );
}
