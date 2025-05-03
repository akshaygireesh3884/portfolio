"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export default function ResumeSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'downloaded-resume.pdf';
    link.click();
  };
  if (!mounted) return null

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">Download my resume or view my professional experience</p>

        <div className="flex flex-col items-center justify-center mt-12 animate-fade-in">
          <Card className="max-w-md w-full shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Akshay T G - Frontend Developer</h3>
              <p className="text-center text-muted-foreground mb-6">
                ATS-friendly resume highlighting my skills, experience, and projects
              </p>
              <Button className="w-full" size="lg" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
