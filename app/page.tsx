import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesPreview } from "@/components/features-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
