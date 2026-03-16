import { Card, CardContent } from "@/components/ui/card"

const chairs = [
  { name: "Dr. Hardik Gohel", affiliation: "Texas A&M University-Victoria, United States", initial: "G" },
  { name: "Dr. Biswajeet Pandey", affiliation: "Dr. A. P. J. Abdul Kalam Technical University, India", initial: "P" },
  { name: "Dr. Yun Wan", affiliation: "University of Houston-Downtown, United States", initial: "W" },
  { name: "Dr. Himanshu Upadhyay", affiliation: "Florida International University, United States", initial: "U" },
]

const tpcMembers = [
  { name: "Dr. Weiwei Jiang", affiliation: "Beijing Univ. of Posts & Telecom, China", initial: "J" },
  { name: "Dr. Aparna Aravelli", affiliation: "North Carolina A&T State Univ., USA", initial: "A" },
  { name: "Dr. Abdul Razaque", affiliation: "Ohio Northern University, USA", initial: "R" },
  { name: "Dr. Kotsyuba Igor Yuryevich", affiliation: "ITMO University, Russia", initial: "Y" },
  { name: "Dr. Naveen Chilamkurti", affiliation: "La Trobe University, Australia", initial: "C" },
  { name: "Dr. Thomas Newe", affiliation: "University of Limerick, Ireland", initial: "N" },
  { name: "Dr. Bhagwan Das", affiliation: "Torrens University Australia", initial: "D" },
  { name: "Dr. Wan Abu Bakar Aezwani", affiliation: "Univ. of Sultan Zainal Abdin, Malaysia", initial: "A" },
  { name: "Dr. Laura Aldasheva", affiliation: "Astana IT University, Kazakhstan", initial: "A" },
  { name: "Dr. Nikhil Bhalla", affiliation: "Ulster University, UK", initial: "B" },
  { name: "Dr. Scheila Wesley Martins", affiliation: "University of Roehampton, UK", initial: "M" },
  { name: "Dr. Tarek R. Besold", affiliation: "Sony Inc., Spain", initial: "B" },
  { name: "Dr. Ajeet Kaushik", affiliation: "Florida Polytech, USA", initial: "K" },
  { name: "Dr. Gagan Narang", affiliation: "Università Politecnica delle Marche, Italy", initial: "N" },
  { name: "Dr. Chinmay Chakraborty", affiliation: "Birla Institute of Technology, India", initial: "C" },
  { name: "Dr. Siddhant Sharma", affiliation: "Boston University, USA", initial: "S" },
  { name: "Dr. Yu Zhiwen", affiliation: "South China Univ. of Technology, China", initial: "Z" },
]

function MemberCard({ name, affiliation, initial }: { name: string; affiliation: string; initial: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0">
        {initial}
      </div>
      <div className="min-w-0">
        <p className="font-medium text-foreground text-sm truncate">{name}</p>
        <p className="text-xs text-muted-foreground truncate">{affiliation}</p>
      </div>
    </div>
  )
}

export function CommitteeSection() {
  return (
    <section id="committee" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Leadership</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Organizing Committee</h2>
        </div>

        {/* Chairs */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Chairs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {chairs.map((chair) => (
              <MemberCard key={chair.name} {...chair} />
            ))}
          </div>
        </div>

        {/* TPC Members */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Technical Program Committee</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {tpcMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Track chairs and additional PC members will be added as confirmations finalize.
          </p>
        </div>
      </div>
    </section>
  )
}
