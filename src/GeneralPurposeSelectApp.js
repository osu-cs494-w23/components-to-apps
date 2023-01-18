import React from 'react'

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren"
}

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <form>
        <select>
          <option value="rey">Rey</option>
          <option value="luke">Luke Skywalker</option>
          <option value="leia">Leia Organa</option>
          <option value="finn">Finn (FN-2187)</option>
          <option value="kylo">Kylo Renn</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App
