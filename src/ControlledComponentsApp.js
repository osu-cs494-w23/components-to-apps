import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <form>
        <label>
          Name
          <input type="text"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App
