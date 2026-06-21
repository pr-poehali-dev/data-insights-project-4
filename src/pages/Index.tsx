import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { BecomeGuarantSection } from "@/components/BecomeGuarantSection"
import { SupportChat } from "@/components/SupportChat"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BecomeGuarantSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Guarant Trade Games — безопасный трейд внутриигровых ресурсов.{" "}
        <span className="font-medium text-white">Минимизируем обман в играх.</span>
      </footer>
      <SupportChat />
    </main>
  )
}