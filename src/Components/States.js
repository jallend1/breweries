import React, { useState } from 'react';

const States = () => {
  const states = [
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

  const renderStates = () => {
    return states.map((state) => {
      console.log(activeState);
      let url;
      state.includes(' ')
        ? (url = `images/states/${state
            .replaceAll(' ', '-')
            .toLowerCase()}.png`)
        : (url = `./images/states/${state.toLowerCase()}.png`);
      return (
        <div key={state} className="state">
          <h5
            onClick={(e) => setActiveState(e.target.textContent.toLowerCase())}
          >
            {state}
          </h5>
          <img src={url} alt={state} />
        </div>
      );
    });
  };

  return (
    <>
      <div className="statelist">{renderStates()}</div>
    </>
  );
};

export default States;
