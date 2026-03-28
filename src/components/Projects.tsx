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
  image?: string;
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
              className="group rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary flex flex-col h-full"
            >
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden relative">
                  {project.image.endsWith('.svg') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-muted/50 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Folder className="w-14 h-14 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
              )}
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-foreground mb-1.5">{project.title}</h3>
                <p className="text-muted-foreground text-base line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5 flex-grow">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-mono border-border/60 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              
                <div className="flex gap-2 pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                      "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                        "bg-primary text-primary-foreground hover:bg-primary/80 glow-primary"
                      )}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                      "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                        "border border-border/60 bg-card/80 hover:border-primary/40 hover:text-primary"
                      )}
                    >
                      <FaGithub className="w-3 h-3" />
                      Code
                    </a>
                  )}
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
