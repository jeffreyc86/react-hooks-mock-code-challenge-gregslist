import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Sort from "./Sort"
import ListingForm from "./ListingForm"

function App() {
  const API = "http://localhost:6001/listings/"

  const [listings, setListings] = useState([])
  const [query, setQuery] = useState("")
  const [sorted, setSorted] = useState(false)


  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(listingsArr => {
      setListings(listingsArr)
    })
  },[])

  function filterQuery(string) {
   setQuery(string)
  }

  function deleteFromArray(id) {
    const newArray = listings.filter(listing => {return listing.id != id})
    setListings(newArray)
  }

  function updateArray(newObj) {
    setListings([...listings, newObj])
  }

  let filteredListings = sorted ? [...listings].filter(listing => listing.description.toLowerCase().includes(query.toLowerCase())).sort((a,b) => {return a.location.localeCompare(b.location)}) 
  : [...listings].filter(listing => listing.description.toLowerCase().includes(query.toLowerCase()))
      
  

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} filterQuery={filterQuery}/>
      <Sort sorted={sorted} setSorted={setSorted}/>
      <ListingForm updateArray={updateArray} />
      <ListingsContainer listings={filteredListings} deleteFromArray={deleteFromArray}/>
    </div>
  );
}

export default App;
