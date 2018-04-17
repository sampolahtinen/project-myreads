import React from 'react'
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'

class BooksList extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        let currentBooks = this.props.books.filter((book)=> book.shelf === 'currentlyReading');
        let finishedBooks = this.props.books.filter((book)=> book.shelf === 'read');
        let wishList = this.props.books.filter((book)=> book.shelf === 'wantToRead');
        return (
            <div className='book-list'>
                <section className='current-books'>
                    <h2 className='section-title'>Current Books</h2>
                    <hr/>

                    <ol className='books-list'>
                    {currentBooks.map((book)=>(
                        <li key={book.id} className='book-list-item'>
                            <Book book={book} updateShelf={this.props.updateShelf}/>
                        </li>
                    ))}
                    </ol>
                </section>

                <section className='finished-books'>
                    <h2 className='section-title'>Finished</h2>
                    <hr/>
                    <ol className='books-list'>
                    {finishedBooks.map((book)=>(
                        <li key={book.id} className='book-list-item'>
                            <Book book={book} updateShelf={this.props.updateShelf}/>
                        </li>
                    ))}
                    </ol>
                </section>

                <section className='wishlist'>
                    <h2 className='section-title'>Wishlist</h2>
                    <hr/>
                    <ol className='books-list'>
                    {wishList.map((book)=>(
                        <li key={book.id} className='book-list-item'>
                            <Book book={book} updateShelf={this.props.updateShelf}/>
                        </li>
                    ))}
                    </ol>
                </section>
            </div>
        )
    }
}

export default BooksList