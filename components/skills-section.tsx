"use client"

import { useState, useEffect } from "react"
import { Code, Server, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "REST APIs", "Express.js"],
  },
  {
    category: "Tools & Platforms",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Git & GitHub", "Jenkins", "Postman", "VS Code"],
  },
]

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I use to bring products to life</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
