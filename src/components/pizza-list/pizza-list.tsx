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
}

export const PizzaList: React.FC<Props> = (props): ReactElement => {
  const { data } = props
  return (
    <>
      {data.map(
        (item): ReactElement => {
          return (
            <div className="w-third pa2" key={item.name}>
              <PizzaCard {...item} />
            </div>
          )
        },
      )}
    </>
  )
}
