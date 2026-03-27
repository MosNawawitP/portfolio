"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="flex items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-14">
          <p className="text-base font-mono text-primary tracking-wider uppercase mb-2">{"// "}tech stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            return (
              <AnimateOnScroll key={skill.name} animation="zoom-in" delay={index * 80}>
              <div
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:glow-primary"
              >
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon ? (
                    <i
                      className={`${skill.icon} text-[3rem] transition-all duration-300`}
                      style={{ color: skill.color }}
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs font-mono"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {skill.name}
                </span>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
