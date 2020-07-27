import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  function handleClick() {
    props.search(searchValue);
  }
  return (
    <div className="searcharea">
      <input
        placeholder="Search for certain dish ex. Pasta, Steak, Burgers, Salad ..."
        onChange={handleChange}
        value={searchValue}
        className="form-control"
      ></input>
      <button type="button" className="btn btn-dark" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
