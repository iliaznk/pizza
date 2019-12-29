import React, { ReactElement } from 'react'

export const Spinner = (): ReactElement => {
  return (
    <div className="spinner sans-serif fw4 f2 small-caps blue">
      <span className="tracked-mega">loadin</span>g
    </div>
  )
}
