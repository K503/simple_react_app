import React, { Component } from 'react';
import './App.css';
import CardList  from './components/card-list/cardList'
import SearchBox from './components/search-box/SearchBox';

class App extends Component{
  constructor(){
    super();  
    
    this.state = {
      monsters : [],
      searchField: ''
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(monster => monster.json()).then(users => this.setState({monsters: users}))
  }
  handleChange =(e) => {
    this.setState({ searchField: e.target.value })
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>My Monsters</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;