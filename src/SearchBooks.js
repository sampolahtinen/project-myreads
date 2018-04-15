import React from 'react'
import './App.css'
//import SearchField from './SearchField'
//import Book from './Book'

class SearchBooks extends React.Component {

    state = {
        query: this.props.location.state.passedQuery
    }

    render() {
        return (
            <div className='search-field-wrapper'>
                <input
                    className='search-field' 
                    type='text' 
                    placeholder={this.state.query}
                    />
            </div>
        )
    }
}

export default SearchBooks