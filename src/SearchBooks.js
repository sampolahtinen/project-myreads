import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import arrowBack from "./icons/arrow-back.svg";
import searchTerms from './searchTerms.json'

class SearchBooks extends React.Component {
    static propTypes = {
        selectedBooks: PropTypes.array,
        firstQuery: PropTypes.string,
        updateShelf: PropTypes.func.isRequired
    }
    state = {
        query: this.props.firstQuery,
        books: [],
        validQuery: true
    }
    componentDidMount = () => {
        if(this.state.query === '') return
        this.searchBooks(this.state.query)
    }

    assignShelf = (SearchBooks) => {
        SearchBooks.forEach(book => {
            //Find returns the first matched element from the array it is called on. IF not found, return undefined
            let selectedBook = this.props.selectedBooks.find( userBook => userBook.id === book.id  )
            //console.log(selectedBook)
            if(selectedBook) {
                book.shelf = selectedBook.shelf
            } else {
                book.shelf = 'none'
            }
        })
    }
    searchBooks = (query) => {
        if (query === '') return
        BooksAPI.search(query).then((books) => {
            books.forEach((book) => { if(book.imageLinks === undefined) book.imageLinks = { thumbnail: "no cover" }})
            this.assignShelf(books);
            this.setState({
                books: books
            });
        }).catch(error => console.log(error))
    }
    validateSearchQuery = (query) => {
        //console.log("query at validateSearchQuery function: " + query)
        let match = new RegExp(query, 'i')
        let filteredTerms = searchTerms.searchTerm.filter(term => match.test(term))
        if (filteredTerms.length > 0) {
            this.setState({
                validQuery: true
            })
            return true
        } else {
            this.setState({
                validQuery: false
            })
            return false
        }
    }
    updateQuery = (query) => {
        //console.log("query at updateQuery function: " + query)
        this.setState({query: query});
        if (this.validateSearchQuery(query)) {
            //console.log("Result of validateSearcQuery: " + this.validateSearchQuery(query))
            this.searchBooks(query);
        } else { return }
    }
    
    render() {
        return (
            <div>
                <div className="search-field-wrapper">
                    <input
                        className="search-field"
                        type="text"
                        placeholder="Search new books..."
                        value={this.state.query}
                        onChange={event => this.updateQuery(event.target.value)}/>
                </div>
                <Link to="/">
                    <div className="back-arrow">
                        <img alt="arrow back icon" src={arrowBack} />
                    </div>{" "}
                </Link>
                <div className="book-list">
                    <section className="search-books">
                        <h2 className="section-title">Search Results</h2>
                        <hr />
                        {this.state.query !== "" && this.state.validQuery === true &&
                            <ol className="books-list">
                                {this.state.books.length > 0 && this.state.books.map(
                                    book => (
                                        <li key={book.id} className="book-list-item">
                                            <Book
                                                book={book}
                                                updateShelf={this.props.updateShelf}
                                            />
                                        </li>
                                    )
                                )}
                            </ol>
                        }
                        {this.state.validQuery === false && <h3 className="no-results">No results :(...</h3>}
                    </section>
                </div>
            </div>
        )
        }
}

export default SearchBooks