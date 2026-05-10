"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, CheckCircle2, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-accent/50 to-accent/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-[12%] w-20 h-20 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 backdrop-blur-sm border border-accent/20"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-[10%] w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 backdrop-blur-sm border border-accent/20"
        />
        <motion.div
          animate={{ y: [10, -25, 10], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 right-[18%] w-14 h-14 rounded-2xl bg-gradient-to-tl from-primary/25 to-accent/15 backdrop-blur-sm border border-primary/20"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-sm font-semibold mb-8 border border-primary/25 shadow-lg shadow-primary/10">
              <Sparkles className="w-4 h-4 animate-pulse" />
              0% kommission - 100% kontrol
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </span>
          </motion.div>
          
          {/* Main Heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance"
          >
            Dit eget{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                bestillingssystem
              </span>
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full" 
                height="12" 
                viewBox="0 0 300 12" 
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M0 9 Q75 0 150 6 T300 4" 
                  stroke="url(#gradient)" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
            <br className="hidden sm:block" />
            {" "}på få minutter
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Skab din egen professionelle online bestillingsplatform. 
            Ingen skjulte gebyrer, ingen mellemled - kun dig og dine kunder.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Ingen binding
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Gratis prøveperiode
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Dansk support
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-base h-14 px-8 shadow-xl shadow-primary/30 group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" asChild>
              <Link href="/priser">
                Start gratis i dag
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 group border-2 hover:bg-secondary" asChild>
              <Link href="/funktioner">
                <Zap className="mr-2 h-5 w-5 text-accent" />
                Se funktioner
              </Link>
            </Button>
          </motion.div>

          {/* Social proof mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground/70"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(${120 + i * 30}, 70%, 85%), hsl(${140 + i * 30}, 60%, 75%))` 
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Betroet af <span className="font-semibold text-foreground">500+</span> virksomheder</p>
            </div>
          </motion.div>

          {/* Stats with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Users, value: "500+", label: "Aktive kunder", color: "primary" },
              { icon: TrendingUp, value: "50K+", label: "Ordrer dagligt", color: "accent" },
              { icon: Sparkles, value: "4.9", label: "Bedømmelse", color: "primary" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${stat.color === 'primary' ? 'bg-primary/15' : 'bg-accent/20'}`}>
                    <stat.icon className={`w-7 h-7 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
