import React, { Component } from 'react';
import './App.css';
import { CardList } from "./Componets/Cards-list/Card-list.component";
import { SearchBox } from "./Componets/SearchBox/Search-Box.component";

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchBox } = this.state;
    const filteredNames = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBox.toLowerCase())
    );

    return (
      <div className='App'>

        <SearchBox
          placeholder="Search for Monsters"
          change={e => { this.setState({ searchBox: e.target.value }) }}
        />

        <CardList monsters={filteredNames} />
      </div>
    );
  }
}

export default App;
