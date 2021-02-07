import React from "react";
import Search from "./Search";

function Header({filterQuery}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterQuery={filterQuery}/>
    </header>
  );
}

export default Header;
