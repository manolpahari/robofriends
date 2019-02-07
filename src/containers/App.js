import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [] ,
      searchfield: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((user) => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (robots.length === 0) ?  
      <h1>LOADING...</h1> :
  
    (
      <div className='tc'>
        <h1 className='f1'>ROBOFRIENDS</h1>
          <SearchBox searchFilter={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
      </div>
    );
    
  }

}

export default App;
