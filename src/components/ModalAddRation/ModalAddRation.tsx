import { Formik, Form, Field } from "formik";
import css from "./ModalAddRation.module.css";

interface IFormValues {
  daytime: string;
  food: string;
  glucose: number;
  insulin1: number;
  insulin2: number;
  quantity: number;
  unit: string;
}

export default function ModalAddRation() {
  const initialValues: IFormValues = {
    daytime: "",
    food: "",
    glucose: 0,
    insulin1: 0,
    insulin2: 0,
    quantity: 0,
    unit: "",
  };
  const handleSubmit = (values: IFormValues | number) => {
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field className={css.select} as="select" name="daytime">
            <option className={css.option} value="breakfast">
              Завтрак
            </option>
            <option className={css.option} value="lunch">
              Обед
            </option>
            <option className={css.option} value="dinner">
              Ужин
            </option>
            <option className={css.option} value="snack">
              Перекус
            </option>
          </Field>
          <div className={css.dateContainer}>
            <p>24.06.2024</p>
            <p>10:15</p>
          </div>
          <div className={css.test}>
            <label className={css.foodInput}>
              <Field type="text" name="food" placeholder="Еда"></Field>
              <Field type="text" name="food1" placeholder="Еда"></Field>
            </label>
            <div>
              <Field className={css.test2} type="text" name="quantity"></Field>
              <Field
                className={css.test2}
                type="text"
                name="unit"
                placeholder="Ед.изм"
              ></Field>
            </div>
            <div>
              <p>5ед</p>
              <p>5ед</p>
            </div>
          </div>

          <div className={css.countContainer}>
            <label>
              Замер глюкозы
              <Field type="text" name="glucose"></Field>
            </label>
            <div>
              <p>5.3</p>
            </div>
            <label>
              Инсулин 1<Field type="text" name="insulin1"></Field>
            </label>
            <label>
              Инсулин 2<Field type="text" name="insulin2"></Field>
            </label>
            {/* <label>
              Кол-во
              <Field type="text" name="quantity"></Field>
            </label>
            <label>
              Ед.изм
              <Field type="text" name="unit"></Field>
            </label>
            <div>5ед</div> */}
          </div>
        </Form>
      </Formik>
    </>
  );
}
