import React from 'react'
//import { Link } from 'react-router-dom'
//import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import './App.css'
//import SearchBooks from './SearchBooks'

class SearchField extends React.Component {
    state = {
        query: ''
    }

    navigateToSearch = (event)  => {
        if (event.key === 'Enter') {
            console.log("MOOOOI");
            this.setState({query: event.target.value})
        }
    }

    render() {
        if(this.state.query !== '') {
            return (
                <div>
                <Redirect push to={{
                    pathname: '/search',
                    state: {passedQuery: this.state.query}
                }}
                />
                </div>
            )
        }
        return (
            <div className='search-field-wrapper'>
                <input
                    onKeyPress={this.navigateToSearch.bind(this)} //binding this to component
                    className='search-field' 
                    type='text' placeholder='Search new books...'
                    />
            </div>
        )
    }
}

export default SearchField
