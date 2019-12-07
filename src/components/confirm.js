import React from 'react'
import ReactDOM from 'react-dom'
import './confirm.css'

class Confirm extends React.Component {
  render() {
    const { text } = this.props

    return (
      <>
        <div className="confirm">{text}</div>
      </>
    )
  }
}

export default function confirm(txt) {
  return new Promise(resolve => {
    let confirmRef = React.createRef()
    let node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Confirm ref={confirmRef} text={txt} />, node, () => {
      let res = ReactDOM.findDOMNode(confirmRef.current)
      resolve(res)
    })
  })
}