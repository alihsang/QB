"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  ArrowRight,
  Zap
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobil-optimeret",
    description: "Din egen hjemmeside optimeret til alle enheder og skærmstørrelser.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: CreditCard,
    title: "0% kommission",
    description: "Ingen skjulte gebyrer. Du beholder alle dine indtægter.",
    color: "bg-accent/20 text-accent"
  },
  {
    icon: BarChart3,
    title: "Live dashboard",
    description: "Følg dine ordrer og omsætning i realtid med detaljeret analyse.",
    color: "bg-chart-3/20 text-chart-3"
  },
]

export function FeaturesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Kraftfulde funktioner
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Alt hvad du behøver for at{" "}
            <span className="text-primary">vokse</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Vi giver dig alle værktøjerne til at drive en succesfuld online forretning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/funktioner">
              Se alle funktioner
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
