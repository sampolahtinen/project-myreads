import React from 'react'
import { Redirect } from 'react-router-dom'
import './App.css'
//import SearchBooks from './SearchBooks'

class SearchField extends React.Component {
  state = {
    query: ""
  };

  navigateToSearch = event => {
    if (event.key === "Enter") {
      console.log("MOOOOI");
      this.props.updateFirstQuery(event.target.value);
      this.setState({ query: event.target.value });
    }
  };
  //this was inside redirect search: `?query=${this.state.query}`
  render() {
    return (
      <div className="search-field-wrapper">
        {this.state.query !== "" ? (
          <Redirect
            push
            to={{
              pathname: "/search"
            }}
          />
        ) : null}
        <input
          onKeyPress={this.navigateToSearch.bind(this)} //binding this to component
          className="search-field"
          type="text"
          placeholder="Search new books..."
        />
      </div>
    );
  }
}

export default SearchField