"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-8 sm:w-24 rounded-full bg-muted animate-pulse" />;
  }

  const currentTheme = themes.find((t) => t.value === theme) ?? themes[2];
  const CurrentIcon = currentTheme.icon;

  return (
    <>
      {/* Desktop: inline toggle */}
      <div className="hidden sm:flex items-center gap-0.5 rounded-full border border-border/60 bg-muted/50 p-0.5">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={cn(
              "rounded-full p-1.5 transition-all duration-200",
              theme === value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label={label}
          >
            <Icon className="w-3.5 h-3.5" />
          </button>
        ))}
      </div>

      {/* Mobile: dropdown */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2 py-1.5 transition-colors hover:bg-accent"
          aria-label="Toggle theme"
        >
          <span className={cn("transition-transform duration-300", dropdownOpen ? "rotate-[360deg]" : "rotate-0")}>
            <CurrentIcon className="w-3.5 h-3.5" />
          </span>
          <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-300", dropdownOpen && "rotate-180")} />
        </button>
        <div
          className={cn(
            "absolute right-0 top-full mt-1.5 w-32 rounded-lg border border-border bg-card shadow-lg py-1 z-50 overflow-hidden transition-all duration-200 origin-top",
            dropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}
        >
          {themes.map(({ value, icon: Icon, label }, index) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value);
                setDropdownOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full px-3 py-2 text-sm transition-all duration-200",
                dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
                theme === value
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
              style={{ transitionDelay: dropdownOpen ? `${index * 40 + 50}ms` : "0ms" }}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
