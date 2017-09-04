import React, {Component} from 'react';

import FruitBasket from './FruitBasket';


class App extends Component {
	constructor(){
		super();

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}


  componentWillMount() {
  	this.fetchFilters()
  	this.fetchFruits()
  }


  fetchFruits = () => {
  fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

    fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

	handleChange = (event) => {
		this.setState ({
			currentFilter: event.target.value
		})
	}

	render(){
		return <div>
		<FruitBasket fruit={this.state.fruit} filters={this.state.filters} selectedFilter={this.state.currentFilter} handleFilterChange={this.handleChange}/>
		</div>
	}
}

export default App;
