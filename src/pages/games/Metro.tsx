import { GamePageLayout } from "@/components/GamePageLayout"

export default function MetroPage() {
  return (
    <GamePageLayout
      title="Metro Royale"
      icon="Train"
      description="Буст баланса, сопровождение в подземке и безопасная торговля ресурсами Metro Royale."
      services={[
        {
          title: "Буст баланса",
          description: "Пополним ваш баланс в Metro Royale. Цена зависит от объёма — обсуждаем индивидуально.",
          price: "Цена договорная",
          icon: "TrendingUp",
          badge: "Популярное",
        },
        {
          title: "Классическое сопровождение",
          description: "7 карта — гарантированно 15 000 000 монет и вещи. Надёжное прохождение с гарантом.",
          price: "Цена договорная",
          icon: "Shield",
        },
        {
          title: "Премиум сопровождение",
          description: "8 карта — гарантированно 20 000 000 монет, вещи и 10 билетов. Максимальный результат.",
          price: "Цена договорная",
          icon: "Star",
          badge: "Премиум",
        },
        {
          title: "Покупка валюты",
          description: "Купите внутриигровую валюту Metro Royale через безопасную сделку с гарантом.",
          price: "Цена договорная",
          icon: "Coins",
        },
        {
          title: "Продажа валюты",
          description: "Продайте накопленные монеты и ресурсы Metro Royale безопасно.",
          price: "Цена договорная",
          icon: "ArrowRightLeft",
        },
        {
          title: "Покупка аккаунта",
          description: "Готовый прокачанный аккаунт Metro Royale с нужными характеристиками.",
          price: "Цена договорная",
          icon: "UserCheck",
        },
        {
          title: "Продажа аккаунта",
          description: "Продайте аккаунт Metro Royale — гарант защитит вас от мошенников.",
          price: "Цена договорная",
          icon: "UserMinus",
        },
      ]}
    />
  )
}
