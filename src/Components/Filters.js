import React from 'react';
const Filters = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className="input-field">
          <i className="material-icons prefix">search</i>
          <input
            id="search"
            type="text"
            onChange={props.handleSearch}
            placeholder="Search for brewery by name..."
          ></input>
          <label className="label-icon active"></label>
        </div>
      </form>
    </>
  );
};

export default Filters;
