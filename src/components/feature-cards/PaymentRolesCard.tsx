import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const prices = [
  {
    title: "Обмен вещей",
    desc: "Безопасный обмен обычными вещами в Metro Royale",
    price: "250 ₽",
    icon: "Repeat",
  },
  {
    title: "Обмен ценных вещей",
    desc: "Гарант для дорогих и редких предметов",
    price: "250 ₽",
    icon: "Gem",
  },
]

export function PaymentRolesCard() {
  return (
    <div id="pricing" className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Wallet" size={20} className="text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Купить гаранта · Metro Royale</h3>
      <p className="mb-4 text-sm text-gray-400">Фиксированные цены за услуги гаранта. Без скрытых комиссий</p>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {prices.map((p, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/15">
                <Icon name={p.icon} size={18} className="text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{p.title}</p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            </div>
            <span className="text-lg font-bold text-white whitespace-nowrap">{p.price}</span>
          </div>
        ))}

        <Button className="w-full bg-violet-600 text-white hover:bg-violet-700" asChild>
          <a href="#guarants">Выбрать гаранта</a>
        </Button>
      </div>
    </div>
  )
}