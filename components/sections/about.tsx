import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, Network } from "lucide-react"

const stats = [
  { value: "3+", label: "Expert Reviews per Paper" },
  { value: "2", label: "Days of Conference" },
  { value: "4", label: "Special Tracks" },
]

const reasons = [
  {
    icon: Shield,
    title: "Post-Quantum Threat",
    description: "Quantum algorithms threaten legacy public-key cryptography and long-term confidentiality.",
  },
  {
    icon: Cpu,
    title: "AI Acceleration",
    description: "AI accelerates both defense and adversarial capabilities — automation, scale, and sophistication.",
  },
  {
    icon: Network,
    title: "Systemic Resilience",
    description: "Trusted systems must withstand disruption, supply chain risks, and policy constraints.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About the Conference</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About IC-SQITS 2026</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Securing the post-quantum era while responsibly harnessing AI for resilient, trustworthy systems. 
            IC-SQITS bridges standards, engineering practice, and research to support deployment-ready pathways.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-20">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-card/50 border-border/50 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why this conference */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Why This Conference Now?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <Card key={reason.title} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <reason.icon className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
