"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, CheckCircle, MapPin } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Top badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 text-primary">
            10-11 DEC 2026
          </Badge>
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-border text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            SAN ANTONIO, TX
          </Badge>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
          International Conference on
          <br />
          <span className="text-primary">Secure Quantum Intelligence</span>
          <br />
          & Trusted Systems
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          A premier interdisciplinary platform at the convergence of quantum computing, AI-driven defense, 
          and systemic trust — shaping the next generation of secure, intelligent technologies.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium"
            onClick={() => scrollToSection("cfp")}
          >
            Call for Papers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-base font-medium"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>

        {/* Springer Nature badge */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 bg-white/5 border border-border rounded-lg px-6 py-4">
            <span className="text-sm text-muted-foreground">Published in</span>
            <img 
              src="/images/springer-nature-logo.png" 
              alt="Springer Nature" 
              className="h-10 object-contain"
            />
            <span className="font-medium text-foreground">Proceedings</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Double-Blind Review</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>UTSA Downtown Campus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
