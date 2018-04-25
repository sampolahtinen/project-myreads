import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        shelf: this.props.book.shelf,
    }

    componentWillMount = () => {
        if (this.props.book.imageLinks === undefined) this.props.book.imageLinks = { thumbnail: "no cover"}
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="books"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>   

            <div className='book'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`, backgroundColor: "grey"}}>
                <div className='book-shelf-changer' >
                    <div className='book-shelf-menu'>
                        <select defaultValue={this.state.shelf} onChange={(event)=>{
                            this.props.updateShelf(this.props.book, event.target.value)
                            this.setState({shelf: event.target.value})
                        }}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className='book-info-wrapper'>
                    <h3 className='book-title'>{this.props.book.title}</h3>
                    <p className='book-author'>{this.props.book.authors}</p>
                </div>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Book