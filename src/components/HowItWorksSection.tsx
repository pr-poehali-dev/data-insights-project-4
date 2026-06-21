import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "HandCoins",
    text: "Гарант берёт деньги у покупателя и скидывает скриншот перевода продавцу",
  },
  {
    icon: "PackageCheck",
    text: "Продавец передаёт вещь гаранту в игре, гарант подтверждает покупателю, что вещь соответствует действительности",
  },
  {
    icon: "Send",
    text: "Гарант переводит деньги продавцу",
  },
  {
    icon: "Gift",
    text: "Гарант отдаёт вещь покупателю",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how" className="px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Как мы работаем</h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Прозрачная схема сделки в 4 шага — обе стороны защищены на каждом этапе.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-[#141414] border border-[#262626] p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/15">
                <Icon name={step.icon} size={20} className="text-violet-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">Шаг {i + 1}</span>
                <p className="text-sm text-gray-300 mt-1">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-violet-600/20 to-violet-900/10 border border-violet-500/30 p-6 text-center">
          <Icon name="Quote" size={24} className="text-violet-400 mx-auto mb-3" />
          <p className="text-lg md:text-xl font-medium text-white">
            Человек, в отличие от сайта, сломаться не может.
          </p>
        </div>
      </div>
    </section>
  )
}
