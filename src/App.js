// TODO: Filter bar should search states on state page; Does nothing presently

import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Filters from './Components/Filters';
import Home from './Components/Home';
import Brewery from './Components/Brewery';
import Breweries from './Components/Breweries';
import States from './Components/States';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      search: ''
    };
  }
  componentDidMount() {
    this.fetchBreweries();
  }

  fetchBreweries(searchTerm = '') {
    let url = 'https://api.openbrewerydb.org/breweries';
    if (searchTerm) {
      url += `?by_name=${this.state.search}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((breweries) => this.setState({ breweries }));
  }

  handleSearch = (e) => {
    this.setState(
      { [e.target.id]: e.target.value },
      this.fetchBreweries(e.target.value)
    );
  };

  handleStateFilter = (state) => {
    this.setState({ state });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container ">
          <header className="center">
            <h1>Brewery Finder 1.0</h1>
            <NavBar />
            <Filters
              handleSearch={this.handleSearch}
              handleSubmit={this.handleSubmit}
            />
          </header>
          <main>
            <Route
              exact
              path="/breweries"
              render={(props) => (
                <Breweries {...props} breweries={this.state.breweries} />
              )}
            />
            <Route
              path="/breweries/:id"
              render={(props) => <Brewery {...props} />}
            />
            <Route
              path="/states"
              render={(props) => (
                <States
                  {...props}
                  handleSearch={this.handleSearch}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route exact path="/">
              {/* If the search field is blank, show home. Otherwise redirect to the breweries results page */}
              {this.state.search ? <Redirect to="/breweries" /> : <Home />}
            </Route>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
