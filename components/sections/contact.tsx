"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, Calendar, MapPin, Mail } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "submission", label: "Paper Submission" },
  { value: "cfp", label: "CFP / Review Process" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "registration", label: "Registration" },
  { value: "invitation", label: "Invitation Letter" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subjectText = subjectOptions.find(s => s.value === formData.subject)?.label || "General Inquiry"
    const mailtoLink = `mailto:hagohel@gmail.com?subject=${encodeURIComponent(`[IC-SQITS 2026] ${subjectText}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`

    await new Promise((resolve) => setTimeout(resolve, 500))
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="pt-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Client Opened</h3>
                  <p className="text-muted-foreground mb-4">
                    Please send the email from your email client.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-input border-border"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-input border-border"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Select
                      required
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjectOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-input border-border resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner className="mr-2" /> : <Send className="mr-2 h-4 w-4" />}
                    {isSubmitting ? "Opening Email..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No data is stored on the website.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Info cards */}
          <div className="space-y-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm w-24">Conference</span>
                  <span className="font-medium text-foreground">IC-SQITS 2026</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">Dates</span>
                    <p className="font-medium text-foreground">10-11 December 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">Venue</span>
                    <p className="font-medium text-foreground">UTSA Downtown Campus</p>
                    <p className="text-sm text-muted-foreground">501 W César E Chávez Blvd, San Antonio, TX 78207</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground text-sm">Please Note : </span>
                    <a>
                      Submit contact only for urgent inquiries. Most of the information will be provided on website, once available
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
