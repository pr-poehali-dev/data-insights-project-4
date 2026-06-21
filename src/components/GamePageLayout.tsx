import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { SupportChat } from "@/components/SupportChat"

type ServiceCard = {
  title: string
  description: string
  price: string
  icon: string
  badge?: string
}

type GamePageLayoutProps = {
  title: string
  icon: string
  description: string
  services: ServiceCard[]
}

export function GamePageLayout({ title, icon, description, services }: GamePageLayoutProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-[#1a1a1a]">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm">Назад</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600">
            <Icon name="ShieldCheck" size={18} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-white">Guarant Trade Games<sup className="text-xs">™</sup></span>
        </div>
        <div className="w-16" />
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-14 pb-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30">
          <Icon name={icon} size={30} className="text-violet-400" />
        </div>
        <h1 className="mb-3 text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <p className="max-w-lg text-gray-400">{description}</p>
      </section>

      {/* Services */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-[#141414] border border-[#262626] p-6 hover:border-violet-500/50 transition-all"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
                  <Icon name={s.icon} size={20} className="text-violet-400" />
                </div>
                {s.badge && (
                  <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-medium text-violet-400 border border-violet-500/20">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="mb-4 text-sm text-gray-400 flex-1">{s.description}</p>
              <div className="mb-4 text-lg font-bold text-violet-400">{s.price}</div>
              <Button
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white"
                asChild
              >
                <a href="https://t.me/GuarantTradeGames" target="_blank" rel="noreferrer">
                  Заказать <Icon name="ArrowUpRight" size={15} className="ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <SupportChat />
    </div>
  )
}
