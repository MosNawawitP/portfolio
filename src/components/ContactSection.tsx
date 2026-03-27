"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
}

const contactItems = (props: ContactSectionProps) => [
  {
    icon: Mail,
    label: "Email",
    value: props.email,
    href: `mailto:${props.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: props.phone,
    href: `tel:${props.phone.replace(/-/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: props.location,
  },
  ...(props.github
    ? [
        {
          icon: FaGithub,
          label: "GitHub",
          value: props.github.replace("https://github.com/", ""),
          href: props.github,
          external: true,
        },
      ]
    : []),
  ...(props.linkedin
    ? [
        {
          icon: FaLinkedin,
          label: "LinkedIn",
          value: props.linkedin.replace("https://linkedin.com/in/", ""),
          href: props.linkedin,
          external: true,
        },
      ]
    : []),
];

export function ContactSection({
  email,
  phone,
  location,
  github,
  linkedin,
}: ContactSectionProps) {
  const items = contactItems({ email, phone, location, github, linkedin });

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-6">
            <p className="text-base font-mono text-primary tracking-wider uppercase mb-2">
              {"// "}get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s Work Together
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time role, freelance project, or collaboration. Feel free to
            reach out through any of the channels below.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <AnimateOnScroll
              key={item.label}
              animation="fade-up"
              delay={100 * (index + 1)}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="block mt-1 font-medium text-foreground hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="mt-10 text-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-medium bg-primary text-primary-foreground hover:scale-105 hover:glow-primary-lg transition-all duration-300 shadow-lg shadow-primary/25"
            >
              <Send className="w-4 h-4" />
              Send Me a Message
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
