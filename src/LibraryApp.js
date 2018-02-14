import React, { Component } from 'react';
import logo from './logo.svg';
import book1 from './book1.jpg';
import './LibraryApp.css';

class LibraryApp extends Component {
  renderBook(aName) {
    return <Book value={aName} name="33"/>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Library</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       
        {this.renderBook(1)}

        {this.renderBook(2)}
      </div>
    );
  }
}
  
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  render() {
    return (
      <a href='#'>
      <img src={book1} width='158' height='158' alt='book1'/> 
      <p>Brighton Bed {this.props.value} {this.props.name} <span class='price'>&pound;1157</span></p>
      </a>
    );
  }
}


export default LibraryApp;
