import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ticket, Plane } from "lucide-react"

export function RegistrationSection() {
  return (
    <section id="registration" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Attend</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Registration</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Ticket className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Registration</h4>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">Coming Soon</Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Registration details and fees will be posted here. Please check back soon.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Plane className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Travel & Lodging</h4>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">Coming Soon</Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you need an invitation letter for visa, contact the organizers using the form below.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
