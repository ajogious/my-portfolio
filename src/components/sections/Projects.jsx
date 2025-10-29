"use client";
import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/constants/data";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  // Get all unique technologies from projects
  const technologies = [...new Set(projects.flatMap((p) => p.technologies))];

  // Filter projects based on selected technology
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  // Project icons for different project types
  const projectIcons = {
    "E-Commerce Platform": "🛒",
    "Task Management App": "✅",
    "Weather Dashboard": "🌤️",
    "Social Media Analytics": "📊",
    "Mobile Fitness App": "💪",
    "Portfolio Website": "💼",
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured Projects
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </FadeUp>

        {/* Filter Buttons */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className="transition-all duration-300"
            >
              All
              <span className="ml-2 px-2 py-1 bg-background text-foreground rounded-full text-xs">
                {projects.length}
              </span>
            </Button>
            {technologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tech)}
                className="transition-all duration-300"
              >
                {tech}
              </Button>
            ))}
          </div>
        </FadeUp>

        {/* Projects Count */}
        <FadeUp delay={0.4}>
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
              {filter !== "all" && ` filtered by ${filter}`}
            </p>
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-2xl border-2 group-hover:border-primary/20">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.span
                        className="text-5xl"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {projectIcons[project.title] || "🚀"}
                      </motion.span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="default"
                          className="gap-1 bg-primary text-primary-foreground"
                        >
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                      whileHover={{ opacity: 1 }}
                    >
                      <Button size="sm" className="gap-2" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-background/80"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                            onClick={() => setFilter(tech)}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-xs group/details"
                      >
                        View Details
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/details:translate-x-1" />
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <FadeUp>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected filter. Try a different
                technology.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setFilter("all")}
              >
                Show All Projects
              </Button>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
