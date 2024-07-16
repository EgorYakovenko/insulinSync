import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.container}>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink className={css.item} to="/diary">
        Дневник
      </NavLink>
      <NavLink className={css.item} to="/about-produkt">
        Узнать о продукте
      </NavLink>
      <NavLink className={css.item} to="/create-dish">
        Составить блюдо
      </NavLink>
    </nav>
  );
}
