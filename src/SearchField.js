import React from 'react'
import './App.css'

class SearchField extends React.Component {
    render() {
        return (
            <div className='search-field-wrapper'>
                <input 
                    className='search-field' 
                    type='text' placeholder='Search new books...'
                    />
            </div>
        )
    }
}

export default SearchField