import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Guarant = {
  name: string
  id: string
  tg: string
  initials: string
  color: string
}

const guarants: Guarant[] = [
  { name: "Виталий", id: "52057465205", tg: "@Ya_igor_384", initials: "В", color: "bg-violet-600" },
  { name: "Игнат", id: "52435182628", tg: "@gumimin5", initials: "И", color: "bg-teal-600" },
]

const randomDeals = () => Math.floor(Math.random() * (500 - 200 + 1)) + 200

export function LinkAccountsCard() {
  const [selected, setSelected] = useState<Guarant | null>(null)
  const [deals] = useState(() => guarants.map(() => randomDeals()))

  return (
    <div id="guarants" className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="ShieldCheck" size={20} className="text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Гаранты онлайн</h3>
      <p className="mb-4 text-sm text-gray-400">
        В сети всегда 2 проверенных гаранта. Выберите свободного и проведите сделку без риска
      </p>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {guarants.map((g, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className={`${g.color} text-white text-xs`}>{g.initials}</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-[#0f0f0f]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{g.name}</p>
                <p className="text-xs text-gray-500">{deals[index]} сделок</p>
              </div>
            </div>
            <Button
              size="sm"
              className="rounded-full bg-violet-600 hover:bg-violet-700 text-white h-7 px-3 text-xs"
              onClick={() => setSelected(g)}
            >
              Купить
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-[#141414] border-[#262626] text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={20} className="text-violet-400" />
              Гарант {selected?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Свяжитесь с гарантом в Telegram и сообщите его ID для подтверждения
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Gamepad2" size={16} /> ID в PUBG Mobile
              </div>
              <span className="font-mono text-white">{selected?.id}</span>
            </div>

            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white" asChild>
              <a
                href={`https://t.me/${selected?.tg.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Написать в Telegram {selected?.tg}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
