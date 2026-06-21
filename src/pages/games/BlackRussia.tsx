import { GamePageLayout } from "@/components/GamePageLayout"

export default function BlackRussiaPage() {
  return (
    <GamePageLayout
      title="Black Russia"
      icon="Car"
      description="Донат, валюта и аккаунты Black Russia под защитой гаранта."
      groups={[
        {
          groupTitle: "Донат",
          services: [
            {
              title: "Блек Пасс",
              description: "Покупка Black Pass для вашего аккаунта через безопасную сделку.",
              price: "400 ₽",
              icon: "BadgeCheck",
              badge: "Донат",
            },
            {
              title: "Блек Пасс Делюкс",
              description: "Расширенная версия Black Pass с дополнительными привилегиями.",
              price: "800 ₽",
              icon: "Crown",
              badge: "Донат",
            },
            {
              title: "Эксклюзивные машины",
              description: "Эксклюзивные автомобили за донат — цена зависит от модели и наличия.",
              price: "По согласованию",
              icon: "Car",
              badge: "Донат",
            },
          ],
        },
        {
          groupTitle: "Винты (валюта)",
          services: [
            {
              title: "1 000 000 винтов",
              description: "Пополнение баланса на 1кк через безопасную сделку с гарантом.",
              price: "30 ₽",
              icon: "Coins",
            },
            {
              title: "2 000 000 винтов",
              description: "Пополнение баланса на 2кк — выгоднее на 10₽.",
              price: "50 ₽",
              icon: "Coins",
              badge: "Скидка",
            },
            {
              title: "5 000 000 винтов",
              description: "Пополнение баланса на 5кк через безопасную сделку.",
              price: "150 ₽",
              icon: "Coins",
            },
            {
              title: "10 000 000 винтов",
              description: "Пополнение баланса на 10кк — выгодная цена за объём.",
              price: "250 ₽",
              icon: "Coins",
              badge: "Скидка",
            },
          ],
        },
        {
          groupTitle: "Аккаунты",
          services: [
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
          ],
        },
      ]}
    />
  )
}
