"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anders Jensen",
    role: "Ejer, Bella Italia",
    content: "QuickBite har transformeret vores takeaway-forretning. Vi sparer tusindvis af kroner på kommissioner hver måned og har fuld kontrol.",
    rating: 5,
    avatar: "AJ"
  },
  {
    name: "Maria Nielsen",
    role: "Indehaver, Thai Garden",
    content: "Opsætningen tog kun 20 minutter, og nu har vi vores egen smukke bestillingsside. Vores kunder elsker den nye oplevelse!",
    rating: 5,
    avatar: "MN"
  },
  {
    name: "Thomas Petersen",
    role: "CEO, Pizza Express",
    content: "Med QuickBite har vi fuld kontrol over vores brand og kundedata. Det er en game-changer for hele vores forretning.",
    rating: 5,
    avatar: "TP"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Kundeudtalelser
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Hvad vores kunder{" "}
            <span className="text-primary">siger</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-background rounded-3xl p-8 border border-border shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
