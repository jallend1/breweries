import React from "react";
import NavBar from "./Components/NavBar";
import Brewery from "./Components/Brewery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      searchBar: "",
    };
  }
  componentDidMount() {
    this.fetchBreweries();
  }

  fetchBreweries() {
    let url = "https://api.openbrewerydb.org/breweries/";
    if (this.state.searchBar.length) {
      url += `/search?query=${this.state.searchBar}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((breweries) => this.setState({ breweries }));
  }

  handleSearch = (e) => {
    this.setState({ searchBar: e.target.value }, this.fetchBreweries());
  };

  searchBreweries() {}
  render() {
    return (
      <div className="container">
        <header className="center">
          <h1>Breweries</h1>
          <NavBar handleSearch={this.handleSearch} />
        </header>
        <main>
          {this.state.breweries.length
            ? this.state.breweries.map((brewery) => (
                <Brewery brewery={brewery} key={brewery.id} />
              ))
            : null}
        </main>
      </div>
    );
  }
}
export default App;
