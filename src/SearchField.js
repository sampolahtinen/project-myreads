import React from 'react'
import { Redirect } from 'react-router-dom'
import './App.css'
import arrowForward from "./icons/arrow-forward.svg";
import { Link } from "react-router-dom";
//import SearchBooks from './SearchBooks'

class SearchField extends React.Component {
  state = {
    query: "",
    redirect: 'false'
  };

  navigateToSearch = event => {
    if (event.key === "Enter" && this.state.query !== '') {
      this.setState({redirect: 'true'})
    }
  };
  //this was inside redirect search: `?query=${this.state.query}`
  render() {
    return <div className="search-field-wrapper">
        {this.state.redirect === "true" && <Redirect push to={{ pathname: "/search" }} />}
        <input 
          onKeyPress={this.navigateToSearch.bind(this)} 
          onChange={(event)=> {
            this.setState({query: event.target.value})
            this.props.updateFirstQuery(event.target.value)
            }} 
          className="search-field" type="text" 
          placeholder="Search new books..." />

        <div className="add-icon">
          <img alt="add new books icon" src={arrowForward} onClick={()=>this.setState({redirect: 'true'})} />
        </div>
      </div>;
  }
}

export default SearchField