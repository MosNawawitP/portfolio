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
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 pt-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="space-y-1 mb-3">
                <p className="text-base font-mono text-primary tracking-wider uppercase">Hello, I&apos;m</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-fira">
                <span className="text-gradient">{name}</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-mono mb-5">
                <span className="text-primary">&lt;</span>
                {title}
                <span className="text-primary"> /&gt;</span>
              </h2>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-primary/60" />
                <span className="text-base">{location}</span>
              </div>
              
              <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
                {description}
              </p>
            
              <div className="flex items-center justify-center md:justify-start gap-3">

                <a
                  href="/resume-file/Nawawit Pilanthanayothin - Resume.pdf"
                  download
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-base font-medium transition-all duration-300",
                    "bg-primary text-primary-foreground hover:glow-primary-lg hover:scale-105 shadow-lg shadow-primary/25"
                  )}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>

                <a
                  href={`mailto:${email}`}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-base font-medium transition-all duration-300",
                    "border border-primary text-primary bg-transparent hover:bg-primary/10 hover:scale-105"
                  )}
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
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
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
                      "border border-border bg-card/80 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-card hover:scale-105"
                    )}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 pt-10">
                {[
                  { value: "6+", label: "Years Experience" },
                  { value: "10+", label: "Projects Delivered" },
                  { value: "20+", label: "Technologies" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-3xl md:text-4xl font-bold text-gradient font-fira">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium mt-1 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Avatar with floating chips */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <AnimateOnScroll animation="zoom-in" duration={800}>
                <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
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
