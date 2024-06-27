import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Дневник</NavLink>
      <NavLink to="/">Узнать о продукте</NavLink>
      <NavLink to="/">Составить блюдо</NavLink>
    </nav>
  );
}
