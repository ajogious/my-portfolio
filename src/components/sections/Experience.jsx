"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { experiences } from "@/constants/data";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Professional Experience
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            My professional journey and the companies I&apos;ve worked with.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <StaggerChildren className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                className="flex gap-6 group relative"
              >
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  {index !== experiences.length - 1 && (
                    <motion.div
                      className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-2"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 pb-8"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-card border-2 rounded-xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:border-primary/20 relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-xl text-foreground">
                            {experience.position}
                          </h3>
                        </div>
                        <p className="text-primary font-medium text-lg mb-2">
                          {experience.company}
                        </p>

                        {/* Period and Location */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Remote / On-site</span>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <motion.div
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {experience.period.split(" - ")[1] === "Present"
                          ? "Current"
                          : `${
                              new Date().getFullYear() -
                              parseInt(experience.period.split(" - ")[1])
                            }+ years`}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {experience.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Award className="h-4 w-4" />
                        Technologies & Skills
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 cursor-pointer"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--primary-foreground))",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.1 + techIndex * 0.1 + 0.6,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Highlights */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-border/50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span>Led team of 5+ developers</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span>Improved performance by 40%</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span>Mentored junior developers</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span>Delivered 10+ projects</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Career Progress Summary */}
          <FadeUp delay={0.5}>
            <div className="mt-16 p-8 bg-card border-2 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
