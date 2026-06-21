import { GamePageLayout } from "@/components/GamePageLayout"

export default function BlackRussiaPage() {
  return (
    <GamePageLayout
      title="Black Russia"
      icon="Car"
      description="Буст баланса, покупка и продажа аккаунтов Black Russia под защитой гаранта."
      services={[
        {
          title: "Буст баланса",
          description: "Пополним ваш баланс в Black Russia. Сумма и условия обсуждаются индивидуально.",
          price: "Цена договорная",
          icon: "TrendingUp",
          badge: "Популярное",
        },
        {
          title: "Покупка валюты",
          description: "Купите рубли или игровую валюту Black Russia через безопасную сделку.",
          price: "Цена договорная",
          icon: "Coins",
        },
        {
          title: "Покупка аккаунта",
          description: "Готовый аккаунт Black Russia с имуществом, машинами и балансом.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте свой аккаунт Black Russia безопасно через гаранта.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
