import css from "./DiaryPage.module.css";

export default function DiaryPage() {
  return (
    <>
      <div className={css.container}>
        <button type="button">Добавить</button>
        <input type="search" name="" id="" placeholder="Поиск" />
      </div>
      <div>
        <p>Завтрак</p>
        <p>Обед</p>
        <p>Ужин</p>
      </div>
      <div>
        <p>Б: 50</p>
        <p>Ж: 40</p>
        <p>У: 150</p>
        <p>К: 1200</p>
        <p>ХЕ: 6</p>
        <p>ГИ: 5</p>
        <p>ГН: 36</p>
      </div>
      <div>
        <p>Инсулин 1: 10ед</p>
        <p>Инсулин 2: 35ед</p>
      </div>
      <div>
        <p>Мин: 4</p>
        <p>Ср: 5</p>
        <p>Макс: 8</p>
      </div>
      <button type="button">Ред</button>
      <button type="button">Удалить</button>
    </>
  );
}
