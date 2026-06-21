import { GamePageLayout } from "@/components/GamePageLayout"

export default function PUBGPage() {
  return (
    <GamePageLayout
      title="PUBG"
      icon="Target"
      description="Покупка UC и аккаунтов PUBG через безопасную сделку с гарантом."
      groups={[
        {
          groupTitle: "UC (Unknown Cash)",
          services: [
            {
              title: "60 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "40 ₽",
              icon: "Coins",
            },
            {
              title: "120 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "100 ₽",
              icon: "Coins",
            },
            {
              title: "200 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "250 ₽",
              icon: "Coins",
            },
            {
              title: "500 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "600 ₽",
              icon: "Coins",
            },
            {
              title: "1 000 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "1 100 ₽",
              icon: "Coins",
              badge: "Популярное",
            },
            {
              title: "3 000 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "2 500 ₽",
              icon: "Coins",
            },
            {
              title: "5 000 UC",
              description: "Пополнение UC на аккаунт PUBG через гаранта.",
              price: "4 000 ₽",
              icon: "Coins",
            },
            {
              title: "10 000 UC",
              description: "Максимальное пополнение UC — выгодная цена за объём.",
              price: "7 500 ₽",
              icon: "Coins",
              badge: "Выгодно",
            },
          ],
        },
        {
          groupTitle: "Аккаунты",
          services: [
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
          ],
        },
      ]}
    />
  )
}
