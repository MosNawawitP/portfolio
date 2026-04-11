"use client";

import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { cn } from "@/lib/utils";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="flex items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-14">
          <p className="text-base font-mono text-primary tracking-wider uppercase mb-2">{"// "}projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>
        </AnimateOnScroll>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="fade-up" delay={index * 120}>
            <div
              className="group rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary flex flex-col h-full relative"
            >
              {/* Decorative gradient accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="20" r="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  <circle cx="80" cy="20" r="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  <circle cx="80" cy="20" r="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </svg>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                {/* Header: number + icon + links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-border/60 bg-card/80 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-200 text-muted-foreground"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-border/60 bg-card/80 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-200 text-muted-foreground"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech stack chips */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border/80 text-muted-foreground bg-muted/30 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
