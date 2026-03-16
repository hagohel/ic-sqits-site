import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, RefreshCw, FileCheck, AlertCircle, Scale } from "lucide-react"

const guidelines = [
  {
    icon: Eye,
    title: "Double-Blind Review",
    description: "Authors must remove identifying information from manuscripts and supplementary files, including metadata.",
  },
  {
    icon: Users,
    title: "3+ Expert Reviews",
    description: "Each submission receives at least three independent reviews. Initial reviews due by July 15, 2026.",
  },
  {
    icon: RefreshCw,
    title: "Revision Cycle",
    description: "Based on feedback, authors may submit a revised manuscript by Aug 30, 2026 for final evaluation.",
  },
  {
    icon: AlertCircle,
    title: "Originality Policy",
    description: "Submissions must be original, unpublished, and not under review elsewhere. Self-plagiarism may lead to rejection.",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description: "Conflicts are managed by Program Chairs. Conflicted reviewers will not be assigned to the paper.",
  },
  {
    icon: FileCheck,
    title: "Camera-Ready",
    description: "Accepted papers must meet final formatting requirements. Camera-ready versions due November 10, 2026.",
  },
]

export function CFPSection() {
  return (
    <section id="cfp" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Authors</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Call for Papers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Accepted papers will be published in Springer Nature. Follow stated formatting requirements and anonymization rules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidelines.map((item) => (
            <Card key={item.title} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Paper types: Full papers and short papers accepted. Page limits and template links will be posted as finalized.
        </p>
      </div>
    </section>
  )
}
