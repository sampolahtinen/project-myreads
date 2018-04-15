import React from 'react'
import './App.css'
import Book from './Book';

class CurrentBooks extends React.Component {
    state = {
        currentBooks: [
            {
              id: "nggnmAEACAAJ",
              title: "The Linux Command Line",
              author: "William E. Shotts, Jr.",
              imageLinks: {
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              }
            },
            {
              id: "nggnmAEACAAJ22",
              title: "Masa menee toihin",
              author: "William E. Shotts, Jr.",
              imageLinks: {
                thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              }
            }
          ]
        }

    moveBook = (shelf) => {
        
    }

    render() {
        return(
            <section className='current-books'>
                <h2 className='section-title'>Current Books</h2>
                <hr/>

                <ol className='current-books-list'>
                {this.state.currentBooks.map((book)=>(
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

export default CurrentBooks