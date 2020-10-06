import React from 'react';
import BreweryCard from './BreweryCard';
const Breweries = (props) => {
  console.log(props);
  return (
    <>
      {props.breweries.length ? (
        props.breweries.map((brewery) => (
          <BreweryCard brewery={brewery} key={brewery.id} />
        ))
      ) : (
        <p>Loading breweries...</p>
      )}
    </>
  );
};

export default Breweries;
