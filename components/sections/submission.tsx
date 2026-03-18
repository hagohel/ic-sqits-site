"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, EyeOff, ExternalLink, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Prepare Manuscript",
    description: "Prepare an anonymized manuscript compliant with the final formatting instructions.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Submit via Meteor",
    description: "Submit your manuscript via the Meteor portal at meteor.springer.com/IC-SQITS.",
  },
  {
    number: "03",
    icon: EyeOff,
    title: "Anonymize Everything",
    description: "Ensure all figures, appendices, and supplementary materials are fully anonymized.",
  },
]

export function SubmissionSection() {
  return (
    <section id="submission" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Submit Your Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Submission</h2>
        </div>

        {/* Portal status - moved to top */}
        <Card className="bg-card/50 border-border/50 mb-12">
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Meteor Portal Status</h3>
                  <Badge className="bg-primary/20 text-primary border-0">Now Open</Badge>
                </div>
                <p className="text-muted-foreground max-w-lg">
                  The submission portal is live. Submit your manuscript via Meteor — Springer Nature&apos;s official submission system.
                </p>
              </div>
              <Button size="lg" className="shrink-0" asChild>
                <a href="https://meteor.springer.com/IC-SQITS" target="_blank" rel="noopener noreferrer">
                  Submit via Meteor
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50 mb-12">
          <CardContent className="py-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Help Guide for Authors (Meteor Portal)
            </h3>
            <p className="text-muted-foreground mb-4">
              Step-by-step instructions for submitting your manuscript via the Springer Meteor system.
            </p>
            <Button asChild>
              <a href="/docs/Help_Guide_for_Author.pdf" target="_blank" rel="noopener noreferrer">
                View Help Guide
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-muted-foreground mb-4">
              Use link meteor.springer.com/IC-SQITS to register and follow the steps.
            </p>
          </CardContent>
        </Card>
        <p className="text-center text-muted-foreground mb-12">
          Submit your manuscript at meteor.springer.com/IC-SQITS
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <step.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
