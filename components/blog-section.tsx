"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Performant React Applications",
    excerpt: "Learn how to optimize your React applications for better performance and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "React",
    url: "#",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    excerpt: "Explore the new features and improvements in Next.js 14 and how to use them in your projects.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 22, 2023",
    readTime: "10 min read",
    category: "Next.js",
    url: "#",
  },
  {
    id: 3,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and improve development speed.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 10, 2023",
    readTime: "6 min read",
    category: "CSS",
    url: "#",
  },
]

export default function BlogSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">Thoughts, tutorials, and insights on web development</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0">
                  <Link href={post.url}>
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <Link href="#">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
