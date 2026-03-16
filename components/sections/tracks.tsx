import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Network, Scale } from "lucide-react"

const mainTopics = [
  "Post-Quantum Cryptography (PQC)",
  "Quantum Key Distribution (QKD)",
  "AI-Driven Cybersecurity & Threat Detection",
  "Trusted AI & Secure Machine Learning",
  "Hybrid Quantum-Classical Secure Systems",
  "Critical Infrastructure Protection",
  "Privacy-Preserving AI & Cryptography",
  "Secure Cloud & Distributed Systems",
  "Governance, Policy & Ethical AI",
  "Quantum-Safe Migration Strategies",
]

const specialTracks = [
  {
    icon: Shield,
    title: "Quantum-Safe Cryptography & Standards",
    description: "Exploring standardization efforts and deployment of post-quantum cryptographic primitives.",
  },
  {
    icon: Brain,
    title: "AI-Driven Cyber Defense",
    description: "Leveraging artificial intelligence for autonomous threat detection and response.",
  },
  {
    icon: Network,
    title: "Secure Quantum Networks",
    description: "Building resilient quantum communication infrastructure and protocols.",
  },
  {
    icon: Scale,
    title: "Trusted AI & Algorithmic Governance",
    description: "Ensuring accountability, transparency, and trust in AI-powered systems.",
  },
]

export function TracksSection() {
  return (
    <section id="tracks" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Research Areas</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Tracks & Topics</h2>
          <p className="text-muted-foreground">
            We invite original, high-quality submissions — full and short papers.
          </p>
        </div>

        {/* Main topics as badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {mainTopics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
            >
              {topic}
            </Badge>
          ))}
        </div>

        {/* Special tracks */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Special Tracks</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specialTracks.map((track) => (
              <Card key={track.title} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <track.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{track.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Track chairs and additional details will be announced as confirmations are completed.
          </p>
        </div>
      </div>
    </section>
  )
}
