import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) { // all js classed have a function called constructor, which is called automatically when a class is constructed
    super(props) // the parent component is called with super()

    this.state = { term: ''} // creating a new object and pushing it to this.state, in this case an empty string
  }

  render() {
    // we ALLWAYS manipulate the state with this.setState!
    // by adding value and reffering it to this.state.term the state is actually only really being changed, previously it was only triggering an event but not really changing the input value
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={ event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}


export default SearchBar
