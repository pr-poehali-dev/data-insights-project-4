import { GamePageLayout } from "@/components/GamePageLayout"

export default function Standoff2Page() {
  return (
    <GamePageLayout
      title="Standoff 2"
      icon="Shield"
      description="Безопасная покупка и продажа золота, скинов и аккаунтов Standoff 2 через гаранта."
      services={[
        {
          title: "Покупка валюты",
          description: "Купите золото Standoff 2 безопасно — гарант защитит вашу сделку.",
          price: "Цена договорная",
          icon: "Coins",
          badge: "Популярное",
        },
        {
          title: "Продажа валюты",
          description: "Продайте золото или скины Standoff 2 без риска — через безопасную сделку.",
          price: "Цена договорная",
          icon: "ArrowRightLeft",
        },
        {
          title: "Покупка аккаунта",
          description: "Готовый аккаунт Standoff 2 с редкими скинами, рангом и историей.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте аккаунт Standoff 2 безопасно — гарант защитит обе стороны.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
