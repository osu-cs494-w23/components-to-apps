import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(oldState => ({
      isOn: !oldState.isOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? "ON" : "OFF"}
      </button>
    )
  }
}

function App(props) {
  return (
    <div>
      <Toggle />
      <button onClick={(e) => {
        console.log("The button was clicked, event:", e)
      }}>
        This is a button
      </button>
      <a
        href="https://web.engr.oregonstate.edu/~hessro/teaching/cs494-w23"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.preventDefault()
          console.log("The link was clicked")
        }}
      >
        This is a link
      </a>
    </div>
  )
}

export default App
