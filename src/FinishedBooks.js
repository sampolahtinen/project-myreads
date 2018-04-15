import React from 'react'
import './App.css'
import Book from './Book';

class FinishedBooks extends React.Component {

    render() {
        return(
            <section className='finished-books'>
                <h2 className='section-title'>Finished</h2>
                <hr/>

                <ol className='books-list'>
                {this.props.books.map((book)=>(
                    <li key={book.id} className='current-books-list-item'>
                        <Book 
                        bookCover={book.imageLinks.thumbnail}
                        bookTitle={book.title}
                        bookAuthor={book.author}
                        bookShelf={'currentBooks'}/>
                    </li>
                ))}
                </ol>

            </section>
        )
    }
}

export default FinishedBooks