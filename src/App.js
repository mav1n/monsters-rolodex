import React from 'react';
import './App.css';
import { CardListComponent } from './components/CardList/CardListComponent';
import { SearchBoxComponent } from './components/SearchBox/SearchBoxComponent';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBoxComponent placeholder='seach monsters' handleChange={this.handleChange} />
        <CardListComponent monsters={filteredMonsters} />
      </div>
  );
  }
}

export default App;