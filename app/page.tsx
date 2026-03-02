"use client";

import { useState, useEffect } from "react";

import { ExternalLink, Github as GithubIcon, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [working] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const handleClickMobile = () => {
    if (isMobile) {
      window.open("mailto:infobrian03@gmail.com", "_blank")
    }
  }

  const handleClickDesktop = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=infobrian03@gmail.com", "_blank")
  }

  const projects = [
    {
      title: "Syncblend App",
      description: "SyncBlend is a web platform designed specifically for high schools, with an innovative approach to managing 14-18 year old students.",
      tags: ["Vue.js", "NodeJs", "Laravel", "Tailwind CSS", "Python"],
      link: "#",
      github: "https://github.com/jaendev/syncblendApp"
    },
    {
      title: "Dungeon Game",
      description: "Dungeon Crawler is a 2D adventure game in Phaser, where you explore dungeons, face enemies and collect treasures.",
      tags: ["TypeScript", "Phaser.js", "HTML", "CSS"],
      link: "#",
      github: "https://github.com/jaendev/dungeonGame"
    },
    {
      title: "Profenet",
      description: "ProfeNet is an educational platform that facilitates the management and visualization of teachers' courses. It allows teachers to view their assigned courses and manage them efficiently, offering an intuitive and modern interface.",
      tags: ["NodeJs", "FastAPI", "NextJS", "Moodle"],
      link: "#",
      github: "https://github.com/jaendev/profenet-portal"
    },
    {
      title: "Triplan",
      description: "TriPlan is a personalized travel planning tool that allows users to customize their trips by choosing their destination, duration, trip type, and budget, providing optimized plans based on their preferences.",
      tags: ["NodeJs", "Laravel", "NuxtJS", "Gemini"],
      link: "#",
      github: "https://github.com/jaendev/triplan"
    },
    {
      title: "Capture Now",
      description: "Capture Now is a sophisticated note-taking application built with modern web technologies, demonstrating excellent full-stack development skills and attention to user experience design.",
      tags: ["NextJS", "Next API", "DrizzleORM", "Tailwind CSS"],
      link: "https://capture-now.brianjaen.com/",
      github: "https://github.com/jaendev/capture-now"
    },
  ];

  const frontend = [
    "HTML",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "VUE",
    "Nuxt",
    "Astro"
  ]

  const ui_frameworks = [
    "Tailwind CSS",
    "SASS",
    "Material UI",
    "CSS",
    "Styled Components"
  ]

  const backend = [
    "NodeJs",
    "Laravel",
    "PHP",
    "Python",
    "Java",
    "Mysql",
    "MongoDB",
    "C#",
    "Express.js",
    ".NET",
    "ASP .NET Core",
  ]

  const devops = [
    "CI/CD",
    "GitHub Actions",
    "Docker",
    "Nginx",
    "Apache",
    "Deployment Automation",
    "Clouding",
  ];

  const mobile = [
    "React Native",
    "Android Studio",
    "Expo (React Native)",
    "Java (Android)",
    "React Navigation",
    "SQLite",
  ];

  const others = [
    "Git",
    "Postman",
    "Yaak",
    "Docker Compose",
    "npm",
    "pnpm",
    "ESLint",
    "Prettier",
    "Cypress",
    "VS Code",
    "Linux",
    "Jest",
    "Thunder Client",
  ]

  const skillTabs = [
    { value: "frontend", label: "Frontend", skills: frontend },
    { value: "backend", label: "Backend", skills: backend },
    { value: "ui", label: "UI Frameworks", skills: ui_frameworks },
    { value: "devops", label: "DevOps", skills: devops },
    { value: "mobile", label: "Mobile", skills: mobile },
    { value: "others", label: "Others", skills: others },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center glass-hero p-8 md:p-12">
          <div className="flex justify-center mb-6">
            {working ? (
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252" target="_blank">
                  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#facc15_0%,#eab308_50%,#facc15_100%)]"></span>
                    <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-yellow-800 bg-yellow-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                      .NET Developer
                    </div>
                  </span>
                </a>
              </div>
            ) : (
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252" target="_blank">
                  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14b8a6_0%,#0f766e_50%,#14b8a6_100%)]"></span>
                    <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-blue-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">Available to work</div>
                  </span>
                </a>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Hi! I'm Brian
            </h1>
            <span className="text-2xl md:text-4xl lg:text-4xl animate-wave">
              👋🏻
            </span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 px-4">
            Backend developer with full-stack capabilities, based in Barcelona, Spain 🇪🇸.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=infobrian03@gmail.com", "_blank")}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>

            <Button
              size="lg"
              className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary/90"
              asChild
            >
              <a onClick={() => window.open('https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252', '_blank')} rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary/90"
              asChild
            >
              <a onClick={() => window.open('https://github.com/jaendev', '_blank')} rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">About me</h2>
          <div className="glass-card p-6 md:p-10">
            <div className="text-sm md:text-base text-muted-foreground [&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty">
              <p>
                I'm Brian, a developer from Barcelona with <strong>2 years of experience</strong> who truly enjoys building things that contribute to knowledge and improvement. What started as curiosity about Java turned into a passion for crafting systems that solve real problems.
              </p>
              <p>
                I specialize in backend development with <strong>.NET (ASP.NET Core)</strong>, always with clean architecture and well-structured APIs in mind. Currently looking for opportunities where I can <strong>contribute to real products and keep growing</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Timeline />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-4 md:p-6 flex flex-col h-full"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-primary/20 bg-primary/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/20 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
                {project.link === '#' ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    onClick={isMobile ? handleClickMobile : handleClickDesktop}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="glass-section py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Technologies & Skills</h2>
          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="flex flex-wrap h-auto gap-1 justify-center mb-8 bg-transparent border border-primary/10 p-1.5 rounded-lg">
              {skillTabs.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary rounded-md px-4 py-2"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillTabs.map(({ value, label, skills }) => (
              <TabsContent key={value} value={value}>
                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-6 text-center">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map((skill, skillId) => (
                      <Badge
                        key={skillId}
                        className="text-sm py-1 px-3 bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
