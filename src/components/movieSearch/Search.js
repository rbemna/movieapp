import React from "react";

const Search = ({ setSearch }) => {
  // const change=()=>{
  //     SetSearch(e.target.value)
  // }
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
