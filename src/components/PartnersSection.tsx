import Icon from "@/components/ui/icon"

const games = [
  { name: "Dota 2", icon: "Swords" },
  { name: "Metro Royale", icon: "Train" },
  { name: "Black Russia", icon: "Car" },
  { name: "CS2", icon: "Crosshair" },
  { name: "GTA Online", icon: "Map" },
  { name: "Rust", icon: "Flame" },
  { name: "PUBG", icon: "Target" },
  { name: "Standoff 2", icon: "Shield" },
]

export function PartnersSection() {
  return (
    <section id="games" className="px-4 py-10">
      <p className="text-center text-sm text-gray-500 mb-6">Работаем с играми</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {games.map((game) => (
          <div
            key={game.name}
            className="flex items-center gap-3 rounded-xl bg-[#141414] border border-[#262626] px-5 py-3 text-gray-300"
          >
            <Icon name={game.icon} size={20} className="text-violet-400" />
            <span className="text-sm font-semibold text-white">{game.name}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 rounded-xl bg-[#141414] border border-[#262626] border-dashed px-5 py-3">
          <Icon name="Plus" size={18} className="text-gray-600" />
          <span className="text-sm font-semibold text-gray-500">Скоро больше</span>
        </div>
      </div>
    </section>
  )
}
