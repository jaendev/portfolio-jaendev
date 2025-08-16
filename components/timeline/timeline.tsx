'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  link?: string;
  technologies?: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: ".NET Developer",
    company: "MPM Software",
    date: "May 2025 - Present",
    description: "Development of enterprise applications using .NET Framework and ASP.NET Core. Implementation of REST APIs and SQL Server database integration. Collaborated effectively with senior developers and contributed to code reviews, demonstrating strong learning ability and attention to detail.",
    technologies: ["C#", ".NET", "ASP.NET Core", "SQL Server"]
  },
  {
    title: "Programming Student",
    company: "INS Pedralbes",
    date: "2023 - 2025",
    description: "I began my career in programming by learning Java as my first language. I later expanded my knowledge to web development with JavaScript, HTML, and CSS. I later expanded my knowledge to web development with Vue, Laravel, and TailwindCSS, showcasing adaptability and a genuine passion for continuous learning.",
    technologies: ["Java", "JavaScript", "HTML", "CSS", "Git"]
  }
];

const TimelineItem: React.FC<{ item: TimelineItem; index: number; isVisible: boolean }> = ({
  item,
  index,
  isVisible
}) => {
  return (
    <div
      className={`relative flex items-start gap-8 transition-all duration-700 delay-${index * 200} ${isVisible
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 translate-x-[-50px]'
        }`}
    >
      {/* Animeted point*/}
      <div className="relative z-10">
        <div className={`w-4 h-4 bg-primary rounded-full border-4 border-background transition-all duration-500 ${isVisible ? 'scale-100 shadow-lg shadow-primary/30' : 'scale-75'
          }`}>
          <div className="absolute inset-0 bg-primary/70 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 group">
        {/* Left side - Basci information */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {item.title}
          </h3>
          <h4 className="text-xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {item.company}
          </h4>
          <p className="text-muted-foreground font-medium">
            {item.date}
          </p>

          {/* Tecnologías */}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="text-xs border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Lado derecho - Descripción */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/70 transition-colors">
            {item.description}
          </p>

          {item.link && (
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 group/button">
              <span>Saber más</span>
              <ChevronRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
              <ExternalLink className="w-3 h-3 opacity-60" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('[data-index]');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='experience' className="container mx-auto px-4 md:px-6 py-16 md:py-20 bg-secondary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section title*/}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-border to-transparent"></div>

          {/* Timeline line */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} data-index={index}>
                <TimelineItem
                  item={item}
                  index={index}
                  isVisible={visibleItems[index] || false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
