"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  Globe, 
  Zap, 
  Shield,
  Bell,
  Palette,
  Users,
  Clock,
  Truck,
  MessageSquare
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobil-først design",
    description: "Din egen hjemmeside og apps med dit brand - optimeret til alle enheder og skærmstørrelser.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: CreditCard,
    title: "0% kommission",
    description: "Ingen skjulte gebyrer eller kommissioner. Du beholder hver eneste krone af din omsætning.",
    color: "bg-accent/20 text-accent"
  },
  {
    icon: BarChart3,
    title: "Detaljeret analyse",
    description: "Få indsigt i dine ordrer, kunder og omsætning med vores avancerede dashboard.",
    color: "bg-chart-3/20 text-chart-3"
  },
  {
    icon: Globe,
    title: "Dit eget brand",
    description: "Hjemmeside, mobilsite og apps med dit navn, logo og din visuelle identitet.",
    color: "bg-chart-4/20 text-chart-4"
  },
  {
    icon: Zap,
    title: "Lynhurtig opsætning",
    description: "Kom i gang på få minutter med vores intuitive og brugervenlige platform.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Shield,
    title: "Sikker betaling",
    description: "Brug din egen betalingsgateway og modtag betalinger direkte og sikkert.",
    color: "bg-chart-5/20 text-chart-5"
  },
  {
    icon: Bell,
    title: "Push notifikationer",
    description: "Hold dine kunder opdaterede med automatiske notifikationer om deres ordrer.",
    color: "bg-accent/20 text-accent"
  },
  {
    icon: Palette,
    title: "Fuld tilpasning",
    description: "Tilpas farver, skrifttyper og layout så det matcher dit brand perfekt.",
    color: "bg-chart-3/20 text-chart-3"
  },
  {
    icon: Users,
    title: "Kundestyring",
    description: "Administrer dine kunder, se ordrehistorik og opbyg loyalitetsprogrammer.",
    color: "bg-chart-4/20 text-chart-4"
  },
  {
    icon: Clock,
    title: "Åbningstider",
    description: "Fleksibel styring af åbningstider, helligdage og særlige perioder.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Truck,
    title: "Leveringszoner",
    description: "Definer dine leveringsområder med fleksible priser og minimumordrer.",
    color: "bg-chart-5/20 text-chart-5"
  },
  {
    icon: MessageSquare,
    title: "Kundesupport",
    description: "Integreret chat og support så du altid kan hjælpe dine kunder hurtigt.",
    color: "bg-accent/20 text-accent"
  }
]

export default function FunktionerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Kraftfulde funktioner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Alt du behøver for at{" "}
              <span className="text-primary">lykkes online</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi har bygget en komplet platform med alle de funktioner du har brug for 
              til at drive en succesfuld online forretning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
