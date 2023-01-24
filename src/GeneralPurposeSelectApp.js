import React from 'react'

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren",
  darth: "Darth Vader"
}

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
}

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   value: Object.keys(this.props.options)[0]
    // }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({
    //   value: event.target.value
    // })
    this.props.handleChange(event.target.value)
  }

  render() {
    // console.log("== selected value:", this.state.value)
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        {Object.keys(this.props.options).map(key => (
          <option key={key} value={key}>
            {this.props.options[key]}
          </option>
        ))}
      </select>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starWarsValue: Object.keys(starWarsOptions)[0],
      petValue: Object.keys(petOptions)[0]
    }
    this.handleStarWarsChange = this.handleStarWarsChange.bind(this)
    this.handlePetChange = this.handlePetChange.bind(this)
  }

  handleStarWarsChange(newValue) {
    this.setState({
      starWarsValue: newValue
    })
  }

  handlePetChange(newValue) {
    this.setState({
      petValue: newValue
    })
  }

  render() {
    // const numbers = [1, 2, 3, 4, 5]
    // console.log(numbers.map(elem => elem * elem))
    return (
      <>
        {/* <ul>
          {numbers.map((elem, idx) => <li key={elem * elem}>{elem * elem}</li>)}
        </ul> */}
        <form onSubmit={(event) => {
          event.preventDefault()
          console.log(`== ${this.state.starWarsValue} ${this.state.petValue}`)
        }}>
          <Dropdown
            options={starWarsOptions}
            value={this.state.starWarsValue}
            handleChange={this.handleStarWarsChange} />

          <Dropdown options={petOptions}
            value={this.state.petValue}
            handleChange={this.handlePetChange} />

          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default App
