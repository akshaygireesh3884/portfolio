"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="section-padding flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
            Building modern web experiences with <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Next.js</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-100">
          I craft responsive, performant, and accessible web applications that deliver exceptional user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-200">
          <Button asChild size="lg" className="rounded-full">
            <Link href="#contact">
              Let's work together <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="#projects">View my work</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in animate-delay-300">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
