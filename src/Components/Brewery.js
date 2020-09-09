import React from "react";

class Brewery extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-title center">{this.props.brewery.name}</div>
          <div className="card-content center">
            <div>
              <p>
                Location: {this.props.brewery.city}, {this.props.brewery.state}
              </p>
              <a href={this.props.brewery.website_url}>
                {this.props.brewery.website_url}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Brewery;
