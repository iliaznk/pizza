import React, { ReactElement } from 'react'
import { PizzaCard } from './PizzaCard'
import { PizzaItem } from 'types'

type Props = {
  data: PizzaItem[]
}

const PizzaList: React.FC<Props> = (props): ReactElement => {
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

export { PizzaList }
