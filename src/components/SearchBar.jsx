import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

class SearchBar extends Component {
  
  state = {term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Video Search</label>
        <input 
          name="Search"
          value={this.state.term}
          placeholder="Search"
          onChange={this.onInputChange}
        />
        </form>
      </div>
    )
  }
}

export default SearchBar;