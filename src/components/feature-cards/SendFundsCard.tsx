import Icon from "@/components/ui/icon"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    author: "Администратор",
    text: "Сделка по обмену ценных вещей в Metro Royale прошла успешно. Покупатель и продавец довольны.",
    initials: "A",
  },
  {
    author: "Администратор",
    text: "Гарант Виталий провёл трейд в Dota 2 без задержек. Вещь передана, деньги переведены.",
    initials: "A",
  },
]

export function SendFundsCard() {
  return (
    <div id="reviews" className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Star" size={20} className="text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Отзывы</h3>
      <p className="mb-4 text-sm text-gray-400 flex items-center gap-1">
        <Icon name="Lock" size={14} /> Оставлять отзывы может только администратор
      </p>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-violet-600 text-white text-xs">{r.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white">{r.author}</span>
              <span className="ml-auto inline-flex items-center gap-0.5 rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] text-violet-400">
                <Icon name="BadgeCheck" size={11} /> Админ
              </span>
            </div>
            <p className="text-sm text-gray-400">{r.text}</p>
            <div className="flex gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, s) => (
                <Icon key={s} name="Star" size={13} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
