import { GamePageLayout } from "@/components/GamePageLayout"

export default function PUBGPage() {
  return (
    <GamePageLayout
      title="PUBG"
      icon="Target"
      description="Безопасная покупка и продажа аккаунтов и валюты PUBG через гаранта."
      services={[
        {
          title: "Покупка валюты",
          description: "Купите UC или G-Coin для PUBG через безопасную сделку с гарантом.",
          price: "Цена договорная",
          icon: "Coins",
          badge: "Популярное",
        },
        {
          title: "Покупка аккаунта",
          description: "Готовый аккаунт PUBG с нужным рангом, скинами и сезонными наградами.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте аккаунт PUBG безопасно через гаранта — защита для обеих сторон.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
