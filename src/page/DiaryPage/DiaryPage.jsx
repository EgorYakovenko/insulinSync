import css from "./DiaryPage.module.css";

export default function DiaryPage() {
  return (
    <div className={css.container}>
      <button type="button">Добавить</button>
      <input type="search" name="" id="" placeholder="Поиск" />
    </div>
  );
}
