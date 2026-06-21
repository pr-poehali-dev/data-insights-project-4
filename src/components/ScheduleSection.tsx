import Icon from "@/components/ui/icon"

const days = [
  { label: "Пн", active: true },
  { label: "Вт", active: true },
  { label: "Ср", active: true },
  { label: "Чт", active: true },
  { label: "Пт", active: true },
  { label: "Сб", active: true },
  { label: "Вс", active: false },
]

const now = new Date()
const dayIndex = (now.getDay() + 6) % 7
const hour = now.getHours()
const isOpen = dayIndex < 6 && hour >= 8 && hour < 23

export function ScheduleSection() {
  return (
    <section className="px-4 py-12 max-w-2xl mx-auto">
      <div className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden">
        {/* Шапка */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1f1f1f]">
              <Icon name="Clock" size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">График работы</p>
              <p className="text-xs text-gray-500">гарантов и продавцов</p>
            </div>
          </div>
          <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${isOpen ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
            {isOpen ? "Сейчас работаем" : "Сейчас закрыто"}
          </div>
        </div>

        {/* Дни недели */}
        <div className="px-6 py-5">
          <div className="flex justify-between mb-5">
            {days.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500">{d.label}</span>
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${d.active ? "bg-violet-600/20 border border-violet-500/30" : "bg-[#1a1a1a] border border-[#262626]"}`}>
                  {d.active
                    ? <Icon name="Check" size={14} className="text-violet-400" />
                    : <Icon name="X" size={14} className="text-gray-600" />
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Время */}
          <div className="flex items-center justify-between rounded-xl bg-[#0f0f0f] border border-[#1f1f1f] px-5 py-4">
            <div className="flex items-center gap-3">
              <Icon name="Sunrise" size={18} className="text-amber-400" />
              <div>
                <p className="text-xs text-gray-500">Открытие</p>
                <p className="text-lg font-bold text-white">08:00</p>
              </div>
            </div>
            <div className="h-px flex-1 mx-4 bg-[#262626]" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-gray-500">Закрытие</p>
                <p className="text-lg font-bold text-white">23:00</p>
              </div>
              <Icon name="Moon" size={18} className="text-indigo-400" />
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-gray-600">Воскресенье — выходной</p>
        </div>
      </div>
    </section>
  )
}
