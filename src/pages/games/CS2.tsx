import { GamePageLayout } from "@/components/GamePageLayout"

export default function CS2Page() {
  return (
    <GamePageLayout
      title="CS2"
      icon="Crosshair"
      description="Безопасная покупка и продажа аккаунтов и валюты CS2 под защитой гаранта."
      services={[
        {
          title: "Покупка валюты",
          description: "Купите баланс Steam или игровую валюту CS2 через безопасную сделку с гарантом.",
          price: "Цена договорная",
          icon: "Coins",
          badge: "Популярное",
        },
        {
          title: "Покупка аккаунта",
          description: "Готовый аккаунт CS2 с нужным рангом, часами и инвентарём.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте аккаунт CS2 без риска обмана — сделка проходит через гаранта.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
