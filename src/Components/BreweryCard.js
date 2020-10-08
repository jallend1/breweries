import React from 'react';
import { Link } from 'react-router-dom';
import CardContent from './CardContent';

class BreweryCard extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-title center">
            <Link
              to={{
                pathname: `/breweries/${this.props.brewery.id}`,
                state: this.props.brewery
              }}
            >
              {this.props.brewery.name}
            </Link>
          </div>
          <CardContent brewery={this.props.brewery} />
        </div>
      </>
    );
  }
}

export default BreweryCard;
