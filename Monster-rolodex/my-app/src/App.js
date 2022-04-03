import React, { Component } from 'react';
import './App.css';

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
      <cards>
        <div className='App'>
          {this.state.monsters.map(monsters => (<h1 key={monsters.id}>{monsters.name}</h1>))}
        </div>
      </cards>
    );
  }
}

export default App;
