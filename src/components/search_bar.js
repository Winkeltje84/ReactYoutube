import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) { // all js classed have a function called constructor, which is called automatically when a class is constructed
    super(props) // the parent component is called with super()

    this.state = { term: ''} // creating a new object and pushing it to this.state, in this case an empty string
  }

  render() {
    // we ALLWAYS manipulate the state with this.setState!
    return (
      <div>
        <input onChange={ event => this.setState({ term: event.target.value })} />
        Value of the input: { this.state.term }
      </div>
    )
  }
}


export default SearchBar
