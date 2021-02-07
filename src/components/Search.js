import React, {useState} from "react";

function Search({filterQuery}) {

  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }



  function handleSubmit(e){
    e.preventDefault()
    filterQuery(query)
    setQuery("")
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
