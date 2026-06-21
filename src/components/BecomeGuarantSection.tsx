import Icon from "@/components/ui/icon"

export function BecomeGuarantSection() {
  return (
    <section id="become" className="px-4 md:px-8 py-12">
      <div className="max-w-3xl mx-auto rounded-3xl bg-[#141414] border border-[#262626] p-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/15">
          <Icon name="UserPlus" size={28} className="text-violet-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Стань гарантом и зарабатывай вместе с нами
        </h2>
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-5 py-2 text-violet-300 mt-2">
          <Icon name="Clock" size={16} />
          <span className="font-medium">Скоро будет</span>
        </div>
      </div>
    </section>
  )
}
