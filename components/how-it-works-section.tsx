"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Opret din konto",
    description: "Tilmeld dig gratis og opret din restaurant-profil på få minutter."
  },
  {
    number: "02",
    title: "Tilføj din menu",
    description: "Upload dine produkter, priser og billeder med vores intuitive værktøj."
  },
  {
    number: "03",
    title: "Start med at sælge",
    description: "Del din hjemmeside og begynd at modtage ordrer direkte fra dine kunder."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sådan virker det
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Tre simple trin til{" "}
            <span className="text-primary">succes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
