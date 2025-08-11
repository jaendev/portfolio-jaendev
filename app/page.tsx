"use client";

import { useState, useEffect } from "react";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero/About Section */}
      <section className="container mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="felx inline-flex">
            <div className="flex gap-4 mb-4">
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
          </div>
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-2">
            Hello! I'm Brian
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            Web developer creating digital solutions from Barcelona, Spain 🇪🇸.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=infobrian03@gmail.com", "_blank")} >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>

            <Button
              size="lg"
              className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                onClick={() => window.open('https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252', '_blank')} rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                onClick={() => window.open('https://github.com/jaendev', '_blank')} rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 md:px-6 py-16 md:py-20 bg-secondary/50 backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Technologies & Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">Frontend</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {frontend && frontend?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">Backend</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {backend && backend?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">UI Frameworks</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {ui_frameworks && ui_frameworks?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">DevOps</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {devops && devops?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">Mobile</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {mobile && mobile?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-2 border-primary/10 p-4 md:p-6 rounded-lg">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4 text-center">Others</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {others && others?.map((skill, skillId) => (
                <Badge key={skillId} className="text-sm py-1 px-3 bg-primary/50 hover:bg-primary/70 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <Card className="hover:shadow-primary/10 transition-all border-primary/10 h-full flex flex-col">
              <CardContent className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>
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
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <Timeline />

      {/* Contact Section */}
      <section id="about" className="container mx-auto mb-8 px-4 md:px-6 py-16 md:py-20 ">
        <div className="md:grid grid-cols-2 gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About me</h2>
            <div className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 [&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
              <p>
                My name is Brian. <strong>I started programming two years ago with Java</strong>, and since then, every new challenge I've solved has only further fueled my passion for this vast world.
              </p>
              <p>
                At the moment, I've developed projects such as Syncblend, Triplan, and ProfeNet, designed to improve navigation and, most importantly, <strong> solve real-world customer problems</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/BrianJaen.png"
              alt="Brian Jaen"
              className="border border-secondary rounded-lg shadow-lg object-cover rotate-3 p-3 hover:rotate-0 hover:scale-110 transition-all duration-300"
              width={240}
              height={180}
            />
          </div>
        </div>
      </section>
    </main>
  );
}