import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <GuarantLogo />
        <span className="text-lg font-semibold text-white">
          Guarant Trade Games<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#games" className="text-sm text-gray-300 hover:text-white transition-colors">
          Игры
        </a>
        <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
          Купить гаранта
        </a>
        <a href="#reviews" className="text-sm text-gray-300 hover:text-white transition-colors">
          Отзывы
        </a>
        <a href="#how" className="text-sm text-gray-300 hover:text-white transition-colors">
          Как мы работаем
        </a>
        <a href="#become" className="text-sm text-gray-300 hover:text-white transition-colors">
          Стань гарантом
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
        asChild
      >
        <a href="#pricing">Купить гаранта</a>
      </Button>
    </header>
  )
}

function GuarantLogo() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600">
      <Icon name="ShieldCheck" size={18} className="text-white" />
    </div>
  )
}
