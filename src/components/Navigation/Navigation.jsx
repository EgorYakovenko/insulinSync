import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink className={css.item} to="/">
        Дневник
      </NavLink>
      <NavLink className={css.item} to="/">
        Узнать о продукте
      </NavLink>
      <NavLink className={css.item} to="/">
        Составить блюдо
      </NavLink>
    </nav>
  );
}
