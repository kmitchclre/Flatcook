import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CookBookCard({ cookbook, setActiveRecipies }) {
  const { cookbook_name, img_url, id } = cookbook;
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/CookBooksPage/${id}`);
  }

  return (
    <div className="card">
      <img src={img_url} />
      <h2>{cookbook_name}</h2>
      <div className="button">
        <button onClick={handleClick}>View Recipes</button>
      </div>
    </div>
  );
}

export default CookBookCard;
