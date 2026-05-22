import Hero from "@/components/hero"
import AboutProject from "@/components/about-project"
import ManamoysRole from "@/components/manamoys-role"
import SprintBreakdown from "@/components/sprint-breakdown"
import Features from "@/components/features"
import TeamMembers from "@/components/team-members"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutProject />
      <ManamoysRole />
      <SprintBreakdown />
      <Features />
      <TeamMembers />
      <Contact />
    </main>
  )
}
