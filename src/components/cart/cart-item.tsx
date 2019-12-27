import React, { ReactElement } from 'react'
import { PizzaItem } from '../../types'

type Props = PizzaItem

const CartItem: React.FC<Props> = (props): ReactElement => {
  const { image, name } = props

  const _renderQtyControls = (): ReactElement => {
    return (
      <>
        <button className="flex pointer br-100 bg-blue o-30 glow bn qty-button justify-center minus" />
        <div className="f3 mh2 fw6 near-black">20</div>
        <button className="flex pointer br-100 bg-blue o-30 glow bn qty-button justify-center plus" />
        <button className="ml3 flex pointer br-100 o-30 glow bg-dark-red bn qty-button justify-center remove" />
      </>
    )
  }

  const _renderCost = (): ReactElement => {
    return <div className="mr3 v-mid f3 fw6 hot-pink">$12</div>
  }

  return (
    <div
      className="w-100 card mb3 pv3 ph2 br3 flex items-center bg-white"
      key={name}
    >
      <div
        className="h3 w4 cover bg-center"
        style={{ backgroundImage: `url(images/${image}` }}
      />
      <div className="pl2">
        <h2 className="small-caps ma0 fw9 blue">{name}</h2>
      </div>
      <div className="pr2 ml-auto flex items-center">
        {_renderCost()}
        {_renderQtyControls()}
      </div>
    </div>
  )
}

export { CartItem }
