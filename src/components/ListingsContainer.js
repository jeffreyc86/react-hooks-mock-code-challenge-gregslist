import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteFromArray}) {
  
  const cards = listings.map(listing=>{
    return <ListingCard key={listing.id} listing={listing} deleteFromArray={deleteFromArray}/>
  })
  
  
  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
