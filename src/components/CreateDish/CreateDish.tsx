import { useRef } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

import css from "./CreateDish.module.css";

export default function CreateDish() {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? "/");
  return (
    <>
      <Link to={goBackLink.current}>Назад</Link>
      <h4>Составить блюдо</h4>
      <div className={css.containerSearch}>
        <NavLink className={css.item} to="/add-new-dich">
          Добавить
        </NavLink>

        <button type="button">Добавить</button>
        <input type="search" name="" id="" placeholder="Поиск" />
      </div>
      <div className={css.containerCard}>
        <div className={css.text}>
          <p>Борщ</p>
        </div>
        <div className={css.text}>
          <p>Б: 50</p>
          <p>Ж: 40</p>
          <p>У: 150</p>
          <p>К: 1200</p>
        </div>
        <div className={css.column2}>
          <p>ХЕ: 6</p>
          <p>ГИ: 5</p>
          <p>ГН: 36</p>
        </div>
        <div>
          <p className={css.amountImsulin}>
            Инсулин 1: <span>10ед</span>
          </p>
          <p className={css.amountImsulin}>
            Инсулин 2: <span>35ед</span>
          </p>
        </div>
        <div className={css.text}>
          <p>Мин: 4</p>
          <p>Ср: 5</p>
          <p>Макс: 8</p>
        </div>
        <div className={css.button}>
          <button type="button">Ред</button>
          <button type="button">Удалить</button>
        </div>
      </div>
    </>
  );
}
