"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Calendar, MapPin, ChevronDown, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperience[];
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  const [expandedId, setExpandedId] = useState<number | null>(experiences[0]?.id || null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="flex items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <p className="text-base font-mono text-primary tracking-wider uppercase mb-2">{"// "}career</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="relative pl-4 md:pl-0">
          {/* Vertical timeline line */}
          <div className="absolute left-[39px] md:left-12 top-4 bottom-4 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              
              // Parse bullets from description
              const responsibilities = exp.description
                .split('\n')
                .map(line => line.replace(/^•\s*/, '').trim())
                .filter(line => line.length > 0);

              const isCurrent = exp.period.toLowerCase().includes('present');

              return (
                <div key={exp.id} className="relative flex gap-6 md:gap-10">
                  {/* Timeline Icon */}
                  <div className="hidden md:flex flex-col items-center z-10 mt-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center bg-card transition-colors duration-300",
                      isExpanded ? "border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" : "border-border text-muted-foreground"
                    )}>
                      <Building2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <AnimateOnScroll animation="fade-up" delay={index * 100}>
                      <div 
                        className={cn(
                          "group rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-300 overflow-hidden",
                          isExpanded ? "border-primary/50 shadow-md shadow-primary/10" : "border-border/50 hover:border-primary/30"
                        )}
                      >
                        {/* Always visible header */}
                        <div 
                          className="p-6 cursor-pointer select-none"
                          onClick={() => toggleExpand(exp.id)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="flex items-center gap-2 text-primary font-medium">
                                <Building2 className="w-4 h-4 hidden sm:block" />
                                <span>{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="bg-secondary/50 text-xs font-normal">Full-time</Badge>
                                {isCurrent && (
                                  <Badge variant="outline" className="border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10 text-xs font-normal">Current</Badge>
                                )}
                              </div>
                            </div>
                            <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                              <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isExpanded && "rotate-180")} />
                            </button>
                          </div>

                          <h3 className="font-bold text-2xl mb-3 text-foreground">{exp.title}</h3>

                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-5 font-medium">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 opacity-70" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 opacity-70" />
                              {exp.location}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs font-mono border-border/80 text-foreground/80 bg-background/50">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Expandable Details */}
                        <div 
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="p-6 pt-0 border-t border-border/40 mt-2 hover:bg-muted/10 transition-colors">
                              <h4 className="text-xs font-semibold text-muted-foreground/80 tracking-wider uppercase mb-5 pt-4">
                                Key Responsibilities & Achievements
                              </h4>
                              <div className="space-y-4">
                                {responsibilities.map((item, i) => (
                                  <div key={i} className="flex gap-4 group/item">
                                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:border-primary transition-colors">
                                      {i + 1}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
