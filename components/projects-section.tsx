"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations with interactive charts and maps.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Chart.js", "Weather API", "Geolocation", "PWA"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work and personal projects</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
