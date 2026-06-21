import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const games = [
  { name: "Dota 2", icon: "Swords", path: "/games/dota2" },
  { name: "Metro Royale", icon: "Train", path: "/games/metro" },
  { name: "Black Russia", icon: "Car", path: "/games/blackrussia" },
  { name: "CS2", icon: "Crosshair", path: "/games/cs2" },
  { name: "PUBG", icon: "Target", path: "/games/pubg" },
  { name: "Standoff 2", icon: "Shield", path: "/games/standoff2" },
]

export function PartnersSection() {
  const navigate = useNavigate()

  return (
    <section id="games" className="px-4 py-10">
      <p className="text-center text-sm text-gray-500 mb-6">Работаем с играми</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {games.map((game) => (
          <button
            key={game.name}
            onClick={() => navigate(game.path)}
            className="flex items-center gap-3 rounded-xl bg-[#141414] border border-[#262626] px-5 py-3 text-gray-300 hover:border-violet-500 hover:bg-[#1a1a1a] transition-all cursor-pointer"
          >
            <Icon name={game.icon} size={20} className="text-violet-400" />
            <span className="text-sm font-semibold text-white">{game.name}</span>
            <Icon name="ChevronRight" size={14} className="text-gray-600" />
          </button>
        ))}
        <div className="flex items-center gap-3 rounded-xl bg-[#141414] border border-[#262626] border-dashed px-5 py-3">
          <Icon name="Plus" size={18} className="text-gray-600" />
          <span className="text-sm font-semibold text-gray-500">Скоро больше</span>
        </div>
      </div>
    </section>
  )
}
