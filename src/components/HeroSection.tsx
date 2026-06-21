import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [deals] = useState(() => Math.floor(Math.random() * (800 - 390 + 1)) + 390)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1200
    const steps = 40
    let current = 0
    const increment = deals / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= deals) {
        current = deals
        clearInterval(timer)
      }
      setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [deals])

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ОНЛАЙН</span>
        <span className="text-gray-300">Безопасный трейд внутриигровых ресурсов</span>
        <Icon name="ArrowUpRight" size={16} className="text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Безопасные сделки в играх под защитой гаранта
      </h1>

      <p className="mb-6 max-w-xl text-gray-400">
        Наша задача — минимизировать количество обмана в играх, и мы с этим справляемся.
      </p>

      <div className="mb-8 inline-flex flex-wrap justify-center items-center gap-3">
        <div className="inline-flex items-center gap-4 rounded-2xl bg-[#141414] border border-[#262626] px-6 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">
            <Icon name="TrendingUp" size={22} className="text-violet-400" />
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-white tabular-nums">{count}</p>
            <p className="text-xs text-gray-400">сделок за сегодня</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 rounded-2xl bg-[#141414] border border-[#262626] px-6 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20">
            <Icon name="Users" size={22} className="text-green-400" />
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-white tabular-nums">5 000+</p>
            <p className="text-xs text-gray-400">довольных покупателей</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white" asChild>
          <a href="#pricing">
            Купить гаранта <Icon name="ArrowUpRight" size={16} className="ml-2" />
          </a>
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800"
          asChild
        >
          <a href="#how">
            <Icon name="BookOpen" size={16} className="mr-2 text-violet-500" /> Как мы работаем
          </a>
        </Button>
      </div>
    </section>
  )
}