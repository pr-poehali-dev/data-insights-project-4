import Icon from "@/components/ui/icon"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const avatarColors = [
  "bg-violet-600", "bg-teal-600", "bg-blue-600", "bg-rose-600",
  "bg-orange-600", "bg-green-600", "bg-pink-600", "bg-indigo-600",
]

const reviews = [
  { author: "Максим К.", initials: "М", color: avatarColors[0], rating: 5, text: "Всё прошло быстро и без проблем. Виталий моментально вышел на связь, сделка заняла минут 10. Рекомендую!" },
  { author: "Дарья Л.", initials: "Д", color: avatarColors[1], rating: 5, text: "Обменяла донатные вещи через гаранта. Всё честно, деньги получила сразу. Буду пользоваться снова." },
  { author: "Артём В.", initials: "А", color: avatarColors[2], rating: 5, text: "Игнат — профессионал. Провёл обмен без единой проблемы, держал в курсе каждого шага." },
  { author: "Никита Р.", initials: "Н", color: avatarColors[3], rating: 4, text: "В целом доволен. Сделка прошла успешно, но ответ пришлось ждать минут 20. Результат хороший." },
  { author: "Полина М.", initials: "П", color: avatarColors[4], rating: 5, text: "Первый раз пользовалась гарантом — очень понравилось. Всё прозрачно, никакого обмана." },
  { author: "Сергей Ф.", initials: "С", color: avatarColors[5], rating: 3, text: "Сделка в итоге прошла, но было несколько непоняток в процессе. Хотелось бы более чёткой коммуникации." },
  { author: "Алина Т.", initials: "А", color: avatarColors[6], rating: 5, text: "Быстро, надёжно, без лишних вопросов. Уже третья сделка через этот сервис — всегда доволен." },
  { author: "Илья Г.", initials: "И", color: avatarColors[7], rating: 2, text: "Долго ждал ответа, почти час. Сделка в конце концов состоялась, но нервов потрепало. Надеюсь, это разовое." },
  { author: "Кристина Н.", initials: "К", color: avatarColors[0], rating: 5, text: "Отличный сервис! Обменяла ценные предметы Metro Royale за считанные минуты. Всё чисто." },
  { author: "Вадим О.", initials: "В", color: avatarColors[1], rating: 4, text: "Гарант Виталий чётко отработал. Небольшая задержка в начале, но потом всё пошло гладко." },
]

const avgRating = 4.7

export function SendFundsCard() {
  return (
    <div id="reviews" className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Star" size={20} className="text-violet-400" />
      </div>

      <h3 className="mb-1 text-lg font-semibold text-white">Отзывы</h3>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <Icon key={s} name="Star" size={14} className={s < Math.round(avgRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} />
          ))}
        </div>
        <span className="text-sm font-semibold text-white">{avgRating}</span>
        <span className="text-xs text-gray-500">· {reviews.length} отзывов</span>
      </div>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4 max-h-[420px] overflow-y-auto">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className={`${r.color} text-white text-xs`}>{r.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white">{r.author}</span>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="Star" size={11} className={s < r.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
