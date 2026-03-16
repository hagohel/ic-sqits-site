import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { TimelineSection } from "@/components/sections/timeline"
import { TracksSection } from "@/components/sections/tracks"
import { CFPSection } from "@/components/sections/cfp"
import { SubmissionSection } from "@/components/sections/submission"
import { CommitteeSection } from "@/components/sections/committee"
import { RegistrationSection } from "@/components/sections/registration"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TracksSection />
      <CFPSection />
      <SubmissionSection />
      <CommitteeSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
