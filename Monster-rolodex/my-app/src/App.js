import React, { Component } from 'react';
import './App.css';
import { CardList } from "./Componets/Cards/Card-list";

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList name="cards">
          {this.state.monsters.map(monsters => (<h1 key={monsters.id}>{monsters.name}</h1>))}
        </CardList>
      </div>
    );
  }
}

export default App;
