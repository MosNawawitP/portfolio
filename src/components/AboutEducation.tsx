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
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {personalInfo.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Email</span>
                  <p className="font-medium text-foreground text-sm">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Phone</span>
                  <p className="font-medium text-foreground text-sm">{personalInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Location</span>
                  <p className="font-medium text-foreground text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
