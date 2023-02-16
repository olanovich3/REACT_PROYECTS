import "./Cocktail.css";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Axios from "axios";

const Cocktail = () => {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  const { number } = useParams();

  const getCocktail = async () => {
    const info = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
    );
    const data = info.data.drinks;

    setDetail(data.filter((item) => item.idDrink === number)[0]);
  };
  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <main>
      <figure className="cocktail-detail">
        <NavLink className="home" to="/">
          HOME
        </NavLink>
        <h1>{detail.strDrink}</h1>
        <nav className="information">
          <img src={detail.strDrinkThumb} alt={detail.strDrink} />
          <div className="information-detail">
            <h2>INGREDIENTS</h2>
            <div className="ingredients">
              <h2>{detail.strIngredient1}</h2>
              <h2>{detail.strIngredient2}</h2>
              <h2>{detail.strIngredient3}</h2>
              <h2>{detail.strIngredient4}</h2>
              <h2>{detail.strIngredient5}</h2>
              <h2>{detail.strIngredient6}</h2>

              <h2>{detail.strGlass}</h2>
              <h2>TYPE:{detail.strAlcoholic}</h2>
            </div>
            <h2>{detail.trAlcoholic}</h2>
            <h2>{detail.strInstructions}</h2>

            {detail.strVideo ? (
              <a href={detail.strVideo}>
                <img
                  src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676301094/SocialMedia%20Icons/youtube_xh2nkm.png"
                  alt="youtube"
                />
              </a>
            ) : null}
          </div>
        </nav>
      </figure>
    </main>
  );
};

export default Cocktail;
