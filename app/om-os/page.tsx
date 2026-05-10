"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Heart, Target, Users, Zap, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for mad",
    description: "Vi elsker mad og de mennesker der laver den. Vores mission er at hjælpe restauranter med at vokse."
  },
  {
    icon: Target,
    title: "Kundefokus",
    description: "Alt hvad vi gør, handler om at gøre livet lettere for vores kunder og deres gæster."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Vi er altid på forkant med teknologi for at give dig de bedste værktøjer."
  },
  {
    icon: Users,
    title: "Fællesskab",
    description: "Vi bygger et fællesskab af succesfulde restauratører der hjælper hinanden."
  }
]

const stats = [
  { value: "500+", label: "Aktive restauranter" },
  { value: "2M+", label: "Ordrer håndteret" },
  { value: "50K+", label: "Daglige brugere" },
  { value: "99.9%", label: "Oppetid" }
]

const team = [
  {
    name: "Lars Andersen",
    role: "CEO & Founder",
    bio: "Tidligere restauratør med 15 års erfaring i branchen."
  },
  {
    name: "Sofie Nielsen",
    role: "CTO",
    bio: "Tech-veteran med baggrund fra Trustpilot og Unity."
  },
  {
    name: "Mikkel Hansen",
    role: "Head of Design",
    bio: "Skaber brugervenlige oplevelser der konverterer."
  },
  {
    name: "Emma Christensen",
    role: "Head of Sales",
    bio: "Hjælper restauranter med at finde den rette løsning."
  }
]

export default function OmOsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Vores historie
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Vi bygger fremtidens{" "}
              <span className="text-primary">restaurant-teknologi</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              QuickBite startede med en simpel idé: restauranter fortjener bedre værktøjer 
              til at nå deres kunder - uden at betale enorme kommissioner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-background/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Vores mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                At give restauranter{" "}
                <span className="text-primary">fuld kontrol</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vi tror på at restauranter skal eje deres relation til kunderne. 
                Derfor har vi bygget en platform der giver dig dit eget brand, 
                dine egne data og 100% af din omsætning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ingen mellemled, ingen skjulte gebyrer - bare dig og dine kunder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[Award, Globe, Users, Zap].map((Icon, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 shadow-lg">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <div className="text-sm text-muted-foreground">
                        {["Kvalitet", "Global", "Fællesskab", "Innovation"][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Vores værdier
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Mød teamet
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Et passioneret team der arbejder for at gøre din restaurant succesfuld.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-3xl p-6 border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
