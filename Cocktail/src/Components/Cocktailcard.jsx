import "./Cocktailcard.css";
import { Link } from "react-router-dom";

const Cocktailcard = ({ cocktail }) => {
  return (
    <section className="card">
      {cocktail.map((item) => {
        return (
          <Link
            className=""
            key={item.idDrink}
            to={`cocktailfinder/${item.strDrink}/${item.idDrink}`}
          >
            <div>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h1>{item.strDrink}</h1>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Cocktailcard;
