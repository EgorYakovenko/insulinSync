import { Formik, Form, Field } from "formik";
import css from "./ModalAddRation.module.css";

interface IFormValues {
  daytime: string;
  food: string;
  glucose: string;
  insulin1: string;
  insulin2: string;
  quantity: string;
  unit: string;
}

export default function ModalAddRation() {
  const initialValues: IFormValues = {
    daytime: "",
    food: "",
    glucose: "",
    insulin1: "",
    insulin2: "",
    quantity: "",
    unit: "",
  };
  const handleSubmit = (values: IFormValues | number) => {
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className={css.container}>
            <div>
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
            </div>

            <div className={css.countContainer}>
              <div>
                <div className={css.countInsulin}>
                  <label className={css.countContainer}>
                    <Field
                      className={css.glucose}
                      type="text"
                      name="glucose"
                      placeholder="ммоль"
                    ></Field>
                  </label>
                  <div>
                    <p>5.3</p>
                  </div>
                </div>
              </div>

              <div className={css.insulin}>
                <label className={css.countContainer}>
                  <Field
                    placeholder="Инсулин"
                    className={css.glucose}
                    type="text"
                    name="insulin1"
                  ></Field>
                </label>
                <label className={css.countContainer}>
                  <Field
                    placeholder="Инсулин"
                    className={css.glucose}
                    type="text"
                    name="insulin2"
                  ></Field>
                </label>
              </div>
            </div>
          </div>

          <div className={css.test}>
            <label className={css.foodInput}>
              <Field type="text" name="food" placeholder="Еда"></Field>
            </label>
            <div className={css.countFood}>
              <Field
                className={css.test2}
                type="text"
                name="quantity"
                placeholder="Кол-во"
              ></Field>
              <Field
                className={css.test2}
                type="text"
                name="unit"
                placeholder="Ед.изм"
              ></Field>
            </div>
            <div>
              <p>5ед</p>
            </div>
          </div>
          {/* ============================================ */}
        </Form>
      </Formik>
    </>
  );
}
