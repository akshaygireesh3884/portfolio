import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import BlogSection from "@/components/blog-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}
