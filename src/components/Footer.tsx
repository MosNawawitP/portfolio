"use client";

import { Heart, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  name: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

export function Footer({ name, email, github, linkedin }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-base text-gradient font-bold">{name}</span>
            </div>
            <p className="text-muted-foreground text-sm font-mono">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-xl border border-border/50 bg-card/80 text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border/50 bg-card/80 text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border/50 bg-card/80 text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 font-mono">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using Next.js & shadcn/ui
          </p>
          <p className="text-muted-foreground/50 text-sm mt-2 font-mono">
            © {currentYear} {name}
          </p>
        </div>
      </div>
    </footer>
  );
}
