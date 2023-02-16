import "./Cocktailfinder.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Cocktailcard from "../Components/Cocktailcard";

const Cocktailfinder = () => {
  const [cocktail, setCocktail] = useState(null);
  const [printCocktail, setPrintCocktail] = useState([]);
  const searchCocktail = async () => {
    const info = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    const data = info.data.drinks;

    setPrintCocktail(data);
    console.log(printCocktail);
  };

  useEffect(() => {
    searchCocktail();
  }, [cocktail]);
  return (
    <div className="cocktail-card">
      <div className="search">
        <h1>𝔻𝕚𝕤𝕖ñ𝕒 𝕪 𝕓𝕖𝕓𝕖 𝕢𝕦𝕖 𝕝𝕒 𝕧𝕚𝕕𝕒 𝕖𝕤 𝕓𝕣𝕖𝕧𝕖</h1>
        <input
          type="text"
          onChange={(event) => setCocktail(event.target.value)}
        />
      </div>
      <div className="section">
        {printCocktail == null || cocktail == "" ? (
          <h2>🅝🅞 🅒🅞🅒🅚🅣🅐🅘🅛 🅜🅐🅣🅒🅗</h2>
        ) : (
          <Cocktailcard cocktail={printCocktail} />
        )}
      </div>
    </div>
  );
};

export default Cocktailfinder;
