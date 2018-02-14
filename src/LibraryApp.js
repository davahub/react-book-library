import React, { Component } from 'react';
import logo from './book-logo.png';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import './LibraryApp.css';

class LibraryApp extends Component {
  renderBook(name, author, price, image) {
    return <Book name={name} author={author} price={price} image={image}/>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Library</h1>
        </header>

        <p className="App-intro">
          Prototype Library demo add, edit search books.
        </p>

        <p className="search">
          search books:
          <input type="text" name="txtSearch"/>
        </p>

        {this.renderBook("Harry Potter", "J.K. Rowling", 20, book2 )}
        
        {this.renderBook("Hacking Secret Codes with Python", "Al Sweigart", 10, book1 )}

      </div>
    );
  }
}
  
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      author: null,
      price: 0,
      image: null,
    };
  }

  render() {
    return (
      <a href='#'>
      <img src={this.props.image} width='263' height='348' alt='book1'/> 
      <p>{this.props.name} <span class='price'>&pound;{this.props.price}</span></p>
      <p>{this.props.author}</p>
      </a>
    );
  }
}


export default LibraryApp;
