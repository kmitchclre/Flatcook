import React, { useState, useEffect } from "react";
import CookBookCard from "./CookBookCard";

function CookBooks({ cookbooks, setActiveRecipies }) {
  const cookbookCards = cookbooks.map((cookbook) => {
    return (
      <CookBookCard
        key={cookbook.id}
        cookbook={cookbook}
        // setActiveRecipies={setActiveRecipies}
      />
    );
  });

  return <ul className="cards">{cookbookCards}</ul>;
}

export default CookBooks;
