import React from "react";

class Brewery extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="card">
          <div className="card-title">{this.props.breweries.name}</div>
          <div className="card-content">
            <div>
              <p>
                Location: {this.props.breweries.city},{" "}
                {this.props.breweries.state}
              </p>
              <a href={this.props.breweries.website_url}>
                {this.props.breweries.website_url}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Brewery;
