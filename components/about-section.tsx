"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart, Coffee } from "lucide-react"

export default function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background and development philosophy</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/file_00000000e5b061f792944e488c992abb.png?height=800&width=600" alt="Akshay T G" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in animate-delay-200">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate frontend developer with over 5 years of experience building modern web applications. I
                specialize in React and Next.js, creating responsive, accessible, and performant user interfaces.
              </p>
              <p className="text-muted-foreground">
                My journey in web development began during my computer science studies, where I discovered my passion
                for creating intuitive user experiences. Since then, I've worked with startups and established companies
                to bring their digital products to life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">User-Centered</h4>
                      <p className="text-sm text-muted-foreground">
                        I believe in creating applications that prioritize user needs and experiences.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Clean Code</h4>
                      <p className="text-sm text-muted-foreground">
                        I write maintainable, well-documented code that's easy to understand and extend.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">React Developer</h4>
                    <p className="text-sm text-muted-foreground">Tata consultancy services . • 2021 - Present</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">B-tech in Electronics and communication engineering</h4>
                    <p className="text-sm text-muted-foreground">Kerala technological university • 2015 - 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
