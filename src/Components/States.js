// TODO: Add button or other identifier to click to expand; Make state image bigger on hover?

import React, { useState } from 'react';
import BreweryCard from './BreweryCard';
const States = () => {
  const states = [
    'All',
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  const [activeState, setActiveState] = useState('all');
  const [breweries, setBreweries] = useState('');

  const fetchBreweries = (state) => {
    // If there are any spaces in state name, replace them with underscores for API request
    const stateName = state.includes(' ')
      ? state.replaceAll(' ', '_').toLowerCase()
      : state;
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateName}`)
      .then((res) => res.json())
      .then((data) => setBreweries(data));
  };

  const filterBreweries = () => {
    // If breweries state is empty, fetch them breweries
    if (!breweries[0]) {
      fetchBreweries(activeState);
    }
    // If the first brewery's state doesn't match the active state, fetch them correct breweries
    else if (breweries[0].state.toLowerCase() !== activeState) {
      fetchBreweries(activeState);
    }
    // If everything matches up, display them breweries
    else {
      return breweries.map((brewery) => (
        <BreweryCard brewery={brewery} key={brewery.id} />
      ));
    }
  };
  const renderStates = () => {
    return (
      <>
        <div className="statelist">
          {states.map((state) => {
            let url;
            state.includes(' ')
              ? (url = `images/states/${state
                  .replaceAll(' ', '-')
                  .toLowerCase()}.png`)
              : (url = `./images/states/${state.toLowerCase()}.png`);
            return (
              <div key={state} className="state">
                <h5
                  onClick={(e) =>
                    setActiveState(e.target.textContent.toLowerCase())
                  }
                >
                  {state}
                </h5>
                <img src={url} alt={state} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  // If the activeState is "All", show the list of states. Otherwise, show the corresponding breweries
  return <>{activeState === 'all' ? renderStates() : filterBreweries()}</>;
};

export default States;
