import { useState, useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

type Message = {
  from: "bot" | "user"
  text: string
}

export function SupportChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Привет! Чем могу помочь? 😊" },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput("")
    setMessages((prev) => [...prev, { from: "user", text }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Поздравляю, вы были грамотно заскамлены )" },
      ])
    }, 1200)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Кнопка чата */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-lg hover:bg-violet-700 transition-colors"
      >
        <Icon name={open ? "X" : "MessageCircle"} size={24} className="text-white" />
      </button>

      {/* Окно чата */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-[#141414] border border-[#262626] shadow-2xl flex flex-col overflow-hidden">
          {/* Шапка */}
          <div className="flex items-center gap-3 bg-[#1a1a1a] border-b border-[#262626] px-4 py-3">
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600">
                <Icon name="Bot" size={18} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-[#1a1a1a]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Поддержка</p>
              <p className="text-xs text-green-400">онлайн</p>
            </div>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "bg-violet-600 text-white rounded-br-sm"
                      : "bg-[#1f1f1f] text-gray-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-[#1f1f1f] rounded-2xl rounded-bl-sm px-4 py-2 flex gap-1 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Поле ввода */}
          <div className="flex items-center gap-2 border-t border-[#262626] px-3 py-3">
            <input
              className="flex-1 rounded-full bg-[#0f0f0f] border border-[#2a2a2a] px-4 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
              placeholder="Напишите сообщение..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <Button
              size="icon"
              className="rounded-full h-9 w-9 bg-violet-600 hover:bg-violet-700 shrink-0"
              onClick={send}
            >
              <Icon name="Send" size={15} className="text-white" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
