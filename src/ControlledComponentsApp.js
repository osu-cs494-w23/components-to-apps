import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // console.log("change event:", event)
    console.log("change event.target.value:", event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(`Hello ${this.state.name}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input onChange={this.handleChange} value={this.state.name} type="text"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App
