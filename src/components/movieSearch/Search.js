import React from "react";

const Search = ({ setSearch, setRating }) => {
  const change = (e) => {
    setSearch(e.target.value);
    //setRating(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={(e) => change(e)} />
    </div>
  );
};

export default Search;
