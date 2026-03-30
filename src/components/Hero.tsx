"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Code2, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const floatingChips = [
  { label: "Node.js", icon: "devicon-nodejs-plain", color: "#539E43", position: "top-4 -left-4" },
  { label: "PHP", icon: "devicon-php-plain", color: "#777BB4", position: "top-4 -right-4" },
  { label: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6", position: "bottom-16 -left-8" },
  { label: "Go", icon: "devicon-go-original-wordmark", color: "#00ADD8", position: "bottom-16 -right-8" },
  { label: "NestJS", icon: "devicon-nestjs-original", color: "#E0234E", position: "-bottom-2 left-1/2 -translate-x-1/2" },
];

interface HeroProps {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
}

export function Hero({
  name,
  title,
  description,
  avatarUrl,
  location,
  email,
  github,
  linkedin,
}: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center items-stretch gap-6 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <AnimateOnScroll animation="fade-up" delay={200} className="flex flex-col items-center lg:items-start w-full">
              <div className="space-y-1 mb-3 w-full">
                <p className="text-base font-mono text-primary tracking-wider uppercase">Hello, I&apos;m</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 tracking-tight font-fira w-full">
                <span className="text-gradient">{name}</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono mb-4 sm:mb-5 w-full">
                <span className="text-primary">&lt;</span>
                {title}
                <span className="text-primary"> /&gt;</span>
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4 sm:mb-6 w-full">
                <MapPin className="w-4 h-4 text-primary/60" />
                <span className="text-base">{location}</span>
              </div>
              
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                {description}
              </p>
            
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="/resume-file/Nawawit Pilanthanayothin - Resume.pdf"
                    download
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300",
                      "bg-primary text-primary-foreground hover:glow-primary-lg hover:scale-105 shadow-lg shadow-primary/25"
                    )}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300",
                      "border border-primary text-primary bg-transparent hover:bg-primary/10 hover:scale-105"
                    )}
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>

                  {/* Social icons inline on sm+ */}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hidden sm:inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-200",
                        "border border-border bg-card/80 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-card hover:scale-105"
                      )}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}

                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hidden sm:inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-200",
                        "border border-border bg-card/80 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-card hover:scale-105"
                      )}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Social icons separate row on mobile */}
                {(github || linkedin) && (
                  <div className="flex sm:hidden items-center gap-3">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                          "border border-border bg-card/80 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-card hover:scale-105"
                        )}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                          "border border-border bg-card/80 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-card hover:scale-105"
                        )}
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-5 sm:pt-6 lg:pt-8 xl:pt-10 w-full">
                {[
                  { value: "6+", label: "Years Experience" },
                  { value: "10+", label: "Projects Delivered" },
                  { value: "20+", label: "Technologies" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gradient font-fira">{stat.value}</p>
                    <p className="text-xs lg:text-sm text-muted-foreground font-medium mt-1 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Avatar with floating chips */}
          <div className="flex-shrink-0 self-center order-1 lg:order-2">
            <AnimateOnScroll animation="zoom-in" duration={800}>
                <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem]">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-primary/10" />

                {/* Avatar */}
                <div className="absolute inset-6 flex items-center justify-center">
                  <Avatar className="w-full h-full border-2 border-primary/30 glow-primary">
                    <AvatarImage src={avatarUrl} alt={name} />
                    <AvatarFallback className="text-5xl bg-primary/20 text-primary font-mono">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-card border border-border rounded-full p-1.5">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Floating tech chips */}
                {floatingChips.map((chip, index) => (
                  <div
                    key={chip.label}
                    className={cn(
                      "absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                      "bg-card/90 backdrop-blur-sm border border-primary/30 shadow-lg dark:shadow-primary/10",
                      "text-xs font-medium text-foreground",
                      "animate-[float_3s_ease-in-out_infinite]",
                      chip.position
                    )}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <i className={chip.icon} style={{ color: chip.color, fontSize: "14px" }} />
                    {chip.label}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>

      </div>
    </section>
  );
}
