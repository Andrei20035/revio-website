import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandStatement } from "@/components/brand-statement"
import { SocialInteractions } from "@/components/social-interactions"
import { Leaderboard } from "@/components/leaderboard"
import { EarlyAccess } from "@/components/early-access"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="features">
        <SocialInteractions />
      </section>
      <section id="leaderboard">
        <Leaderboard />
      </section>
      <BrandStatement />
      <section id="early-access">
        <EarlyAccess />
      </section>
      <Waitlist />
      <Footer />
    </main>
  )
}
