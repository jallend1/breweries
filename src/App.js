import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Filters from "./Components/Filters";
import BreweryCard from "./Components/BreweryCard";
import Brewery from "./Components/Brewery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      search: "",
      state: "All",
    };
  }
  componentDidMount() {
    this.fetchBreweries();
  }

  fetchBreweries(searchTerm = "") {
    let url = "https://api.openbrewerydb.org/breweries";
    if (searchTerm) {
      url += `?by_name=${this.state.search}`;
    }
    console.log(url);
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

  searchBreweries() {}
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header className="center">
            <h1>Breweries</h1>
            <NavBar />
            <Filters
              handleSearch={this.handleSearch}
              handleSubmit={this.handleSubmit}
            />
          </header>
          <main>
            <Route exact path="/breweries">
              {this.state.breweries.length
                ? this.state.breweries.map((brewery) => (
                    <BreweryCard brewery={brewery} key={brewery.id} />
                  ))
                : null}
            </Route>
            <Route path="/breweries/:id">
              <Brewery />
            </Route>
            <Route exact path="/">
              <p>Home Page!</p>
            </Route>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
