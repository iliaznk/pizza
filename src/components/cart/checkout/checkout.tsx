import React, { ReactElement } from 'react'

type CheckoutState = {
  isHidden: boolean
}

export class Checkout extends React.Component<any, CheckoutState> {
  state = {
    isHidden: true,
  }

  _unhide = (): void => {
    document.body.style.overflow = 'hidden'
    this.setState({
      isHidden: false,
    })
  }

  _hide = (): void => {
    document.body.style.overflow = 'scroll'
    this.setState({
      isHidden: true,
    })
  }

  _renderModal = (): ReactElement | null => {
    const { isHidden } = this.state

    if (isHidden) {
      return null
    }

    return (
      <div
        onClick={this._hide}
        className="fixed z-3 left-0 right-0 bg-black-90 bottom-0 vh-100 flex items-center justify-center"
      >
        <div
          className="_bg-main br4"
          onClick={(e): void => {
            e.stopPropagation()
          }}
        >
          <form action="#" className="pa3 checkout">
            <label
              htmlFor="street"
              className="pl2 db fw6 avenir f4 blue small-caps"
            >
              Street Address
            </label>
            <input
              id="street"
              name="street"
              type="text"
              className="f4 b--light-pink bw1 bg-transparent bb bt-0 br-0 bl-0 pa2 near-black mb3"
              required={true}
            />
            <label
              htmlFor="phone"
              className="pl2 db fw6 avenir f4 blue small-caps"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              className="f4 b--light-pink bw1 bg-transparent bb bt-0 br-0 bl-0 pa2 near-black mb3"
              required={true}
            />
            <label
              htmlFor="name"
              className="pl2 db fw6 avenir f4 blue small-caps"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              inputMode="tel"
              className="f4 b--light-pink bw1 bg-transparent bb bt-0 br-0 bl-0 pa2 near-black mb3"
              required={true}
            />
          </form>
        </div>
      </div>
    )
  }

  render(): ReactElement {
    return (
      <>
        <button
          className="ttu fw6 bg-animate hover-bg-light-pink blue b--blue br-pill ba bw2 w-40 pv2 db pointer center mt2"
          onClick={this._unhide}
        >
          Checkout
        </button>
        {this._renderModal()}
      </>
    )
  }
}
