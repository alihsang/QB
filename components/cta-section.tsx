"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-chart-3 p-10 md:p-16 lg:p-20"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Prøv gratis i 14 dage
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight">
              Klar til at tage kontrol over din forretning?
            </h2>
            
            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Start din gratis prøveperiode i dag og oplev forskellen ved 0% kommission 
              og fuld kontrol over dit brand.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 shadow-xl group"
                asChild
              >
                <Link href="/priser">
                  Start gratis prøveperiode
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base bg-white/20 border-white/50 text-white hover:bg-white/30 backdrop-blur-sm font-semibold"
                asChild
              >
                <Link href="/kontakt">
                  Kontakt salg
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
