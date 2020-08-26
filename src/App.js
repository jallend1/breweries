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
    fetch("https://api.openbrewerydb.org/breweries/54")
      .then((res) => res.json())
      .then((breweries) => this.setState({ breweries }));
  }
  searchBreweries() {
    const searchURL = "https://api.openbrewerydb.org/breweries/search?query=";
  }
  render() {
    return (
      <div className="container">
        <header className="center">
          <h1>Breweries</h1>
          <NavBar />
        </header>
        <main>
          <Brewery breweries={this.state.breweries} />;
        </main>
      </div>
    );
  }
}
export default App;
