"use client"

import { motion } from "framer-motion"
import { 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  Globe, 
  Zap, 
  Shield 
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobil-først design",
    description: "Din egen hjemmeside og apps med dit brand - optimeret til alle enheder."
  },
  {
    icon: CreditCard,
    title: "0% kommission",
    description: "Ingen skjulte gebyrer eller kommissioner. Du beholder hver eneste krone."
  },
  {
    icon: BarChart3,
    title: "Detaljeret analyse",
    description: "Få indsigt i dine ordrer, kunder og omsætning med vores dashboard."
  },
  {
    icon: Globe,
    title: "Dit eget brand",
    description: "Hjemmeside, mobilsite og apps med dit navn og din identitet."
  },
  {
    icon: Zap,
    title: "Lynhurtig opsætning",
    description: "Kom i gang på få minutter med vores brugervenlige platform."
  },
  {
    icon: Shield,
    title: "Sikker betaling",
    description: "Brug din egen betalingsgateway og modtag betalinger direkte."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Funktioner
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Alt hvad du behøver for at{" "}
            <span className="text-primary">vokse</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Vi giver dig alle værktøjerne til at drive en succesfuld online forretning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
