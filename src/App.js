import React from 'react'
import { Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchField from './SearchField'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
//import Book from './Book';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    showSearchPage: false
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

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>myReads</h1>
        </header>
        
        <Route exact path="/" render={()=>(
          <div>
            <SearchField/>
            <BooksList 
              books={this.state.books}
              updateShelf={this.updateShelf}/> 
          </div>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
