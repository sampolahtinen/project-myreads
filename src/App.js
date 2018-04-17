import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchField from './SearchField'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    showSearchPage: false,
    firstSearchQuery: ''
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getAllBooks();
  }

  updateShelf = (book,shelf) => {
    BooksAPI.update(book, shelf).then((res)=>{
      this.getAllBooks()
    })
  }
//Method to call within SearchField component to get the first search query
  updateFirstQuery = (firstQuery) => {
    this.setState({firstSearchQuery: firstQuery})
  }

  render() { 
    return (
      <div className="app">
      <Link to='/'>
        <header className="app-header">
          <h1>myReads</h1>
        </header>
        </Link>
        
        <Route exact path="/" render={()=>(
          <div>
            <SearchField updateFirstQuery={this.updateFirstQuery}/>
            <BooksList 
              books={this.state.books}
              updateShelf={this.updateShelf}/> 
          </div>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks
            selectedBooks={this.state.books} 
            firstQuery={this.state.firstSearchQuery}
            updateShelf={this.updateShelf}/>
        )}/>
      </div>

    )
  }
}

export default BooksApp



