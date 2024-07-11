import { Formik, Form, Field } from "formik";

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
          <Field as="select" name="daytime">
            <option value="breakfast">Завтрак</option>
            <option value="lunch">Обед</option>
            <option value="dinner">Ужин</option>
          </Field>
          <div>
            <p>24.06.2024</p>
            <p>10:15</p>
          </div>
          <label>
            Еда
            <Field type="text" name="food"></Field>
          </label>
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
          <label>
            Кол-во
            <Field type="text" name="quantity"></Field>
          </label>
          <label>
            Ед.изм
            <Field type="text" name="unit"></Field>
          </label>
          <div>5ед</div>
        </Form>
      </Formik>
    </>
  );
}
