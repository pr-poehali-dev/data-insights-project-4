import { GamePageLayout } from "@/components/GamePageLayout"

export default function Dota2Page() {
  return (
    <GamePageLayout
      title="Dota 2"
      icon="Swords"
      description="Безопасная покупка и продажа внутриигровой валюты и аккаунтов Dota 2 под защитой гаранта."
      services={[
        {
          title: "Покупка валюты",
          description: "Купите золото, кристаллы или другую внутриигровую валюту Dota 2 безопасно через гаранта.",
          price: "Цена договорная",
          icon: "Coins",
          badge: "Популярное",
        },
        {
          title: "Продажа валюты",
          description: "Продайте накопленную валюту или ресурсы через безопасную сделку с гарантом.",
          price: "Цена договорная",
          icon: "ArrowRightLeft",
        },
        {
          title: "Покупка аккаунта",
          description: "Приобретите готовый аккаунт Dota 2 с нужным рангом и коллекцией предметов.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте свой аккаунт Dota 2 безопасно — гарант защитит обе стороны сделки.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
