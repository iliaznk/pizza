import React, { ReactElement } from 'react'
import { PizzaCard } from './pizza-card'

export type PizzaItem = {
  id: string
  name: string
  price: {
    eur: number
    usd: number
  }
  description: string
  image: string
}

type Props = {
  data: PizzaItem[]
  onItemAdd: (id: string) => void
}

export const PizzaList: React.FC<Props> = (props): ReactElement => {
  const { data, onItemAdd } = props

  const handleOrderClick = (id: string): void => {
    onItemAdd(id)
  }

  return (
    <>
      {data.map(
        (item): ReactElement => {
          return (
            <div className="w-third pa2" key={item.name}>
              <PizzaCard {...item} onOrderClick={handleOrderClick} />
            </div>
          )
        },
      )}
    </>
  )
}
