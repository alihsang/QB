"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfekt til små restauranter der vil komme i gang",
    price: "299",
    period: "/måned",
    features: [
      "Op til 100 produkter",
      "Online bestilling",
      "Grundlæggende analytics",
      "Email support",
      "1 admin bruger",
      "Standard tema"
    ],
    cta: "Start gratis prøve",
    popular: false
  },
  {
    name: "Professional",
    description: "Til etablerede restauranter med høj volumen",
    price: "599",
    period: "/måned",
    features: [
      "Ubegrænset produkter",
      "Avanceret analytics",
      "Prioriteret support",
      "5 admin brugere",
      "Tilpasset tema",
      "Push notifikationer",
      "Leveringszoner",
      "Loyalitetsprogram"
    ],
    cta: "Start gratis prøve",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Til kæder og store operationer",
    price: "Kontakt",
    period: "os",
    features: [
      "Alt i Professional",
      "Ubegrænset admin brugere",
      "Dedikeret kontaktperson",
      "API adgang",
      "Flere lokationer",
      "White label løsning",
      "SLA garanti",
      "Onboarding assistance"
    ],
    cta: "Kontakt salg",
    popular: false
  }
]

const faqs = [
  {
    question: "Er der virkelig 0% kommission?",
    answer: "Ja! Vi tager ingen procentdel af dine salg. Du betaler kun den faste månedlige pris, og alt andet er dit."
  },
  {
    question: "Kan jeg prøve gratis?",
    answer: "Absolut! Alle planer kommer med 14 dages gratis prøveperiode uden kreditkort. Ingen binding."
  },
  {
    question: "Hvad sker der efter prøveperioden?",
    answer: "Du vælger selv om du vil fortsætte. Ingen automatisk opkrævning - du skal aktivt vælge en plan."
  },
  {
    question: "Kan jeg skifte plan senere?",
    answer: "Ja, du kan opgradere eller nedgradere når som helst. Ændringer træder i kraft med det samme."
  }
]

export default function PriserPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              0% kommission
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Simple og{" "}
              <span className="text-primary">gennemsigtige</span> priser
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ingen skjulte gebyrer, ingen procentdel af dit salg. 
              Bare en fast månedlig pris der passer til din forretning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border ${
                  plan.popular 
                    ? "bg-foreground text-background border-foreground shadow-2xl scale-105" 
                    : "bg-card border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-accent text-foreground text-sm font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      Mest populær
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-background/90" : ""}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full h-12 ${
                    plan.popular 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/kontakt">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ofte stillede spørgsmål
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
