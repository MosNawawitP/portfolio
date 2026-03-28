"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Star } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  expert?: boolean;
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
        
        {(() => {
          const cols = { base: 3, sm: 4, md: 6 };
          const maxCols = cols.md;
          const fullRows = Math.floor(skills.length / maxCols) * maxCols;
          const gridItems = skills.slice(0, fullRows);
          const remainingItems = skills.slice(fullRows);

          const renderSkill = (skill: Skill, index: number) => {
            const isDarkIcon = ['#000000', '#111111', '#1a1a1a', '#231F20', '#181717'].includes(skill.color);
            return (
              <AnimateOnScroll key={skill.name} animation="zoom-in" delay={index * 80}>
              <div
                className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:glow-primary"
              >
                {skill.expert && (
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shadow-md shadow-amber-500/30">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                )}
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon?.startsWith('/') ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 transition-all duration-300"
                    />
                  ) : skill.icon ? (
                    <i
                      className={`${skill.icon} text-[3rem] transition-all duration-300 ${isDarkIcon ? 'dark:invert' : ''}`}
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
          };

          return (
            <>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {gridItems.map((skill, index) => renderSkill(skill, index))}
              </div>
              {remainingItems.length > 0 && (
                <div className="flex justify-center gap-4 mt-4">
                  {remainingItems.map((skill, index) => (
                    <div key={skill.name} className="w-[calc(33.333%-12px)] sm:w-[calc(25%-12px)] md:w-[calc(16.666%-14px)]">
                      {renderSkill(skill, fullRows + index)}
                    </div>
                  ))}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
}
