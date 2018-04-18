import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchField from './SearchField'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import arrowBack from './icons/arrow-back.svg'
import addIcon from './icons/add.svg'
//import FontAwesomeIcon from "@fortawesome/react-fontawesome"; // https://www.npmjs.com/package/@fortawesome/react-fontawesome
//import faCoffee from "@react-fortawesome/fontawesome-free-solid/faCoffee";

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
          <Link to="/">
            <header className="app-header">
              <h1>myReads</h1>
            </header>
          </Link>

          <Route exact path="/" render={() => <div>
                <SearchField updateFirstQuery={this.updateFirstQuery} />
                <BooksList books={this.state.books} updateShelf={this.updateShelf} />
              </div>} />
          <Route path="/search" render={() => <SearchBooks selectedBooks={this.state.books} firstQuery={this.state.firstSearchQuery} updateShelf={this.updateShelf} />} />
          <Link to="/">
            <div className="back-arrow">
              <img alt='arrow back icon' src={arrowBack}/>
            </div>
          </Link>
          <Link to='/search'>
            <div className="add-icon">
              <img alt='add new books icon' src={addIcon}/>
            </div>
          </Link>
      </div>
    )}
}

export default BooksApp



