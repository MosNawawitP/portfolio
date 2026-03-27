"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { User, Mail, Phone, MapPin } from "lucide-react";

interface PersonalInfo {
  email: string;
  phone: string;
  location: string;
  description: string;
}

interface AboutEducationProps {
  personalInfo: PersonalInfo;
}

export function AboutEducation({ personalInfo }: AboutEducationProps) {
  return (
    <section id="about" className="flex items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-14">
          <p className="text-base font-mono text-primary tracking-wider uppercase mb-2">{"// "}about me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-up" delay={200}>
        <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
          <CardContent className="p-8 md:p-10">
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-10">
              {personalInfo.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <Card className="bg-background/50 border-border/40 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Email</span>
                    <p className="font-medium text-foreground text-sm truncate">{personalInfo.email}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-border/40 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Phone</span>
                    <p className="font-medium text-foreground text-sm">{personalInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-border/40 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Location</span>
                    <p className="font-medium text-foreground text-sm">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
