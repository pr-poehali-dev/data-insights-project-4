import { GamePageLayout } from "@/components/GamePageLayout"

export default function MetroPage() {
  return (
    <GamePageLayout
      title="Metro Royale"
      icon="Train"
      description="Оружие, сопровождение и буст баланса в Metro Royale под защитой гаранта."
      services={[
        {
          title: "Меч",
          description: "Продажа меча через безопасную сделку с гарантом.",
          price: "8 000 ₽",
          icon: "Swords",
          badge: "Оружие",
        },
        {
          title: "Бабочка (оригинал)",
          description: "Оригинальный нож-бабочка — редкое оружие с гарантией подлинности.",
          price: "3 500 ₽",
          icon: "Scissors",
          badge: "Оружие",
        },
        {
          title: "Бабочка (дубликат)",
          description: "Дубликат ножа-бабочки по выгодной цене.",
          price: "1 500 ₽",
          icon: "Scissors",
        },
        {
          title: "Сопровождение 5кк + вещи",
          description: "Гарантом вынос 5 000 000 монет + вещи. Безопасное сопровождение.",
          price: "250 ₽",
          icon: "Shield",
          badge: "Сопровождение",
        },
        {
          title: "Сопровождение 10кк + вещи",
          description: "Гарантом вынос 10 000 000 монет + вещи. Максимальный результат.",
          price: "500 ₽",
          icon: "Star",
          badge: "Сопровождение",
        },
      ]}
    />
  )
}
