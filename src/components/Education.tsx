"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

interface SeniorProject {
  title: string;
  description: string;
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  relevantCoursework?: string;
  seniorProject?: SeniorProject;
}

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Education
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
        </AnimateOnScroll>

        {education.map((edu) => (
          <AnimateOnScroll key={edu.id} animation="fade-up" delay={200}>
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Left - University Info */}
                <div className="md:w-[280px] shrink-0 bg-gradient-to-br from-primary/5 to-transparent p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border/30">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-card shadow-sm flex items-center justify-center mb-5">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {edu.institution}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.year}
                  </div>
                </div>

                {/* Right - Degree Details */}
                <div className="flex-1 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="w-12 h-1 bg-primary mt-3 mb-6 rounded-full" />

                  {edu.relevantCoursework && (
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        <BookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.relevantCoursework}
                      </p>
                    </div>
                  )}

                  {edu.seniorProject && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        <BookOpen className="w-4 h-4" />
                        Thesis
                      </h4>
                      <blockquote className="border-l-3 border-primary/40 pl-4 py-1">
                        <p className="font-medium text-foreground mb-1">
                          {edu.seniorProject.title}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {edu.seniorProject.description}
                        </p>
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
