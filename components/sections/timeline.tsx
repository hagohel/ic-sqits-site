import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const dates = [
  { date: "May 15, 2026", event: "Paper Submission Deadline" },
  { date: "July 15, 2026", event: "First 3 Double-Blind Reviews Due" },
  { date: "August 30, 2026", event: "Revised Paper Due" },
  { date: "October 1, 2026", event: "Notification of Acceptance" },
  { date: "November 10, 2026", event: "Camera-Ready Paper Due" },
  { date: "December 10-11, 2026", event: "Conference Days" },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Timeline</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Important Dates</h2>
          <p className="text-muted-foreground">
            Dates may be adjusted slightly based on proceedings timelines.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <div key={item.event} className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-[22px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />
                
                {/* Content card */}
                <Card className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] bg-card/50 border-border/50 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-semibold">{item.date}</span>
                    </div>
                    <p className="text-foreground font-medium">{item.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
